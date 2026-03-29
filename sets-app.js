/* =====================================================
   DIABLO II — ITEM SETS — sets-app.js
   ===================================================== */

'use strict';

const TIER_ORDER = ['Normal', 'Exceptional', 'Elite'];

// ─── State ───────────────────────────────────────────
const state = {
  filters: {
    search:  '',
    tier:    'all',
    cls:     'all',
    patch:   'all',
    ladder:  'all'
  }
};

// ─── Init ─────────────────────────────────────────────
function init() {
  wireEvents();
  render();
}

// ─── Wire events ──────────────────────────────────────
function wireEvents() {
  // Search
  let searchTimer;
  document.getElementById('searchInput').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.filters.search = e.target.value.toLowerCase().trim();
      render();
    }, 180);
  });

  // Pill filters
  const pillGroups = [
    { id: 'tierFilter',   key: 'tier'   },
    { id: 'classFilter',  key: 'cls'    },
    { id: 'patchFilter',  key: 'patch'  },
    { id: 'ladderFilter', key: 'ladder' }
  ];
  pillGroups.forEach(({ id, key }) => {
    document.getElementById(id).addEventListener('click', e => {
      const btn = e.target.closest('.pill');
      if (!btn) return;
      document.getElementById(id).querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      state.filters[key] = btn.dataset[key === 'cls' ? 'class' : key];
      render();
    });
  });

  // Reset
  document.getElementById('resetBtn').addEventListener('click', resetAll);

  // Modal
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ─── Filter ───────────────────────────────────────────
function getFiltered() {
  const { search, tier, cls, patch, ladder } = state.filters;
  return SETS_DATA.filter(set => {
    if (tier   !== 'all' && set.tier  !== tier)    return false;
    if (cls    !== 'all' && set.class !== cls && !(cls === 'Any' && set.class === 'Any')) {
      if (cls !== 'Any' && set.class !== cls) return false;
    }
    if (patch !== 'all') {
      const matchOriginal = patch === 'original' && (set.patch === 'classic' || set.patch === 'lod');
      if (!matchOriginal && set.patch !== patch) return false;
    }
    if (ladder === 'true'  && !set.ladder)          return false;
    if (ladder === 'false' &&  set.ladder)          return false;

    if (search) {
      const hay = [
        set.name,
        set.class,
        set.tier,
        ...set.pieces.map(p => p.name + ' ' + p.type),
        ...set.partialBonuses,
        ...set.fullBonuses,
        set.note || ''
      ].join(' ').toLowerCase();
      if (!hay.includes(search)) return false;
    }
    return true;
  });
}

// ─── Render ───────────────────────────────────────────
function render() {
  const filtered = getFiltered();
  document.getElementById('statTotal').textContent = `${SETS_DATA.length} sets`;
  document.getElementById('statShown').textContent = `${filtered.length} shown`;

  const grid       = document.getElementById('setsGrid');
  const emptyState = document.getElementById('emptyState');
  grid.innerHTML   = '';

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  // Group by tier in canonical order
  const groups = {};
  TIER_ORDER.forEach(t => groups[t] = []);
  filtered.forEach(set => {
    if (groups[set.tier]) groups[set.tier].push(set);
  });

  TIER_ORDER.forEach(tier => {
    const sets = groups[tier];
    if (!sets || sets.length === 0) return;

    // Tier wrapper div (for grid + header)
    const wrapper = document.createElement('div');
    wrapper.className = `sets-tier-section tier-${tier}`;
    wrapper.innerHTML = `
      <div class="tier-header">
        <span class="tier-header-text">${tier} Sets</span>
        <span class="tier-header-line"></span>
      </div>
      <div class="sets-grid tier-grid"></div>`;

    const innerGrid = wrapper.querySelector('.sets-grid');
    sets.forEach(set => innerGrid.appendChild(buildCard(set)));
    grid.appendChild(wrapper);
  });
}

// ─── Card builder ─────────────────────────────────────
function buildCard(set) {
  const isExpansion = set.patch === '2026';
  const card = document.createElement('div');
  card.className = `set-card tier-${set.tier}${isExpansion ? ' is-expansion' : ''}`;

  const patchBadge = patchLabel(set);
  const classBadge = set.class !== 'Any'
    ? `<span class="badge badge-type badge-class">${set.class}</span>`
    : '';

  // Pieces preview — show first 3
  const piecesHtml = set.pieces.slice(0, 3).map(p =>
    `<div class="set-piece-line">${p.name} <span class="piece-type">${p.type}</span></div>`
  ).join('');
  const moreCount = set.pieces.length - 3;

  // Full set bonus preview — first 3
  const bonusHtml = set.fullBonuses.slice(0, 3).map(b =>
    `<div class="set-bonus-line">${b}</div>`
  ).join('');
  const moreBonuses = set.fullBonuses.length - 3;

  card.innerHTML = `
    <div class="set-card-head">
      <div class="set-card-top">
        <div class="set-name">${set.name}</div>
        <div class="set-level">Req. Lvl ${set.level}</div>
      </div>
      <div class="set-badges">
        <span class="badge badge-tier-${set.tier}">${set.tier}</span>
        <span class="badge badge-type">${set.pieces.length} pieces</span>
        ${classBadge}
        ${patchBadge}
      </div>
    </div>
    <div class="set-pieces-preview">
      ${piecesHtml}
      ${moreCount > 0 ? `<div class="set-more">+${moreCount} more pieces…</div>` : ''}
    </div>
    <div class="set-bonus-preview">
      <div class="set-bonus-label">Full Set Bonus</div>
      ${bonusHtml}
      ${moreBonuses > 0 ? `<div class="set-bonus-more">+${moreBonuses} more bonuses…</div>` : ''}
    </div>`;

  card.addEventListener('click', () => openModal(set));
  return card;
}

