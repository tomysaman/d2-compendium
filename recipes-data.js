/* =====================================================
   DIABLO II — HORADRIC CUBE RECIPES DATA
   Source: diablo2.io/recipes/
   ===================================================== */

'use strict';

const RECIPES_DATA = [

  /* ══════════════════════════════════════════
     QUEST
  ══════════════════════════════════════════ */
  {
    id: 1,
    name: "Horadric Staff",
    category: "quest",
    subcategory: "Quest Item",
    description: "Combine the Amulet of the Viper and the Staff of Kings to create the Horadric Staff.",
    inputs: [
      { quantity: 1, item: "Amulet of the Viper" },
      { quantity: 1, item: "Staff of Kings" }
    ],
    outputs: [{ item: "Horadric Staff" }],
    notes: "Required for the Act 2 quest. Use it to open Tal Rasha's Tomb.",
    patch: "classic",
    ladder: false
  },
  {
    id: 2,
    name: "Khalim's Will",
    category: "quest",
    subcategory: "Quest Item",
    description: "Combine Khalim's four body parts and his flail to create Khalim's Will.",
    inputs: [
      { quantity: 1, item: "Khalim's Eye" },
      { quantity: 1, item: "Khalim's Brain" },
      { quantity: 1, item: "Khalim's Heart" },
      { quantity: 1, item: "Khalim's Flail" }
    ],
    outputs: [{ item: "Khalim's Will" }],
    notes: "Required for Act 3 quest. Use Khalim's Will to destroy the Compelling Orb and enter Travincal.",
    patch: "classic",
    ladder: false
  },
  {
    id: 3,
    name: "Portal to the Secret Cow Level",
    category: "quest",
    subcategory: "Portal",
    description: "Open a portal to the Secret Cow Level.",
    inputs: [
      { quantity: 1, item: "Tome of Town Portal" },
      { quantity: 1, item: "Wirt's Leg" }
    ],
    outputs: [{ item: "Portal to the Secret Cow Level" }],
    notes: "Must be used in Act 1. You must have completed the game on the current difficulty. The character who completes the Cow Level cannot open the portal again on that difficulty.",
    patch: "classic",
    ladder: false
  },
  {
    id: 4,
    name: "Portal to Matron's Den / Furnace of Pain / Forgotten Sands",
    category: "quest",
    subcategory: "Portal",
    description: "Open a portal to one of the three Uber mini-areas (rotates per game instance).",
    inputs: [
      { quantity: 1, item: "Key of Terror" },
      { quantity: 1, item: "Key of Hate" },
      { quantity: 1, item: "Key of Destruction" }
    ],
    outputs: [{ item: "Portal to Matron's Den, Furnace of Pain, or Forgotten Sands (random)" }],
    notes: "Keys drop from Act bosses on Hell difficulty. Defeat the mini-uber bosses inside to collect Mephisto's Brain, Diablo's Horn, and Baal's Eye.",
    patch: "classic",
    ladder: false
  },
  {
    id: 5,
    name: "Portal to Uber Tristram",
    category: "quest",
    subcategory: "Portal",
    description: "Open a portal to Uber Tristram to fight the Uber bosses.",
    inputs: [
      { quantity: 1, item: "Mephisto's Brain" },
      { quantity: 1, item: "Diablo's Horn" },
      { quantity: 1, item: "Baal's Eye" }
    ],
    outputs: [{ item: "Portal to Uber Tristram" }],
    notes: "Defeat Uber Diablo, Uber Mephisto, and Uber Baal. Uber Diablo drops the Hellfire Torch charm.",
    patch: "classic",
    ladder: false
  },
  {
    id: 6,
    name: "Portal to Colossal Summit",
    category: "quest",
    subcategory: "Portal",
    description: "Open a portal to the Colossal Summit, a new Reign of the Warlock uber area.",
    inputs: [
      { quantity: 1, item: "Talic's Anguish" },
      { quantity: 1, item: "Korlic's Pain" },
      { quantity: 1, item: "Madawc's Ire" },
      { quantity: 1, item: "Bul-Kathos' Nightmare" },
      { quantity: 1, item: "Worusk's End" }
    ],
    outputs: [{ item: "Portal to Colossal Summit" }],
    notes: "New in Reign of the Warlock (2026). Requires five unique boss drops from the new expansion content.",
    patch: "2026",
    ladder: false
  },

  /* ══════════════════════════════════════════
     RESPEC
  ══════════════════════════════════════════ */
  {
    id: 10,
    name: "Token of Absolution",
    category: "respec",
    subcategory: "Respec",
    description: "Combine the four twisted essences to create a Token of Absolution, which grants a full character respec.",
    inputs: [
      { quantity: 1, item: "Twisted Essence of Suffering (from Andariel/Duriel on Hell)" },
      { quantity: 1, item: "Charged Essence of Hatred (from Mephisto on Hell)" },
      { quantity: 1, item: "Burning Essence of Terror (from Diablo on Hell)" },
      { quantity: 1, item: "Festering Essence of Destruction (from Baal on Hell)" }
    ],
    outputs: [{ item: "Token of Absolution — use to respec all stat and skill points" }],
    notes: "Each essence drops only on Hell difficulty from the respective boss. Using the Token resets all skill and stat points for the character. Added in patch 1.13.",
    patch: "2.4",
    ladder: false
  },

  /* ══════════════════════════════════════════
     REPAIR & RECHARGE
  ══════════════════════════════════════════ */
  {
    id: 20,
    name: "Repair Armor",
    category: "misc",
    subcategory: "Repair",
    description: "Fully repair any armor using a Ral rune.",
    inputs: [
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Any Armor (damaged)" }
    ],
    outputs: [{ item: "Fully Repaired Armor" }],
    notes: "Cheaper than vendor repair for valuable armors. Does not recharge charges.",
    patch: "classic",
    ladder: false
  },
  {
    id: 21,
    name: "Repair & Recharge Weapon",
    category: "misc",
    subcategory: "Repair",
    description: "Fully repair and recharge a weapon using an Ort rune.",
    inputs: [
      { quantity: 1, item: "Ort Rune" },
      { quantity: 1, item: "Any Chipped Gem" },
      { quantity: 1, item: "Any Weapon (damaged or depleted charges)" }
    ],
    outputs: [{ item: "Fully Repaired and Recharged Weapon" }],
    notes: "Restores both durability and item charges (e.g., Teleport staves). Works on weapons only.",
    patch: "classic",
    ladder: false
  },
  {
    id: 22,
    name: "Repair & Recharge Armor",
    category: "misc",
    subcategory: "Repair",
    description: "Fully repair and recharge an armor using a Ral rune.",
    inputs: [
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Any Flawed Gem" },
      { quantity: 1, item: "Any Armor (damaged or depleted charges)" }
    ],
    outputs: [{ item: "Fully Repaired and Recharged Armor" }],
    notes: "Restores durability and item charges on armor pieces.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     SOCKETING
  ══════════════════════════════════════════ */
  {
    id: 30,
    name: "Add Sockets to Normal Weapon",
    category: "socketing",
    subcategory: "Add Sockets",
    description: "Add 1–6 random sockets to a non-socketed Normal weapon.",
    inputs: [
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Amn Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Normal (white) Weapon — no sockets, not magic/rare/set/unique" }
    ],
    outputs: [{ item: "Normal Weapon with 1–6 Sockets (random)" }],
    notes: "Socket count is random and capped by the item type's maximum. Only works on Normal (white/grey) quality items.",
    patch: "classic",
    ladder: false
  },
  {
    id: 31,
    name: "Add Sockets to Normal Body Armor",
    category: "socketing",
    subcategory: "Add Sockets",
    description: "Add 1–4 random sockets to a non-socketed Normal body armor.",
    inputs: [
      { quantity: 1, item: "Tal Rune" },
      { quantity: 1, item: "Thul Rune" },
      { quantity: 1, item: "Perfect Topaz" },
      { quantity: 1, item: "Any Normal Body Armor — no sockets" }
    ],
    outputs: [{ item: "Normal Body Armor with 1–4 Sockets (random)" }],
    notes: "Normal quality only. Socket count capped by armor type max (most chest armors cap at 4).",
    patch: "classic",
    ladder: false
  },
  {
    id: 32,
    name: "Add Sockets to Normal Helm",
    category: "socketing",
    subcategory: "Add Sockets",
    description: "Add 1–3 random sockets to a non-socketed Normal helm.",
    inputs: [
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Thul Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Normal Helm — no sockets" }
    ],
    outputs: [{ item: "Normal Helm with 1–3 Sockets (random)" }],
    notes: "Normal quality only.",
    patch: "classic",
    ladder: false
  },
  {
    id: 33,
    name: "Add Sockets to Normal Shield",
    category: "socketing",
    subcategory: "Add Sockets",
    description: "Add 1–4 random sockets to a non-socketed Normal shield.",
    inputs: [
      { quantity: 1, item: "Tal Rune" },
      { quantity: 1, item: "Amn Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Normal Shield — no sockets" }
    ],
    outputs: [{ item: "Normal Shield with 1–4 Sockets (random)" }],
    notes: "Normal quality only. Socket count capped by shield type max.",
    patch: "classic",
    ladder: false
  },
  {
    id: 34,
    name: "Add 1 Socket to Rare Item",
    category: "socketing",
    subcategory: "Add Sockets",
    description: "Add exactly 1 socket to any Rare item.",
    inputs: [
      { quantity: 3, item: "Perfect Skull" },
      { quantity: 1, item: "Any Rare Item" },
      { quantity: 1, item: "Stone of Jordan" }
    ],
    outputs: [{ item: "Rare Item with 1 Socket" }],
    notes: "The item must not already have sockets. This is the only way to socket a Rare item via the Cube. Very expensive — requires 3 Perfect Skulls and a Stone of Jordan.",
    patch: "classic",
    ladder: false
  },
  {
    id: 35,
    name: "Remove Items from Sockets (Unsocket)",
    category: "socketing",
    subcategory: "Unsocket",
    description: "Remove all socketed runes, gems, or jewels from an item. The socketed contents are destroyed.",
    inputs: [
      { quantity: 1, item: "Hel Rune" },
      { quantity: 1, item: "Scroll of Town Portal" },
      { quantity: 1, item: "Any Socketed Item" }
    ],
    outputs: [{ item: "Item with empty sockets (contents destroyed)" }],
    notes: "The gems/runes/jewels inside the sockets are permanently destroyed. Only the base item (with empty sockets) is returned. Essential for clearing a base to insert a runeword.",
    patch: "classic",
    ladder: false
  },
  {
    id: 36,
    name: "Socketed Magic Weapon (ilvl 25)",
    category: "socketing",
    subcategory: "Add Sockets",
    description: "Add sockets to a Magic weapon, producing an item with ilvl 25.",
    inputs: [
      { quantity: 3, item: "Any Chipped Gem (same type)" },
      { quantity: 1, item: "Any Magic Weapon" }
    ],
    outputs: [{ item: "Socketed Magic Weapon (item level 25)" }],
    notes: "The resulting item level of 25 limits which affixes are possible. Useful for creating low-level socketed magic weapons.",
    patch: "classic",
    ladder: false
  },
  {
    id: 37,
    name: "Socketed Magic Weapon (ilvl 30)",
    category: "socketing",
    subcategory: "Add Sockets",
    description: "Add sockets to a Magic weapon, producing an item with ilvl 30.",
    inputs: [
      { quantity: 3, item: "Any Flawless Gem (same type)" },
      { quantity: 1, item: "Any Magic Weapon" }
    ],
    outputs: [{ item: "Socketed Magic Weapon (item level 30)" }],
    notes: "Higher ilvl than the chipped gem version, allowing slightly better affixes.",
    patch: "classic",
    ladder: false
  },
  {
    id: 38,
    name: "Socketed Magic Weapon (Same Type)",
    category: "socketing",
    subcategory: "Add Sockets",
    description: "Convert a socketed weapon into a new socketed magic weapon of the same base type.",
    inputs: [
      { quantity: 3, item: "Any Normal Gem (same type)" },
      { quantity: 1, item: "Any Socketed Weapon" }
    ],
    outputs: [{ item: "Socketed Magic Weapon of Same Type" }],
    notes: "The output is a new magic weapon of the same base type with sockets. The original weapon's sockets and any insertions are lost.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     ITEM UPGRADES — UNIQUE
  ══════════════════════════════════════════ */
  {
    id: 40,
    name: "Upgrade Unique Armor: Normal → Exceptional",
    category: "upgrade",
    subcategory: "Unique Armor",
    description: "Upgrade a Normal unique armor to its Exceptional counterpart.",
    inputs: [
      { quantity: 1, item: "Tal Rune" },
      { quantity: 1, item: "Shael Rune" },
      { quantity: 1, item: "Perfect Diamond" },
      { quantity: 1, item: "Normal Unique Armor" }
    ],
    outputs: [{ item: "Exceptional Unique Armor (same unique properties)" }],
    notes: "The unique affixes are preserved. The base item upgrades to its Exceptional version (higher defense, increased requirements). Item level also increases.",
    patch: "classic",
    ladder: false
  },
  {
    id: 41,
    name: "Upgrade Unique Armor: Exceptional → Elite",
    category: "upgrade",
    subcategory: "Unique Armor",
    description: "Upgrade an Exceptional unique armor to its Elite counterpart.",
    inputs: [
      { quantity: 1, item: "Ko Rune" },
      { quantity: 1, item: "Lem Rune" },
      { quantity: 1, item: "Perfect Diamond" },
      { quantity: 1, item: "Exceptional Unique Armor" }
    ],
    outputs: [{ item: "Elite Unique Armor (same unique properties)" }],
    notes: "Highest upgrade tier for armor. Significantly higher defense. Strength requirement increases substantially.",
    patch: "classic",
    ladder: false
  },
  {
    id: 42,
    name: "Upgrade Unique Weapon: Normal → Exceptional",
    category: "upgrade",
    subcategory: "Unique Weapon",
    description: "Upgrade a Normal unique weapon to its Exceptional counterpart.",
    inputs: [
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Sol Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Normal Unique Weapon" }
    ],
    outputs: [{ item: "Exceptional Unique Weapon (same unique properties)" }],
    notes: "Unique affixes preserved. The base weapon upgrades to its Exceptional version (higher damage, increased requirements).",
    patch: "classic",
    ladder: false
  },
  {
    id: 43,
    name: "Upgrade Unique Weapon: Exceptional → Elite",
    category: "upgrade",
    subcategory: "Unique Weapon",
    description: "Upgrade an Exceptional unique weapon to its Elite counterpart.",
    inputs: [
      { quantity: 1, item: "Lum Rune" },
      { quantity: 1, item: "Pul Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Exceptional Unique Weapon" }
    ],
    outputs: [{ item: "Elite Unique Weapon (same unique properties)" }],
    notes: "Highest upgrade tier for weapons. Much higher base damage. Strength and Dexterity requirements increase.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     ITEM UPGRADES — RARE
  ══════════════════════════════════════════ */
  {
    id: 44,
    name: "Upgrade Rare Weapon: Normal → Exceptional",
    category: "upgrade",
    subcategory: "Rare Weapon",
    description: "Upgrade a Normal rare weapon to its Exceptional counterpart.",
    inputs: [
      { quantity: 1, item: "Ort Rune" },
      { quantity: 1, item: "Amn Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Normal Rare Weapon" }
    ],
    outputs: [{ item: "Exceptional Rare Weapon (same rare affixes)" }],
    notes: "Rare affixes are preserved. The base upgrades to Exceptional. Very useful for carrying good rare weapons into later difficulties.",
    patch: "classic",
    ladder: false
  },
  {
    id: 45,
    name: "Upgrade Rare Weapon: Exceptional → Elite",
    category: "upgrade",
    subcategory: "Rare Weapon",
    description: "Upgrade an Exceptional rare weapon to its Elite counterpart.",
    inputs: [
      { quantity: 1, item: "Fal Rune" },
      { quantity: 1, item: "Um Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Exceptional Rare Weapon" }
    ],
    outputs: [{ item: "Elite Rare Weapon (same rare affixes)" }],
    notes: "Highest upgrade tier for rare weapons. Rare mods are preserved on the Elite base.",
    patch: "classic",
    ladder: false
  },
  {
    id: 46,
    name: "Upgrade Rare Armor: Normal → Exceptional",
    category: "upgrade",
    subcategory: "Rare Armor",
    description: "Upgrade a Normal rare armor to its Exceptional counterpart.",
    inputs: [
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Thul Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Normal Rare Armor" }
    ],
    outputs: [{ item: "Exceptional Rare Armor (same rare affixes)" }],
    notes: "Rare affixes preserved. Higher defense on the upgraded base.",
    patch: "classic",
    ladder: false
  },
  {
    id: 47,
    name: "Upgrade Rare Armor: Exceptional → Elite",
    category: "upgrade",
    subcategory: "Rare Armor",
    description: "Upgrade an Exceptional rare armor to its Elite counterpart.",
    inputs: [
      { quantity: 1, item: "Ko Rune" },
      { quantity: 1, item: "Pul Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Exceptional Rare Armor" }
    ],
    outputs: [{ item: "Elite Rare Armor (same rare affixes)" }],
    notes: "Highest upgrade tier for rare armor. Rare mods preserved on the Elite base.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     ITEM UPGRADES — SET
  ══════════════════════════════════════════ */
  {
    id: 48,
    name: "Upgrade Set Weapon: Normal → Exceptional",
    category: "upgrade",
    subcategory: "Set Weapon",
    description: "Upgrade a Normal set weapon to its Exceptional counterpart.",
    inputs: [
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Sol Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Normal Set Weapon" }
    ],
    outputs: [{ item: "Exceptional Set Weapon (same set properties)" }],
    notes: "Set properties are preserved. The base upgrades to its Exceptional version.",
    patch: "classic",
    ladder: false
  },
  {
    id: 49,
    name: "Upgrade Set Weapon: Exceptional → Elite",
    category: "upgrade",
    subcategory: "Set Weapon",
    description: "Upgrade an Exceptional set weapon to its Elite counterpart.",
    inputs: [
      { quantity: 1, item: "Lum Rune" },
      { quantity: 1, item: "Pul Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Exceptional Set Weapon" }
    ],
    outputs: [{ item: "Elite Set Weapon (same set properties)" }],
    notes: "Highest upgrade tier for set weapons.",
    patch: "classic",
    ladder: false
  },
  {
    id: 50,
    name: "Upgrade Set Armor: Normal → Exceptional",
    category: "upgrade",
    subcategory: "Set Armor",
    description: "Upgrade a Normal set armor to its Exceptional counterpart.",
    inputs: [
      { quantity: 1, item: "Tal Rune" },
      { quantity: 1, item: "Shael Rune" },
      { quantity: 1, item: "Perfect Diamond" },
      { quantity: 1, item: "Normal Set Armor" }
    ],
    outputs: [{ item: "Exceptional Set Armor (same set properties)" }],
    notes: "Set properties preserved. Higher defense on the Exceptional base.",
    patch: "classic",
    ladder: false
  },
  {
    id: 51,
    name: "Upgrade Set Armor: Exceptional → Elite",
    category: "upgrade",
    subcategory: "Set Armor",
    description: "Upgrade an Exceptional set armor to its Elite counterpart.",
    inputs: [
      { quantity: 1, item: "Ko Rune" },
      { quantity: 1, item: "Lem Rune" },
      { quantity: 1, item: "Perfect Diamond" },
      { quantity: 1, item: "Exceptional Set Armor" }
    ],
    outputs: [{ item: "Elite Set Armor (same set properties)" }],
    notes: "Highest upgrade tier for set armor.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     REROLLING
  ══════════════════════════════════════════ */
  {
    id: 60,
    name: "Reroll Magic Item",
    category: "reroll",
    subcategory: "Magic",
    description: "Reroll a Magic item with entirely new random affixes, keeping the same base type.",
    inputs: [
      { quantity: 3, item: "Perfect Gems (any type, all same type)" },
      { quantity: 1, item: "Any Magic Item" }
    ],
    outputs: [{ item: "Magic Item (same base, new random affixes)" }],
    notes: "All gems must be the same type (e.g., 3 Perfect Rubies). Commonly used on rings and amulets to fish for better rolls.",
    patch: "classic",
    ladder: false
  },
  {
    id: 61,
    name: "Reroll Rare Item",
    category: "reroll",
    subcategory: "Rare",
    description: "Reroll a Rare item with entirely new random affixes, keeping the same base type. Result is low quality.",
    inputs: [
      { quantity: 6, item: "Perfect Skull" },
      { quantity: 1, item: "Any Rare Item" }
    ],
    outputs: [{ item: "Low Quality Rare Item (same base type, new random affixes)" }],
    notes: "All existing mods are lost. The output is low quality — you can use El + Chipped Gem to restore it to Normal quality. Very expensive at 6 Perfect Skulls.",
    patch: "classic",
    ladder: false
  },
  {
    id: 62,
    name: "Upgrade Rare Item Quality (Low → Normal)",
    category: "reroll",
    subcategory: "Quality Fix",
    description: "Convert a Low Quality rare weapon or armor to Normal quality.",
    inputs: [
      { quantity: 1, item: "Eld Rune (weapon) / El Rune (armor)" },
      { quantity: 1, item: "Any Chipped Gem" },
      { quantity: 1, item: "Low Quality Weapon or Armor" }
    ],
    outputs: [{ item: "Normal Quality Weapon or Armor of Same Type" }],
    notes: "Use Eld + Chipped Gem for weapons, El + Chipped Gem for armors. Useful after rerolling a rare item.",
    patch: "classic",
    ladder: false
  },
  {
    id: 63,
    name: "Reroll Rare Item (High Quality)",
    category: "reroll",
    subcategory: "Rare",
    description: "Reroll a Rare item into a high quality version of the same type.",
    inputs: [
      { quantity: 1, item: "Perfect Skull" },
      { quantity: 1, item: "Any Rare Item" },
      { quantity: 1, item: "Stone of Jordan" }
    ],
    outputs: [{ item: "High Quality Rare Item (same base type, new random affixes)" }],
    notes: "More expensive variant that produces a high quality result directly. Requires a Stone of Jordan.",
    patch: "classic",
    ladder: false
  },
  {
    id: 64,
    name: "Magic Sword of the Leech",
    category: "reroll",
    subcategory: "Magic",
    description: "Create a Magic sword with life leech.",
    inputs: [
      { quantity: 4, item: "Any Healing Potion" },
      { quantity: 1, item: "Any Ruby" },
      { quantity: 1, item: "Any Magic Sword" }
    ],
    outputs: [{ item: "Magic Sword of the Leech" }],
    notes: "Produces a magic sword with a life leech modifier. The specific potion and ruby quality affect the output.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     RUNE UPGRADES
     Ordered by output rune level (El=1 … Zod=33)
     3 runes needed up to Lem; 2 runes from Pul onward.
  ══════════════════════════════════════════ */
  {
    id: 70,
    name: "Upgrade Rune: 3 El → 1 Eld",
    category: "runes", subcategory: "Upgrade", runeLevel: 2,
    description: "Combine 3 El runes to create 1 Eld rune.",
    inputs: [{ quantity: 3, item: "El Rune" }],
    outputs: [{ item: "1 Eld Rune" }],
    notes: "Low-tier upgrades (El through Ith) require only 3 runes — no gem needed.",
    patch: "classic", ladder: false
  },
  {
    id: 71,
    name: "Upgrade Rune: 3 Eld → 1 Tir",
    category: "runes", subcategory: "Upgrade", runeLevel: 3,
    description: "Combine 3 Eld runes to create 1 Tir rune.",
    inputs: [{ quantity: 3, item: "Eld Rune" }],
    outputs: [{ item: "1 Tir Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 72,
    name: "Upgrade Rune: 3 Tir → 1 Nef",
    category: "runes", subcategory: "Upgrade", runeLevel: 4,
    description: "Combine 3 Tir runes to create 1 Nef rune.",
    inputs: [{ quantity: 3, item: "Tir Rune" }],
    outputs: [{ item: "1 Nef Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 73,
    name: "Upgrade Rune: 3 Nef → 1 Eth",
    category: "runes", subcategory: "Upgrade", runeLevel: 5,
    description: "Combine 3 Nef runes to create 1 Eth rune.",
    inputs: [{ quantity: 3, item: "Nef Rune" }],
    outputs: [{ item: "1 Eth Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 74,
    name: "Upgrade Rune: 3 Eth → 1 Ith",
    category: "runes", subcategory: "Upgrade", runeLevel: 6,
    description: "Combine 3 Eth runes to create 1 Ith rune.",
    inputs: [{ quantity: 3, item: "Eth Rune" }],
    outputs: [{ item: "1 Ith Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 75,
    name: "Upgrade Rune: 3 Ith → 1 Tal",
    category: "runes", subcategory: "Upgrade", runeLevel: 7,
    description: "Combine 3 Ith runes to create 1 Tal rune.",
    inputs: [{ quantity: 3, item: "Ith Rune" }],
    outputs: [{ item: "1 Tal Rune" }],
    notes: "No gem required for El through Tal. Gems start at the Amn recipe.",
    patch: "classic", ladder: false
  },
  {
    id: 76,
    name: "Upgrade Rune: 3 Tal → 1 Ral",
    category: "runes", subcategory: "Upgrade", runeLevel: 8,
    description: "Combine 3 Tal runes to create 1 Ral rune.",
    inputs: [{ quantity: 3, item: "Tal Rune" }],
    outputs: [{ item: "1 Ral Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 77,
    name: "Upgrade Rune: 3 Ral → 1 Ort",
    category: "runes", subcategory: "Upgrade", runeLevel: 9,
    description: "Combine 3 Ral runes to create 1 Ort rune.",
    inputs: [{ quantity: 3, item: "Ral Rune" }],
    outputs: [{ item: "1 Ort Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 78,
    name: "Upgrade Rune: 3 Ort → 1 Thul",
    category: "runes", subcategory: "Upgrade", runeLevel: 10,
    description: "Combine 3 Ort runes to create 1 Thul rune.",
    inputs: [{ quantity: 3, item: "Ort Rune" }],
    outputs: [{ item: "1 Thul Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 79,
    name: "Upgrade Rune: 3 Thul → 1 Amn",
    category: "runes", subcategory: "Upgrade", runeLevel: 11,
    description: "Combine 3 Thul runes and 1 Chipped Topaz to create 1 Amn rune.",
    inputs: [
      { quantity: 3, item: "Thul Rune" },
      { quantity: 1, item: "Chipped Topaz" }
    ],
    outputs: [{ item: "1 Amn Rune" }],
    notes: "Chipped gems start here. The pattern cycles Topaz→Amethyst→Sapphire→Ruby→Emerald→Diamond.",
    patch: "classic", ladder: false
  },
  {
    id: 80,
    name: "Upgrade Rune: 3 Amn → 1 Sol",
    category: "runes", subcategory: "Upgrade", runeLevel: 12,
    description: "Combine 3 Amn runes and 1 Chipped Amethyst to create 1 Sol rune.",
    inputs: [
      { quantity: 3, item: "Amn Rune" },
      { quantity: 1, item: "Chipped Amethyst" }
    ],
    outputs: [{ item: "1 Sol Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 81,
    name: "Upgrade Rune: 3 Sol → 1 Shael",
    category: "runes", subcategory: "Upgrade", runeLevel: 13,
    description: "Combine 3 Sol runes and 1 Chipped Sapphire to create 1 Shael rune.",
    inputs: [
      { quantity: 3, item: "Sol Rune" },
      { quantity: 1, item: "Chipped Sapphire" }
    ],
    outputs: [{ item: "1 Shael Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 82,
    name: "Upgrade Rune: 3 Shael → 1 Dol",
    category: "runes", subcategory: "Upgrade", runeLevel: 14,
    description: "Combine 3 Shael runes and 1 Chipped Ruby to create 1 Dol rune.",
    inputs: [
      { quantity: 3, item: "Shael Rune" },
      { quantity: 1, item: "Chipped Ruby" }
    ],
    outputs: [{ item: "1 Dol Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 83,
    name: "Upgrade Rune: 3 Dol → 1 Hel",
    category: "runes", subcategory: "Upgrade", runeLevel: 15,
    description: "Combine 3 Dol runes and 1 Chipped Emerald to create 1 Hel rune.",
    inputs: [
      { quantity: 3, item: "Dol Rune" },
      { quantity: 1, item: "Chipped Emerald" }
    ],
    outputs: [{ item: "1 Hel Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 84,
    name: "Upgrade Rune: 3 Hel → 1 Io",
    category: "runes", subcategory: "Upgrade", runeLevel: 16,
    description: "Combine 3 Hel runes and 1 Chipped Diamond to create 1 Io rune.",
    inputs: [
      { quantity: 3, item: "Hel Rune" },
      { quantity: 1, item: "Chipped Diamond" }
    ],
    outputs: [{ item: "1 Io Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 85,
    name: "Upgrade Rune: 3 Io → 1 Lum",
    category: "runes", subcategory: "Upgrade", runeLevel: 17,
    description: "Combine 3 Io runes and 1 Flawed Topaz to create 1 Lum rune.",
    inputs: [
      { quantity: 3, item: "Io Rune" },
      { quantity: 1, item: "Flawed Topaz" }
    ],
    outputs: [{ item: "1 Lum Rune" }],
    notes: "From Lum onward, the gem quality changes to Flawed.",
    patch: "classic", ladder: false
  },
  {
    id: 86,
    name: "Upgrade Rune: 3 Lum → 1 Ko",
    category: "runes", subcategory: "Upgrade", runeLevel: 18,
    description: "Combine 3 Lum runes and 1 Flawed Amethyst to create 1 Ko rune.",
    inputs: [
      { quantity: 3, item: "Lum Rune" },
      { quantity: 1, item: "Flawed Amethyst" }
    ],
    outputs: [{ item: "1 Ko Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 87,
    name: "Upgrade Rune: 3 Ko → 1 Fal",
    category: "runes", subcategory: "Upgrade", runeLevel: 19,
    description: "Combine 3 Ko runes and 1 Flawed Sapphire to create 1 Fal rune.",
    inputs: [
      { quantity: 3, item: "Ko Rune" },
      { quantity: 1, item: "Flawed Sapphire" }
    ],
    outputs: [{ item: "1 Fal Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 88,
    name: "Upgrade Rune: 3 Fal → 1 Lem",
    category: "runes", subcategory: "Upgrade", runeLevel: 20,
    description: "Combine 3 Fal runes and 1 Flawed Ruby to create 1 Lem rune.",
    inputs: [
      { quantity: 3, item: "Fal Rune" },
      { quantity: 1, item: "Flawed Ruby" }
    ],
    outputs: [{ item: "1 Lem Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 89,
    name: "Upgrade Rune: 3 Lem → 1 Pul",
    category: "runes", subcategory: "Upgrade", runeLevel: 21,
    description: "Combine 3 Lem runes and 1 Flawed Emerald to create 1 Pul rune.",
    inputs: [
      { quantity: 3, item: "Lem Rune" },
      { quantity: 1, item: "Flawed Emerald" }
    ],
    outputs: [{ item: "1 Pul Rune" }],
    notes: "From Pul onward, only 2 runes are needed (not 3).",
    patch: "classic", ladder: false
  },
  {
    id: 90,
    name: "Upgrade Rune: 2 Pul → 1 Um",
    category: "runes", subcategory: "Upgrade", runeLevel: 22,
    description: "Combine 2 Pul runes and 1 Flawed Diamond to create 1 Um rune.",
    inputs: [
      { quantity: 2, item: "Pul Rune" },
      { quantity: 1, item: "Flawed Diamond" }
    ],
    outputs: [{ item: "1 Um Rune" }],
    notes: "From Pul onward, only 2 runes are needed (not 3).",
    patch: "classic", ladder: false
  },
  {
    id: 91,
    name: "Upgrade Rune: 2 Um → 1 Mal",
    category: "runes", subcategory: "Upgrade", runeLevel: 23,
    description: "Combine 2 Um runes and 1 Topaz to create 1 Mal rune.",
    inputs: [
      { quantity: 2, item: "Um Rune" },
      { quantity: 1, item: "Topaz" }
    ],
    outputs: [{ item: "1 Mal Rune" }],
    notes: "From Mal through Lo the required gem is Normal quality (no prefix — not Chipped, Flawed, or Flawless).",
    patch: "classic", ladder: false
  },
  {
    id: 92,
    name: "Upgrade Rune: 2 Mal → 1 Ist",
    category: "runes", subcategory: "Upgrade", runeLevel: 24,
    description: "Combine 2 Mal runes and 1 Amethyst to create 1 Ist rune.",
    inputs: [
      { quantity: 2, item: "Mal Rune" },
      { quantity: 1, item: "Amethyst" }
    ],
    outputs: [{ item: "1 Ist Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 93,
    name: "Upgrade Rune: 2 Ist → 1 Gul",
    category: "runes", subcategory: "Upgrade", runeLevel: 25,
    description: "Combine 2 Ist runes and 1 Sapphire to create 1 Gul rune.",
    inputs: [
      { quantity: 2, item: "Ist Rune" },
      { quantity: 1, item: "Sapphire" }
    ],
    outputs: [{ item: "1 Gul Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 94,
    name: "Upgrade Rune: 2 Gul → 1 Vex",
    category: "runes", subcategory: "Upgrade", runeLevel: 26,
    description: "Combine 2 Gul runes and 1 Ruby to create 1 Vex rune.",
    inputs: [
      { quantity: 2, item: "Gul Rune" },
      { quantity: 1, item: "Ruby" }
    ],
    outputs: [{ item: "1 Vex Rune" }],
    notes: "Entry point for high rune upgrades.",
    patch: "classic", ladder: false
  },
  {
    id: 95,
    name: "Upgrade Rune: 2 Vex → 1 Ohm",
    category: "runes", subcategory: "Upgrade", runeLevel: 26.5,
    description: "Combine 2 Vex runes and 1 Emerald to create 1 Ohm rune.",
    inputs: [
      { quantity: 2, item: "Vex Rune" },
      { quantity: 1, item: "Emerald" }
    ],
    outputs: [{ item: "1 Ohm Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 96,
    name: "Upgrade Rune: 2 Ohm → 1 Lo",
    category: "runes", subcategory: "Upgrade", runeLevel: 27,
    description: "Combine 2 Ohm runes and 1 Diamond to create 1 Lo rune.",
    inputs: [
      { quantity: 2, item: "Ohm Rune" },
      { quantity: 1, item: "Diamond" }
    ],
    outputs: [{ item: "1 Lo Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 97,
    name: "Upgrade Rune: 2 Lo → 1 Sur",
    category: "runes", subcategory: "Upgrade", runeLevel: 28,
    description: "Combine 2 Lo runes and 1 Flawless Topaz to create 1 Sur rune.",
    inputs: [
      { quantity: 2, item: "Lo Rune" },
      { quantity: 1, item: "Flawless Topaz" }
    ],
    outputs: [{ item: "1 Sur Rune" }],
    notes: "From Sur onward, the gem quality changes to Flawless.",
    patch: "classic", ladder: false
  },
  {
    id: 98,
    name: "Upgrade Rune: 2 Sur → 1 Ber",
    category: "runes", subcategory: "Upgrade", runeLevel: 29,
    description: "Combine 2 Sur runes and 1 Flawless Amethyst to create 1 Ber rune.",
    inputs: [
      { quantity: 2, item: "Sur Rune" },
      { quantity: 1, item: "Flawless Amethyst" }
    ],
    outputs: [{ item: "1 Ber Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 99,
    name: "Upgrade Rune: 2 Ber → 1 Jah",
    category: "runes", subcategory: "Upgrade", runeLevel: 30,
    description: "Combine 2 Ber runes and 1 Flawless Sapphire to create 1 Jah rune.",
    inputs: [
      { quantity: 2, item: "Ber Rune" },
      { quantity: 1, item: "Flawless Sapphire" }
    ],
    outputs: [{ item: "1 Jah Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 100,
    name: "Upgrade Rune: 2 Jah → 1 Cham",
    category: "runes", subcategory: "Upgrade", runeLevel: 31,
    description: "Combine 2 Jah runes and 1 Flawless Ruby to create 1 Cham rune.",
    inputs: [
      { quantity: 2, item: "Jah Rune" },
      { quantity: 1, item: "Flawless Ruby" }
    ],
    outputs: [{ item: "1 Cham Rune" }],
    notes: "",
    patch: "classic", ladder: false
  },
  {
    id: 101,
    name: "Upgrade Rune: 2 Cham → 1 Zod",
    category: "runes", subcategory: "Upgrade", runeLevel: 32,
    description: "Combine 2 Cham runes and 1 Flawless Emerald to create 1 Zod rune.",
    inputs: [
      { quantity: 2, item: "Cham Rune" },
      { quantity: 1, item: "Flawless Emerald" }
    ],
    outputs: [{ item: "1 Zod Rune" }],
    notes: "Zod is the highest rune and cannot be upgraded further. It is extraordinarily rare.",
    patch: "classic", ladder: false
  },

  /* ══════════════════════════════════════════
     POTIONS
  ══════════════════════════════════════════ */
  {
    id: 200,
    name: "Rejuvenation Potion",
    category: "misc",
    subcategory: "Potion",
    description: "Combine healing potions, mana potions, and a chipped gem to create a Rejuvenation Potion.",
    inputs: [
      { quantity: 3, item: "Any Healing Potion" },
      { quantity: 3, item: "Any Mana Potion" },
      { quantity: 1, item: "Any Chipped Gem" }
    ],
    outputs: [{ item: "Rejuvenation Potion (restores 35% life and mana instantly)" }],
    notes: "All healing potions must be the same quality, and all mana potions must be the same quality.",
    patch: "classic",
    ladder: false
  },
  {
    id: 201,
    name: "Full Rejuvenation Potion",
    category: "misc",
    subcategory: "Potion",
    description: "Combine healing potions, mana potions, and a normal gem to create a Full Rejuvenation Potion.",
    inputs: [
      { quantity: 3, item: "Any Healing Potion" },
      { quantity: 3, item: "Any Mana Potion" },
      { quantity: 1, item: "Any Normal Gem" }
    ],
    outputs: [{ item: "Full Rejuvenation Potion (restores 100% life and mana instantly)" }],
    notes: "Uses a Normal quality (not Chipped, Flawed, etc.) gem. Full Rejuv potions are highly valuable in combat.",
    patch: "classic",
    ladder: false
  },
  {
    id: 202,
    name: "Antidote Potion",
    category: "misc",
    subcategory: "Potion",
    description: "Combine a Strangling Gas Potion with any Healing Potion to create an Antidote Potion.",
    inputs: [
      { quantity: 1, item: "Strangling Gas Potion" },
      { quantity: 1, item: "Any Healing Potion" }
    ],
    outputs: [{ item: "Antidote Potion (cures poison and increases poison resist temporarily)" }],
    notes: "Strangling Gas Potions are thrown potions found in Act 1 and 2. Antidote Potions are useful in Acts with heavy poison damage.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     JEWELRY
  ══════════════════════════════════════════ */
  {
    id: 100,
    name: "Jade Ring",
    category: "jewelry",
    subcategory: "Ring",
    description: "Create a Jade Ring with poison resistance.",
    inputs: [
      { quantity: 1, item: "Any Magic Ring" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Antidote Potion" }
    ],
    outputs: [{ item: "Jade Ring (+poison resistance)" }],
    notes: "The Jade Ring always has poison resistance as a guaranteed mod, plus random magic affixes.",
    patch: "classic",
    ladder: false
  },
  {
    id: 101,
    name: "Garnet Ring",
    category: "jewelry",
    subcategory: "Ring",
    description: "Create a Garnet Ring with fire resistance.",
    inputs: [
      { quantity: 1, item: "Any Magic Ring" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Exploding Potion" }
    ],
    outputs: [{ item: "Garnet Ring (+fire resistance)" }],
    notes: "The Garnet Ring always has fire resistance as a guaranteed mod.",
    patch: "classic",
    ladder: false
  },
  {
    id: 102,
    name: "Cobalt Ring",
    category: "jewelry",
    subcategory: "Ring",
    description: "Create a Cobalt Ring with cold resistance.",
    inputs: [
      { quantity: 1, item: "Any Magic Ring" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Thawing Potion" }
    ],
    outputs: [{ item: "Cobalt Ring (+cold resistance)" }],
    notes: "The Cobalt Ring always has cold resistance as a guaranteed mod.",
    patch: "classic",
    ladder: false
  },
  {
    id: 103,
    name: "Coral Ring",
    category: "jewelry",
    subcategory: "Ring",
    description: "Create a Coral Ring with lightning resistance.",
    inputs: [
      { quantity: 1, item: "Any Magic Ring" },
      { quantity: 1, item: "Perfect Topaz" },
      { quantity: 1, item: "Rejuvenation Potion" }
    ],
    outputs: [{ item: "Coral Ring (+lightning resistance)" }],
    notes: "The Coral Ring always has lightning resistance as a guaranteed mod.",
    patch: "classic",
    ladder: false
  },
  {
    id: 104,
    name: "Prismatic Amulet",
    category: "jewelry",
    subcategory: "Amulet",
    description: "Create a Prismatic Amulet with all resistances.",
    inputs: [
      { quantity: 6, item: "Perfect Gems (one of each type: Amethyst, Diamond, Emerald, Ruby, Sapphire, Topaz)" },
      { quantity: 1, item: "Any Magic Amulet" }
    ],
    outputs: [{ item: "Prismatic Amulet (+all resistances)" }],
    notes: "Requires one of each gem type. The Prismatic Amulet guarantees a bonus to all resistances.",
    patch: "classic",
    ladder: false
  },
  {
    id: 105,
    name: "Magic Amulet from Rings",
    category: "jewelry",
    subcategory: "Amulet",
    description: "Convert 3 Magic Rings into 1 random Magic Amulet.",
    inputs: [
      { quantity: 3, item: "Any Magic Ring" }
    ],
    outputs: [{ item: "Random Magic Amulet" }],
    notes: "A simple way to convert rings you don't need into an amulet. The output affixes are completely random.",
    patch: "classic",
    ladder: false
  },
  {
    id: 106,
    name: "Magic Ring from Amulets",
    category: "jewelry",
    subcategory: "Ring",
    description: "Convert 3 Magic Amulets into 1 random Magic Ring.",
    inputs: [
      { quantity: 3, item: "Any Magic Amulet" }
    ],
    outputs: [{ item: "Random Magic Ring" }],
    notes: "Converts amulets into a ring. The output affixes are completely random.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     AMMUNITION & WEAPONS
  ══════════════════════════════════════════ */
  {
    id: 110,
    name: "Throwing Axe",
    category: "misc",
    subcategory: "Ammo / Weapons",
    description: "Combine an Axe and a Dagger to create a Throwing Axe.",
    inputs: [
      { quantity: 1, item: "Axe" },
      { quantity: 1, item: "Dagger" }
    ],
    outputs: [{ item: "Throwing Axe" }],
    notes: "A simple conversion recipe to create throwing weapons.",
    patch: "classic",
    ladder: false
  },
  {
    id: 111,
    name: "Javelin",
    category: "misc",
    subcategory: "Ammo / Weapons",
    description: "Combine a Spear and Arrows to create a Javelin.",
    inputs: [
      { quantity: 1, item: "Spear" },
      { quantity: 1, item: "Arrows" }
    ],
    outputs: [{ item: "Javelin" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 112,
    name: "Arrows from Bolts",
    category: "misc",
    subcategory: "Ammo / Weapons",
    description: "Convert Bolts into Arrows.",
    inputs: [
      { quantity: 2, item: "Bolts" }
    ],
    outputs: [{ item: "1 Arrows" }],
    notes: "Useful if you have excess bolts and need arrows.",
    patch: "classic",
    ladder: false
  },
  {
    id: 113,
    name: "Bolts from Arrows",
    category: "misc",
    subcategory: "Ammo / Weapons",
    description: "Convert Arrows into Bolts.",
    inputs: [
      { quantity: 2, item: "Arrows" }
    ],
    outputs: [{ item: "1 Bolts" }],
    notes: "Useful if you have excess arrows and need bolts.",
    patch: "classic",
    ladder: false
  },
  {
    id: 114,
    name: "Magic Shield of Spikes",
    category: "misc",
    subcategory: "Ammo / Weapons",
    description: "Add spikes to a Magic Shield to create a Magic Shield of Spikes.",
    inputs: [
      { quantity: 1, item: "Any Magic Shield" },
      { quantity: 1, item: "Spiked Club" },
      { quantity: 2, item: "Any Skull" }
    ],
    outputs: [{ item: "Magic Shield of Spikes (attacker takes damage)" }],
    notes: "Adds a thorns-like modifier to a magic shield.",
    patch: "classic",
    ladder: false
  },
  {
    id: 115,
    name: "Savage Polearm",
    category: "misc",
    subcategory: "Ammo / Weapons",
    description: "Combine a staff, kris, belt, and diamond to create a Savage Polearm.",
    inputs: [
      { quantity: 1, item: "Any Diamond" },
      { quantity: 1, item: "Any Staff" },
      { quantity: 1, item: "Kris" },
      { quantity: 1, item: "Belt" }
    ],
    outputs: [{ item: "Savage Polearm-class Weapon" }],
    notes: "One of the more unusual cube recipes. The Savage prefix gives a large bonus to Enhanced Damage.",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — RINGS
  ══════════════════════════════════════════ */
  {
    id: 120,
    name: "Craft: Blood Ring",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft a Blood Ring with life leech.",
    inputs: [
      { quantity: 1, item: "Any Magic Ring" },
      { quantity: 1, item: "Sol Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Ring (life leech + 1–4 random magic affixes)" }],
    notes: "Crafted items have guaranteed craft mods plus 1–4 random affixes. Item level = (clvl/2) + (ilvl/2).",
    patch: "classic",
    ladder: false
  },
  {
    id: 121,
    name: "Craft: Caster Ring",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft a Caster Ring with Faster Cast Rate.",
    inputs: [
      { quantity: 1, item: "Any Magic Ring" },
      { quantity: 1, item: "Amn Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Ring (FCR + mana + 1–4 random affixes)" }],
    notes: "One of the most sought-after crafted items for caster builds.",
    patch: "classic",
    ladder: false
  },
  {
    id: 122,
    name: "Craft: Safety Ring",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft a Safety Ring with damage reduction.",
    inputs: [
      { quantity: 1, item: "Any Magic Ring" },
      { quantity: 1, item: "Amn Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Ring (damage reduction + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 123,
    name: "Craft: Hit Power Ring",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft a Hit Power Ring with knockback or stun.",
    inputs: [
      { quantity: 1, item: "Any Magic Ring" },
      { quantity: 1, item: "Amn Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Ring (knockback/stun + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — AMULETS
  ══════════════════════════════════════════ */
  {
    id: 124,
    name: "Craft: Caster Amulet",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft a Caster Amulet with Faster Cast Rate and mana bonuses.",
    inputs: [
      { quantity: 1, item: "Any Magic Amulet" },
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Amulet (FCR + mana regeneration + 1–4 random affixes)" }],
    notes: "Highly sought for caster builds. Random affixes can include +skills.",
    patch: "classic",
    ladder: false
  },
  {
    id: 125,
    name: "Craft: Blood Amulet",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft a Blood Amulet with life leech.",
    inputs: [
      { quantity: 1, item: "Any Magic Amulet" },
      { quantity: 1, item: "Amn Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Amulet (life leech + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 126,
    name: "Craft: Safety Amulet",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft a Safety Amulet with damage reduction.",
    inputs: [
      { quantity: 1, item: "Any Magic Amulet" },
      { quantity: 1, item: "Thul Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Amulet (damage reduction + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 127,
    name: "Craft: Hit Power Amulet",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft a Hit Power Amulet with knockback.",
    inputs: [
      { quantity: 1, item: "Any Magic Amulet" },
      { quantity: 1, item: "Thul Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Amulet (knockback + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — BELTS
  ══════════════════════════════════════════ */
  {
    id: 130,
    name: "Craft: Caster Belt",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft a Caster Belt. Base must be Light/Sharkskin/Vampirefang Belt.",
    inputs: [
      { quantity: 1, item: "Magic Light Belt / Sharkskin Belt / Vampirefang Belt" },
      { quantity: 1, item: "Ith Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Belt (FCR/mana guaranteed mods + 1–4 random affixes)" }],
    notes: "The base item type (Normal/Exceptional/Elite) determines which crafted item is produced.",
    patch: "classic",
    ladder: false
  },
  {
    id: 131,
    name: "Craft: Blood Belt",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft a Blood Belt. Base must be Belt/Mesh Belt/Mithril Coil.",
    inputs: [
      { quantity: 1, item: "Magic Belt / Mesh Belt / Mithril Coil" },
      { quantity: 1, item: "Tal Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Belt (life/leech guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 132,
    name: "Craft: Safety Belt",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft a Safety Belt. Base must be Sash/Demonhide Sash/Spiderweb Sash.",
    inputs: [
      { quantity: 1, item: "Magic Sash / Demonhide Sash / Spiderweb Sash" },
      { quantity: 1, item: "Tal Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Belt (damage reduction + resist guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 133,
    name: "Craft: Hit Power Belt",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft a Hit Power Belt. Base must be Heavy/Battle/Troll Belt.",
    inputs: [
      { quantity: 1, item: "Magic Heavy Belt / Battle Belt / Troll Belt" },
      { quantity: 1, item: "Tal Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Belt (knockback + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — BOOTS
  ══════════════════════════════════════════ */
  {
    id: 134,
    name: "Craft: Caster Boots",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft Caster Boots. Base must be Boots/Demonhide Boots/Wyrmhide Boots.",
    inputs: [
      { quantity: 1, item: "Magic Boots / Demonhide Boots / Wyrmhide Boots" },
      { quantity: 1, item: "Thul Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Boots (FCR/mana guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 135,
    name: "Craft: Blood Boots",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft Blood Boots. Base must be Light Plated/Battle/Mirrored Boots.",
    inputs: [
      { quantity: 1, item: "Magic Light Plated Boots / Battle Boots / Mirrored Boots" },
      { quantity: 1, item: "Eth Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Boots (life/leech guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 136,
    name: "Craft: Safety Boots",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft Safety Boots. Base must be Greaves/War Boots/Myrmidon Greaves.",
    inputs: [
      { quantity: 1, item: "Magic Greaves / War Boots / Myrmidon Greaves" },
      { quantity: 1, item: "Ort Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Boots (damage reduction + resist guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 137,
    name: "Craft: Hit Power Boots",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft Hit Power Boots. Base must be Chain/Mesh/Boneweave Boots.",
    inputs: [
      { quantity: 1, item: "Magic Chain Boots / Mesh Boots / Boneweave Boots" },
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Boots (knockback + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — GLOVES
  ══════════════════════════════════════════ */
  {
    id: 138,
    name: "Craft: Blood Gloves",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft Blood Gloves. Base must be Heavy/Sharkskin/Vampirebone Gloves.",
    inputs: [
      { quantity: 1, item: "Magic Heavy Gloves / Sharkskin Gloves / Vampirebone Gloves" },
      { quantity: 1, item: "Nef Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Gloves (life/leech guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 139,
    name: "Craft: Caster Gloves",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft Caster Gloves. Base must be Leather/Demonhide/Bramble Gloves.",
    inputs: [
      { quantity: 1, item: "Magic Leather Gloves / Demonhide Gloves / Bramble Gloves" },
      { quantity: 1, item: "Ort Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Gloves (FCR/mana guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 140,
    name: "Craft: Safety Gloves",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft Safety Gloves. Base must be Gauntlets/War Gauntlets/Ogre Gauntlets.",
    inputs: [
      { quantity: 1, item: "Magic Gauntlets / War Gauntlets / Ogre Gauntlets" },
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Gloves (damage reduction + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 141,
    name: "Craft: Hit Power Gloves",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft Hit Power Gloves. Base must be Chain/Heavy Bracers/Vambraces.",
    inputs: [
      { quantity: 1, item: "Magic Chain Gloves / Heavy Bracers / Vambraces" },
      { quantity: 1, item: "Ort Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Gloves (knockback + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — HELMS
  ══════════════════════════════════════════ */
  {
    id: 142,
    name: "Craft: Blood Helm",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft a Blood Helm. Base must be Helm/Casque/Armet.",
    inputs: [
      { quantity: 1, item: "Magic Helm / Casque / Armet" },
      { quantity: 1, item: "Ral Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Helm (life/leech guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 143,
    name: "Craft: Caster Helm",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft a Caster Helm. Base must be Mask/Death Mask/Demonhead.",
    inputs: [
      { quantity: 1, item: "Magic Mask / Death Mask / Demonhead" },
      { quantity: 1, item: "Nef Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Helm (FCR/mana guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 144,
    name: "Craft: Safety Helm",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft a Safety Helm. Base must be Crown/Grand Crown/Corona.",
    inputs: [
      { quantity: 1, item: "Magic Crown / Grand Crown / Corona" },
      { quantity: 1, item: "Ith Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Helm (damage reduction + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 145,
    name: "Craft: Hit Power Helm",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft a Hit Power Helm. Base must be Full Helm/Basinet/Giant Conch.",
    inputs: [
      { quantity: 1, item: "Magic Full Helm / Basinet / Giant Conch" },
      { quantity: 1, item: "Ith Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Helm (knockback + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — SHIELDS
  ══════════════════════════════════════════ */
  {
    id: 146,
    name: "Craft: Blood Shield",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft a Blood Shield. Base must be Spiked Shield/Barbed Shield/Blade Barrier.",
    inputs: [
      { quantity: 1, item: "Magic Spiked Shield / Barbed Shield / Blade Barrier" },
      { quantity: 1, item: "Ith Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Shield (life/leech guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 147,
    name: "Craft: Caster Shield",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft a Caster Shield. Base must be Small Shield/Round Shield/Luna.",
    inputs: [
      { quantity: 1, item: "Magic Small Shield / Round Shield / Luna" },
      { quantity: 1, item: "Eth Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Shield (FCR/mana guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 148,
    name: "Craft: Safety Shield",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft a Safety Shield. Base must be Kite Shield/Dragon Shield/Monarch.",
    inputs: [
      { quantity: 1, item: "Magic Kite Shield / Dragon Shield / Monarch" },
      { quantity: 1, item: "Nef Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Shield (damage reduction + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 149,
    name: "Craft: Hit Power Shield",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft a Hit Power Shield. Base must be Gothic Shield/Ancient Shield/Ward.",
    inputs: [
      { quantity: 1, item: "Magic Gothic Shield / Ancient Shield / Ward" },
      { quantity: 1, item: "Eth Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Shield (knockback + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — BODY ARMOR
  ══════════════════════════════════════════ */
  {
    id: 150,
    name: "Craft: Blood Body",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft a Blood Body Armor. Base must be Plate Mail/Templar Coat/Hellforge Plate.",
    inputs: [
      { quantity: 1, item: "Magic Plate Mail / Templar Coat / Hellforge Plate" },
      { quantity: 1, item: "Thul Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Body Armor (life/leech guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 151,
    name: "Craft: Caster Body",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft a Caster Body Armor. Base must be Light Plate/Mage Plate/Archon Plate.",
    inputs: [
      { quantity: 1, item: "Magic Light Plate / Mage Plate / Archon Plate" },
      { quantity: 1, item: "Tal Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Body Armor (FCR/mana guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 152,
    name: "Craft: Safety Body",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft a Safety Body Armor. Base must be Breast Plate/Cuirass/Great Hauberk.",
    inputs: [
      { quantity: 1, item: "Magic Breast Plate / Cuirass / Great Hauberk" },
      { quantity: 1, item: "Eth Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Body Armor (damage reduction + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 153,
    name: "Craft: Hit Power Body",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft a Hit Power Body Armor. Base must be Field Plate/Sharktooth Armor/Kraken Shell.",
    inputs: [
      { quantity: 1, item: "Magic Field Plate / Sharktooth Armor / Kraken Shell" },
      { quantity: 1, item: "Nef Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Body Armor (knockback + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     CRAFTING — WEAPONS
  ══════════════════════════════════════════ */
  {
    id: 154,
    name: "Craft: Blood Weapon",
    category: "crafting",
    subcategory: "Blood",
    description: "Craft a Blood Weapon (Axe). Base must be Axe/Cleaver/Small Crescent.",
    inputs: [
      { quantity: 1, item: "Magic Axe / Cleaver / Small Crescent" },
      { quantity: 1, item: "Ort Rune" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Blood Weapon (life leech + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 155,
    name: "Craft: Caster Weapon",
    category: "crafting",
    subcategory: "Caster",
    description: "Craft a Caster Weapon (Scepter). Base must be Scepter/Rune Scepter/Mighty Scepter.",
    inputs: [
      { quantity: 1, item: "Magic Scepter / Rune Scepter / Mighty Scepter" },
      { quantity: 1, item: "Tir Rune" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Caster Weapon (FCR/mana guaranteed mods + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 156,
    name: "Craft: Hit Power Weapon",
    category: "crafting",
    subcategory: "Hit Power",
    description: "Craft a Hit Power Weapon (Mace). Base must be Morning Star/Jagged Star/Devil Star.",
    inputs: [
      { quantity: 1, item: "Magic Morning Star / Jagged Star / Devil Star" },
      { quantity: 1, item: "Tir Rune" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Hit Power Weapon (knockback/stun + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },
  {
    id: 157,
    name: "Craft: Safety Weapon",
    category: "crafting",
    subcategory: "Safety",
    description: "Craft a Safety Weapon (Spear/Javelin). Base must be Spear or Javelin.",
    inputs: [
      { quantity: 1, item: "Magic Spear / Javelin" },
      { quantity: 1, item: "Sol Rune" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Any Jewel" }
    ],
    outputs: [{ item: "Safety Weapon (damage reduction + 1–4 random affixes)" }],
    notes: "",
    patch: "classic",
    ladder: false
  },

  /* ══════════════════════════════════════════
     REIGN OF THE WARLOCK (2026) — RENEWAL
  ══════════════════════════════════════════ */
  {
    id: 160,
    name: "Renewed Crack of the Heavens",
    category: "misc",
    subcategory: "RoTW Renewal",
    description: "Renew a Latent Crack of the Heavens into its empowered version.",
    inputs: [
      { quantity: 1, item: "Latent Crack of the Heavens" },
      { quantity: 1, item: "Perfect Topaz" },
      { quantity: 1, item: "Fal Rune" },
      { quantity: 1, item: "Southern Worldstone Shard" }
    ],
    outputs: [{ item: "Renewed Crack of the Heavens" }],
    notes: "New in Reign of the Warlock (2026). Requires Worldstone Shards found in the new expansion areas.",
    patch: "2026",
    ladder: false
  },
  {
    id: 161,
    name: "Renewed Flame Rift",
    category: "misc",
    subcategory: "RoTW Renewal",
    description: "Renew a Latent Flame Rift into its empowered version.",
    inputs: [
      { quantity: 1, item: "Latent Flame Rift" },
      { quantity: 1, item: "Perfect Ruby" },
      { quantity: 1, item: "Io Rune" },
      { quantity: 1, item: "Deep Worldstone Shard" }
    ],
    outputs: [{ item: "Renewed Flame Rift" }],
    notes: "New in Reign of the Warlock (2026).",
    patch: "2026",
    ladder: false
  },
  {
    id: 162,
    name: "Renewed Rotting Fissure",
    category: "misc",
    subcategory: "RoTW Renewal",
    description: "Renew a Latent Rotting Fissure into its empowered version.",
    inputs: [
      { quantity: 1, item: "Latent Rotting Fissure" },
      { quantity: 1, item: "Perfect Emerald" },
      { quantity: 1, item: "Ko Rune" },
      { quantity: 1, item: "Western Worldstone Shard" }
    ],
    outputs: [{ item: "Renewed Rotting Fissure" }],
    notes: "New in Reign of the Warlock (2026).",
    patch: "2026",
    ladder: false
  },
  {
    id: 163,
    name: "Renewed Cold Rupture",
    category: "misc",
    subcategory: "RoTW Renewal",
    description: "Renew a Latent Cold Rupture into its empowered version.",
    inputs: [
      { quantity: 1, item: "Latent Cold Rupture" },
      { quantity: 1, item: "Perfect Sapphire" },
      { quantity: 1, item: "Lum Rune" },
      { quantity: 1, item: "Eastern Worldstone Shard" }
    ],
    outputs: [{ item: "Renewed Cold Rupture" }],
    notes: "New in Reign of the Warlock (2026).",
    patch: "2026",
    ladder: false
  },
  {
    id: 164,
    name: "Renewed Bone Break",
    category: "misc",
    subcategory: "RoTW Renewal",
    description: "Renew a Latent Bone Break into its empowered version.",
    inputs: [
      { quantity: 1, item: "Latent Bone Break" },
      { quantity: 1, item: "Perfect Amethyst" },
      { quantity: 1, item: "Pul Rune" },
      { quantity: 1, item: "Northern Worldstone Shard" }
    ],
    outputs: [{ item: "Renewed Bone Break" }],
    notes: "New in Reign of the Warlock (2026).",
    patch: "2026",
    ladder: false
  },
  {
    id: 165,
    name: "Renewed Black Cleft",
    category: "misc",
    subcategory: "RoTW Renewal",
    description: "Renew a Latent Black Cleft into its empowered version. Requires shards from all four directions.",
    inputs: [
      { quantity: 1, item: "Latent Black Cleft" },
      { quantity: 1, item: "Perfect Diamond" },
      { quantity: 1, item: "Mal Rune" },
      { quantity: 1, item: "Southern Worldstone Shard" },
      { quantity: 1, item: "Deep Worldstone Shard" },
      { quantity: 1, item: "Northern Worldstone Shard" }
    ],
    outputs: [{ item: "Renewed Black Cleft" }],
    notes: "New in Reign of the Warlock (2026). Most demanding of the renewal recipes — requires three different Worldstone Shards.",
    patch: "2026",
    ladder: false
  }

];
