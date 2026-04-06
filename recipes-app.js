/* =====================================================
   DIABLO II — HORADRIC CUBE RECIPES — recipes-app.js
   ===================================================== */

'use strict';

const CATEGORY_ORDER = ['runes', 'socketing', 'upgrade', 'reroll', 'crafting', 'jewelry', 'respec', 'quest', 'misc'];

const CATEGORY_LABELS = {
  runes:     'Runes',
  socketing: 'Socketing',
  upgrade:   'Item Upgrades',
  reroll:    'Rerolling',
  crafting:  'Crafting',
  jewelry:   'Jewelry',
  respec:    'Respec',
  quest:     'Quest',
  misc:      'Miscellaneous'
};

// ─── State ───────────────────────────────────────────
const state = {
  sort: 'category',
  filters: {
    search:   '',
    category: 'all',
    patch:    'all',
    ladder:   'all'
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
    { id: 'categoryFilter', key: 'category' },
    { id: 'patchFilter',    key: 'patch'    },
    { id: 'ladderFilter',   key: 'ladder'   }
  ];
  pillGroups.forEach(({ id, key }) => {
    document.getElementById(id).addEventListener('click', e => {
      const btn = e.target.closest('.pill');
      if (!btn) return;
      document.getElementById(id).querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      state.filters[key] = btn.dataset[key];
      render();
    });
  });

  // Reset
  document.getElementById('resetBtn').addEventListener('click', resetAll);

  // Sort
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.sort = btn.dataset.sort;
      render();
    });
  });

}

// ─── Filter ───────────────────────────────────────────
function getFiltered() {
  const { search, category, patch, ladder } = state.filters;
  return RECIPES_DATA.filter(r => {
    if (category !== 'all' && r.category !== category) return false;
    if (patch    !== 'all' && r.patch    !== patch)    return false;
    if (ladder === 'true'  && !r.ladder)               return false;
    if (ladder === 'false' &&  r.ladder)               return false;

    if (search) {
      const hay = [
        r.name,
        r.description,
        r.category,
        r.subcategory,
        r.notes || '',
        ...r.inputs.map(i => i.item),
        ...r.outputs.map(o => o.item)
      ].join(' ').toLowerCase();
      if (!hay.includes(search)) return false;
    }
    return true;
  });
}

// ─── Render ───────────────────────────────────────────
function render() {
  const filtered = getFiltered();
  document.getElementById('statTotal').textContent = `${RECIPES_DATA.length} recipes`;
  document.getElementById('statShown').textContent = `${filtered.length} shown`;

  const grid       = document.getElementById('recipesGrid');
  const emptyState = document.getElementById('emptyState');
  grid.innerHTML   = '';

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  if (state.sort === 'category') {
    // Group by category in canonical order
    const groups = {};
    CATEGORY_ORDER.forEach(c => groups[c] = []);
    filtered.forEach(r => {
      if (groups[r.category]) groups[r.category].push(r);
    });

    CATEGORY_ORDER.forEach(cat => {
      const recipes = groups[cat];
      if (!recipes || recipes.length === 0) return;

      const sorted = [...recipes].sort((a, b) => {
        if (cat === 'runes' && a.runeLevel != null && b.runeLevel != null) {
          return a.runeLevel - b.runeLevel;
        }
        return a.name.localeCompare(b.name);
      });

      const wrapper = document.createElement('div');
      wrapper.className = `recipes-category-section category-${cat}`;
      wrapper.innerHTML = `
        <div class="recipe-category-header">
          <span class="recipe-category-text">${CATEGORY_LABELS[cat]}</span>
          <span class="recipe-category-line"></span>
        </div>
        <div class="recipes-grid category-grid"></div>`;

      const innerGrid = wrapper.querySelector('.recipes-grid');
      sorted.forEach(r => innerGrid.appendChild(buildCard(r)));
      grid.appendChild(wrapper);
    });
  } else {
    // Flat sorted list
    const sorted = [...filtered];
    if (state.sort === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'recipes-flat-grid';
    const innerGrid = document.createElement('div');
    innerGrid.className = 'recipes-grid';
    sorted.forEach(r => innerGrid.appendChild(buildCard(r)));
    wrapper.appendChild(innerGrid);
    grid.appendChild(wrapper);
  }
}

// ─── Card builder ─────────────────────────────────────
function buildCard(recipe) {
  const isExpansion = recipe.patch === '2026';
  const card = document.createElement('div');
  card.className = `recipe-card${isExpansion ? ' is-expansion' : ''}${recipe.ladder ? ' is-ladder' : ''}`;

  // All inputs
  const inputsHtml = recipe.inputs.map(i =>
    `<div class="recipe-input-line">
      ${i.quantity > 1 ? `<span class="recipe-qty">${i.quantity}×</span>` : ''}
      <span>${i.item}</span>
    </div>`
  ).join('');

  // Output
  const outputHtml = recipe.outputs.map(o =>
    `<div class="recipe-output-line">${o.item}</div>`
  ).join('');

  const patchBadge = patchLabel(recipe);
  const ladderBadge = recipe.ladder
    ? `<span class="badge badge-ladder">Ladder Only</span>`
    : '';
  const catBadge = `<span class="badge badge-category badge-cat-${recipe.category}">${CATEGORY_LABELS[recipe.category]}</span>`;
  const subcatBadge = recipe.subcategory !== CATEGORY_LABELS[recipe.category]
    ? `<span class="badge badge-type">${recipe.subcategory}</span>`
    : '';

  card.innerHTML = `
    <div class="recipe-card-head">
      <div class="recipe-card-top">
        <div class="recipe-name">${recipe.name}</div>
      </div>
      <div class="recipe-badges">
        ${catBadge}
        ${subcatBadge}
        ${patchBadge}
        ${ladderBadge}
      </div>
    </div>
    <div class="recipe-inputs-preview">
      <div class="recipe-section-label">Ingredients</div>
      ${inputsHtml}
    </div>
    <div class="recipe-output-preview">
      <div class="recipe-section-label">Result</div>
      ${outputHtml}
    </div>`;

  return card;
}

function patchLabel(recipe) {
  if (recipe.patch === '2026') return `<span class="badge badge-expansion">Reign of the Warlock</span>`;
  if (recipe.patch === '2.4')  return `<span class="badge badge-patch">Patch 2.4</span>`;
  if (recipe.patch === '2.6')  return `<span class="badge badge-patch">Patch 2.6</span>`;
  return '';
}

// ─── Reset ────────────────────────────────────────────
function resetAll() {
  state.sort = 'category';
  state.filters = { search: '', category: 'all', patch: 'all', ladder: 'all' };
  document.getElementById('searchInput').value = '';
  ['categoryFilter', 'patchFilter', 'ladderFilter'].forEach(id => {
    document.getElementById(id).querySelectorAll('.pill').forEach((p, i) =>
      p.classList.toggle('active', i === 0));
  });
  document.querySelectorAll('.sort-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  render();
}

window.resetAll = resetAll;
init();