function patchLabel(set) {
  if (set.patch === '2026')    return `<span class="badge badge-expansion">Reign of the Warlock</span>`;
  if (set.patch === '2.6')     return `<span class="badge badge-patch">Patch 2.6</span>`;
  if (set.patch === 'lod')     return `<span class="badge badge-type">Lord of Destruction</span>`;
  if (set.patch === 'classic') return `<span class="badge badge-type">Classic</span>`;
  return '';
}

// ─── Modal ────────────────────────────────────────────
function openModal(set) {
  history.replaceState(null, '', '#' + encodeURIComponent(set.name));
  const isExpansion = set.patch === '2026';
  const nameClass   = isExpansion ? 'is-expansion' : `tier-${set.tier}`;

  // Partial bonuses
  const partialHtml = set.partialBonuses.length > 0
    ? `<div class="modal-section-label">Partial Set Bonuses</div>
       <div class="modal-bonuses-section">
         ${set.partialBonuses.map(b => {
           const m = b.match(/^(\([^)]+\))\s+(.+)$/);
           if (m) return `<div class="modal-partial-bonus"><span class="bonus-condition">${m[1]}</span>${m[2]}</div>`;
           return `<div class="modal-partial-bonus">${b}</div>`;
         }).join('')}
       </div>`
    : '';

  // Full bonuses
  const fullHtml = `
    <div class="modal-section-label">Full Set Bonus</div>
    <ul class="modal-full-bonus-list">
      ${set.fullBonuses.map(b => `<li class="modal-full-bonus-item">${b}</li>`).join('')}
    </ul>`;

  // Note
  const noteHtml = set.note
    ? `<div class="modal-set-note">⚔ ${set.note}</div>`
    : '';

  // Expansion note
  const expansionHtml = isExpansion
    ? `<div class="modal-expansion-note">⚔ New in Diablo II: Resurrected — <em>Reign of the Warlock</em> (2026 Expansion)</div>`
    : '';

  const html = `
    <div class="modal-inner">
      <div class="modal-set-name ${nameClass}">${set.name}</div>
      <div class="modal-meta">
        <span class="badge badge-tier-${set.tier}" style="font-size:0.82rem;padding:4px 12px;">${set.tier}</span>
        <span class="badge badge-type" style="font-size:0.82rem;padding:4px 12px;">Req. Level ${set.level}</span>
        <span class="badge badge-type" style="font-size:0.82rem;padding:4px 12px;">${set.pieces.length} Pieces</span>
        ${set.class !== 'Any' ? `<span class="badge badge-class" style="font-size:0.82rem;padding:4px 12px;">${set.class} Only</span>` : ''}
        ${patchLabel(set)}
        ${set.ladder ? `<span class="badge badge-ladder" style="font-size:0.82rem;padding:4px 12px;">Ladder Only</span>` : ''}
      </div>

      <div class="modal-section-label">Set Pieces</div>
      <div class="modal-pieces-list">
        ${set.pieces.map(p => `
          <div class="modal-piece-block">
            <div class="modal-piece-header">
              <span class="modal-piece-name">${p.name}</span>
              <span class="modal-piece-meta"><span class="modal-piece-type">${p.type}</span> &nbsp;·&nbsp; <span class="modal-piece-lvl">Req. Lvl ${p.reqLevel}</span></span>
            </div>
            ${p.stats && p.stats.length ? `<ul class="modal-piece-stats">
              ${p.stats.map(s => `<li class="modal-piece-stat">${s}</li>`).join('')}
            </ul>` : ''}
          </div>`).join('')}
      </div>

      ${partialHtml}
      ${fullHtml}
      ${noteHtml}
      ${expansionHtml}
    </div>`;

  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = '';
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

// ─── Reset ────────────────────────────────────────────
function resetAll() {
  state.filters = { search: '', tier: 'all', cls: 'all', patch: 'all', ladder: 'all' };
  document.getElementById('searchInput').value = '';
  ['tierFilter', 'classFilter', 'patchFilter', 'ladderFilter'].forEach(id => {
    document.getElementById(id).querySelectorAll('.pill').forEach((p, i) =>
      p.classList.toggle('active', i === 0));
  });
  render();
}

window.resetAll = resetAll;
init();

// ─── Hash-based deep link ─────────────────────────────
window.addEventListener('load', () => {
  if (!window.location.hash) return;
  const name = decodeURIComponent(window.location.hash.slice(1));
  const set = SETS_DATA.find(s => s.name === name);
  if (set) openModal(set);
});
