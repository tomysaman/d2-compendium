/* =====================================================
   DIABLO II — ITEM SETS DATA
   All classic, LoD, Patch 2.6, and Reign of the Warlock sets
   ===================================================== */

const SETS_DATA = [

  /* ══════════════════════════════════════════════════
     NORMAL SETS (Diablo II Classic — base game)
  ══════════════════════════════════════════════════ */

  {
    id: 1,
    name: "Angelic Raiment",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Any",
    level: 12,
    pieces: [
      { name: "Angelic Mantle", type: "Ring Mail", reqLevel: 12 },
      { name: "Angelic Halo", type: "Ring", reqLevel: 12 },
      { name: "Angelic Wings", type: "Amulet", reqLevel: 12 },
      { name: "Angelic Sickle", type: "Sabre", reqLevel: 12 }
    ],
    partialBonuses: [
      "(2 items) +50 To Life",
      "(2 items) +150 To Attack Rating (Angelic Halo + Angelic Wings)",
      "(3 items) +1 To All Skills",
      "(3 items) 20% Faster Run/Walk",
      "(4 items) Half Freeze Duration"
    ],
    fullBonuses: [
      "+75 To Life",
      "+150 To Attack Rating",
      "+1 To All Skills",
      "20% Faster Run/Walk",
      "Half Freeze Duration"
    ]
  },

  {
    id: 2,
    name: "Arcanna's Tricks",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Sorceress",
    level: 15,
    pieces: [
      { name: "Arcanna's Head", type: "Skull Cap", reqLevel: 15 },
      { name: "Arcanna's Flesh", type: "Light Plate", reqLevel: 15 },
      { name: "Arcanna's Sign", type: "Amulet", reqLevel: 15 },
      { name: "Arcanna's Deathwand", type: "War Staff", reqLevel: 15 }
    ],
    partialBonuses: [
      "(2 items) +50 To Mana",
      "(3 items) +50 To Life",
      "(3 items) Regenerate Mana 12%"
    ],
    fullBonuses: [
      "+50 To Mana",
      "+50 To Life",
      "20% Faster Cast Rate",
      "5% Mana Stolen Per Hit",
      "+1 To All Skills",
      "Regenerate Mana 12%"
    ]
  },

  {
    id: 3,
    name: "Arctic Gear",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Amazon",
    level: 2,
    pieces: [
      { name: "Arctic Furs", type: "Short Fur Coat", reqLevel: 2 },
      { name: "Arctic Binding", type: "Light Belt", reqLevel: 2 },
      { name: "Arctic Horn", type: "Short War Bow", reqLevel: 2 },
      { name: "Arctic Mitts", type: "Light Gauntlets", reqLevel: 2 }
    ],
    partialBonuses: [
      "(2 items) +50% Enhanced Damage, 20% Bonus To Attack Rating",
      "(2 items) +(8 Per Character Level) To Attack Rating",
      "(3 items) +20-30 Cold Damage",
      "(4 items) Cold Resist +50%"
    ],
    fullBonuses: [
      "+50% Enhanced Damage",
      "20% Bonus To Attack Rating",
      "+(8 Per Character Level) To Attack Rating",
      "+20-30 Cold Damage",
      "Cold Resist +50%"
    ]
  },

  {
    id: 4,
    name: "Berserker's Arsenal",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Barbarian",
    level: 3,
    pieces: [
      { name: "Berserker's Headgear", type: "Helm", reqLevel: 3 },
      { name: "Berserker's Hauberk", type: "Splint Mail", reqLevel: 3 },
      { name: "Berserker's Hatchet", type: "Double Axe", reqLevel: 3 }
    ],
    partialBonuses: [
      "(2 items) +15 To Dexterity",
      "(3 items) +1 To Berserk"
    ],
    fullBonuses: [
      "+15 To Dexterity",
      "+1 To Berserk",
      "+100% Enhanced Damage",
      "+15% Increased Attack Speed",
      "+1 To Masteries (Barbarian Only)"
    ]
  },

  {
    id: 5,
    name: "Cathan's Traps",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Sorceress",
    level: 11,
    pieces: [
      { name: "Cathan's Rule", type: "Battle Staff", reqLevel: 11 },
      { name: "Cathan's Mesh", type: "Chain Mail", reqLevel: 11 },
      { name: "Cathan's Visage", type: "Mask", reqLevel: 11 },
      { name: "Cathan's Sigil", type: "Amulet", reqLevel: 11 },
      { name: "Cathan's Seal", type: "Ring", reqLevel: 11 }
    ],
    partialBonuses: [
      "(2 items) Lightning Resist +25%",
      "(3 items) 10% Faster Cast Rate",
      "(4 items) +20 To Strength"
    ],
    fullBonuses: [
      "Lightning Resist +25%",
      "10% Faster Cast Rate",
      "+20 To Strength",
      "30% Damage Taken Goes To Mana",
      "Magic Damage Reduced By 3",
      "+30 To Life"
    ]
  },

  {
    id: 6,
    name: "Civerb's Vestments",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Paladin",
    level: 9,
    pieces: [
      { name: "Civerb's Cudgel", type: "Grand Scepter", reqLevel: 9 },
      { name: "Civerb's Ward", type: "Large Shield", reqLevel: 9 },
      { name: "Civerb's Icon", type: "Amulet", reqLevel: 9 }
    ],
    partialBonuses: [
      "(2 items) +15 To Dexterity",
      "(3 items) Attacker Takes Lightning Damage of 20"
    ],
    fullBonuses: [
      "+15 To Dexterity",
      "Attacker Takes Lightning Damage of 20",
      "+200% Enhanced Damage",
      "+150 To Attack Rating",
      "+30 To Mana",
      "Replenish Life +10"
    ]
  },

  {
    id: 7,
    name: "Cleglaw's Brace",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Any",
    level: 4,
    pieces: [
      { name: "Cleglaw's Tooth", type: "Short Sword", reqLevel: 4 },
      { name: "Cleglaw's Claw", type: "Small Shield", reqLevel: 4 },
      { name: "Cleglaw's Pincers", type: "Chain Gloves", reqLevel: 4 }
    ],
    partialBonuses: [
      "(2 items) Slows Target By 25%",
      "(3 items) 35% Chance Of Open Wounds"
    ],
    fullBonuses: [
      "Slows Target By 25%",
      "35% Chance Of Open Wounds",
      "Knockback",
      "+50% Enhanced Damage",
      "+100 To Attack Rating"
    ]
  },

  {
    id: 8,
    name: "Death's Disguise",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Any",
    level: 6,
    pieces: [
      { name: "Death's Hand", type: "Leather Gloves", reqLevel: 6 },
      { name: "Death's Guard", type: "Sash", reqLevel: 6 },
      { name: "Death's Touch", type: "War Sword", reqLevel: 6 }
    ],
    partialBonuses: [
      "(2 items) Cannot Be Frozen",
      "(3 items) 30% Increased Attack Speed"
    ],
    fullBonuses: [
      "Cannot Be Frozen",
      "30% Increased Attack Speed",
      "+75% Enhanced Damage",
      "+50 To Attack Rating",
      "Poison Resist +50%"
    ]
  },

  {
    id: 9,
    name: "Hsarus' Defense",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Any",
    level: 3,
    pieces: [
      { name: "Hsarus' Iron Heel", type: "Chain Boots", reqLevel: 3 },
      { name: "Hsarus' Iron Stay", type: "Belt", reqLevel: 3 },
      { name: "Hsarus' Iron Fist", type: "Buckler", reqLevel: 3 }
    ],
    partialBonuses: [
      "(2 items) +20 To Strength",
      "(3 items) Cannot Be Frozen"
    ],
    fullBonuses: [
      "+20 To Strength",
      "Cannot Be Frozen",
      "+35 To Life",
      "Fire Resist +35%",
      "Damage Reduced By 3"
    ]
  },

  {
    id: 10,
    name: "Infernal Tools",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Necromancer",
    level: 5,
    pieces: [
      { name: "Infernal Cranium", type: "Cap", reqLevel: 5 },
      { name: "Infernal Sign", type: "Belt", reqLevel: 5 },
      { name: "Infernal Torch", type: "Grim Wand", reqLevel: 5 }
    ],
    partialBonuses: [
      "(2 items) +20 To Mana",
      "(3 items) Attacker Takes Damage of 20"
    ],
    fullBonuses: [
      "+20 To Mana",
      "Attacker Takes Damage of 20",
      "+50 To Attack Rating",
      "+15 To Dexterity",
      "+10% Faster Cast Rate"
    ]
  },

  {
    id: 11,
    name: "Iratha's Finery",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Any",
    level: 15,
    pieces: [
      { name: "Iratha's Collar", type: "Amulet", reqLevel: 15 },
      { name: "Iratha's Cuff", type: "Light Gauntlets", reqLevel: 15 },
      { name: "Iratha's Coil", type: "Crown", reqLevel: 15 },
      { name: "Iratha's Cord", type: "Heavy Belt", reqLevel: 15 }
    ],
    partialBonuses: [
      "(2 items) Poison Resist +35%",
      "(2 items) Cold Resist +35%",
      "(3 items) Fire Resist +35%",
      "(4 items) Lightning Resist +35%"
    ],
    fullBonuses: [
      "Poison Resist +35%",
      "Cold Resist +35%",
      "Fire Resist +35%",
      "Lightning Resist +35%",
      "+20 To Dexterity",
      "Half Freeze Duration",
      "+15 To Mana"
    ]
  },

  {
    id: 12,
    name: "Isenhart's Armory",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Any",
    level: 8,
    pieces: [
      { name: "Isenhart's Lightbrand", type: "Broad Sword", reqLevel: 8 },
      { name: "Isenhart's Parry", type: "Gothic Shield", reqLevel: 8 },
      { name: "Isenhart's Case", type: "Breast Plate", reqLevel: 8 },
      { name: "Isenhart's Horns", type: "Full Helm", reqLevel: 8 }
    ],
    partialBonuses: [
      "(2 items) 35% Damage Taken Goes To Mana",
      "(3 items) Attacker Takes Damage of 8",
      "(4 items) +40 To Life"
    ],
    fullBonuses: [
      "35% Damage Taken Goes To Mana",
      "Attacker Takes Damage of 8",
      "+40 To Life",
      "All Resistances +20",
      "+35 Defense",
      "30% Increased Attack Speed"
    ]
  },

  {
    id: 13,
    name: "Milabrega's Regalia",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Paladin",
    level: 17,
    pieces: [
      { name: "Milabrega's Rod", type: "War Scepter", reqLevel: 17 },
      { name: "Milabrega's Orb", type: "Large Shield", reqLevel: 17 },
      { name: "Milabrega's Robe", type: "Ancient Armor", reqLevel: 17 },
      { name: "Milabrega's Diadem", type: "Crown", reqLevel: 17 }
    ],
    partialBonuses: [
      "(2 items) +50 To Life",
      "(3 items) Cold Resist +40%",
      "(4 items) +2 To Light Radius"
    ],
    fullBonuses: [
      "+50 To Life",
      "Cold Resist +40%",
      "+2 To Light Radius",
      "+1 To Offensive Auras (Paladin Only)",
      "+1 To Prayer",
      "+150% Enhanced Damage",
      "+50% Enhanced Defense"
    ]
  },

  {
    id: 14,
    name: "Sigon's Complete Steel",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Any",
    level: 6,
    pieces: [
      { name: "Sigon's Gage", type: "Gauntlets", reqLevel: 6 },
      { name: "Sigon's Shelter", type: "Gothic Plate", reqLevel: 6 },
      { name: "Sigon's Visor", type: "Great Helm", reqLevel: 6 },
      { name: "Sigon's Sabot", type: "Greaves", reqLevel: 6 },
      { name: "Sigon's Wrap", type: "Plated Belt", reqLevel: 6 },
      { name: "Sigon's Guard", type: "Tower Shield", reqLevel: 6 }
    ],
    partialBonuses: [
      "(2 items) 30% Increased Attack Speed (Gage + Guard)",
      "(2 items) +1 To All Skills (Gage + Shelter)",
      "(2 items) 20% Faster Hit Recovery (Sabot + Wrap)",
      "(3 items) 10% Life Stolen Per Hit",
      "(3 items) +100 To Attack Rating",
      "(4 items) Fire Resist +40%"
    ],
    fullBonuses: [
      "+1 To All Skills",
      "30% Increased Attack Speed",
      "10% Life Stolen Per Hit",
      "+100 To Attack Rating",
      "Fire Resist +40%",
      "+25 To Strength",
      "+100 Defense"
    ]
  },

  {
    id: 15,
    name: "Tancred's Battlegear",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Any",
    level: 20,
    pieces: [
      { name: "Tancred's Crowbill", type: "Military Pick", reqLevel: 20 },
      { name: "Tancred's Spine", type: "Full Plate Mail", reqLevel: 20 },
      { name: "Tancred's Hobnails", type: "Boots", reqLevel: 20 },
      { name: "Tancred's Weird", type: "Amulet", reqLevel: 20 },
      { name: "Tancred's Skull", type: "Bone Helm", reqLevel: 20 }
    ],
    partialBonuses: [
      "(2 items) Attacker Takes Damage of 20",
      "(3 items) 35% Deadly Strike",
      "(4 items) Slows Target By 35%"
    ],
    fullBonuses: [
      "Attacker Takes Damage of 20",
      "35% Deadly Strike",
      "Slows Target By 35%",
      "+75% Enhanced Damage",
      "All Resistances +10",
      "+225 Defense",
      "+10 To Dexterity"
    ]
  },

  {
    id: 16,
    name: "Vidala's Rig",
    tier: "Normal",
    patch: "classic",
    ladder: false,
    class: "Amazon",
    level: 14,
    pieces: [
      { name: "Vidala's Barb", type: "Long Battle Bow", reqLevel: 14 },
      { name: "Vidala's Fetlock", type: "Light Plated Boots", reqLevel: 14 },
      { name: "Vidala's Ambush", type: "Leather Armor", reqLevel: 14 },
      { name: "Vidala's Snare", type: "Amulet", reqLevel: 14 }
    ],
    partialBonuses: [
      "(2 items) +50 To Life",
      "(3 items) +200 To Attack Rating",
      "(4 items) Freezes Target"
    ],
    fullBonuses: [
      "+50 To Life",
      "+200 To Attack Rating",
      "Freezes Target",
      "+100% Enhanced Damage",
      "+11 To Vitality",
      "+50 Defense",
      "Cannot Be Frozen"
    ]
  },

  /* ══════════════════════════════════════════════════
     EXCEPTIONAL SETS (Lord of Destruction)
  ══════════════════════════════════════════════════ */

  {
    id: 17,
    name: "Aldur's Watchtower",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Druid",
    level: 36,
    pieces: [
      { name: "Aldur's Stony Gaze", type: "Hunter's Guise", reqLevel: 36 },
      { name: "Aldur's Deception", type: "Shadow Plate", reqLevel: 76 },
      { name: "Aldur's Rhythm", type: "Jagged Star", reqLevel: 42 },
      { name: "Aldur's Advance", type: "Battle Boots", reqLevel: 45 }
    ],
    partialBonuses: [
      "(2 items) +15 To Dexterity",
      "(2 items) +15 To Energy",
      "(3 items) +40 To Life",
      "(4 items) Cold Resist +40%",
      "(4 items) Fire Resist +40%",
      "(4 items) Lightning Resist +40%",
      "(4 items) Poison Resist +40%"
    ],
    fullBonuses: [
      "+15 To Dexterity",
      "+15 To Energy",
      "+40 To Life",
      "All Resistances +40%",
      "+1 To Elemental (Druid Only)",
      "+3 To Shape Shifting (Druid Only)",
      "+150 To Mana",
      "40% Faster Run/Walk"
    ]
  },

  {
    id: 18,
    name: "Bul-Kathos' Children",
    tier: "Elite",
    patch: "lod",
    ladder: false,
    class: "Barbarian",
    level: 66,
    pieces: [
      { name: "Bul-Kathos' Sacred Charge", type: "Colossus Blade", reqLevel: 66 },
      { name: "Bul-Kathos' Tribal Guardian", type: "Mythical Sword", reqLevel: 66 }
    ],
    partialBonuses: [],
    fullBonuses: [
      "+1 To All Skills",
      "+200 To Life",
      "50% Chance of Crushing Blow",
      "+20% Increased Attack Speed"
    ]
  },

  {
    id: 19,
    name: "Cow King's Leathers",
    tier: "Normal",
    patch: "lod",
    ladder: false,
    class: "Any",
    level: 25,
    pieces: [
      { name: "Cow King's Horns", type: "War Hat", reqLevel: 25 },
      { name: "Cow King's Hide", type: "Studded Leather", reqLevel: 25 },
      { name: "Cow King's Hooves", type: "Heavy Boots", reqLevel: 25 }
    ],
    partialBonuses: [
      "(2 items) +100 To Life",
      "(3 items) 15% Chance To Cast Level 5 Static Field When Struck"
    ],
    fullBonuses: [
      "+100 To Life",
      "15% Chance To Cast Level 5 Static Field When Struck",
      "100% Better Chance Of Getting Magic Items",
      "100% Extra Gold From Monsters",
      "+25 To Strength",
      "30% Increased Attack Speed"
    ]
  },

  {
    id: 20,
    name: "The Disciple",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Any",
    level: 65,
    pieces: [
      { name: "Dark Adherent", type: "Dusk Shroud", reqLevel: 65 },
      { name: "Credendum", type: "Mithril Coil", reqLevel: 65 },
      { name: "Telling of Beads", type: "Amulet", reqLevel: 65 },
      { name: "Laying of Hands", type: "Bramble Mitts", reqLevel: 65 },
      { name: "Rite of Passage", type: "Demonhide Boots", reqLevel: 65 }
    ],
    partialBonuses: [
      "(2 items) All Resistances +15",
      "(3 items) +1 To All Skills",
      "(4 items) Poison Resist +25%",
      "(5 items) +50% Enhanced Damage"
    ],
    fullBonuses: [
      "All Resistances +15",
      "+1 To All Skills",
      "Poison Resist +25%",
      "+50% Enhanced Damage",
      "+150 To Life",
      "20% Faster Run/Walk",
      "100% Better Chance Of Getting Magic Items"
    ]
  },

  {
    id: 21,
    name: "Griswold's Legacy",
    tier: "Elite",
    patch: "lod",
    ladder: false,
    class: "Paladin",
    level: 69,
    pieces: [
      { name: "Griswold's Valor", type: "Corona", reqLevel: 69 },
      { name: "Griswold's Heart", type: "Ornate Plate", reqLevel: 45 },
      { name: "Griswold's Honor", type: "Vortex Shield", reqLevel: 68 },
      { name: "Griswold's Redemption", type: "Caduceus", reqLevel: 69 }
    ],
    partialBonuses: [
      "(2 items) +2 To Offensive Auras (Paladin Only)",
      "(3 items) 30% Better Chance Of Getting Magic Items",
      "(4 items) All Resistances +65"
    ],
    fullBonuses: [
      "+2 To Offensive Auras (Paladin Only)",
      "30% Better Chance Of Getting Magic Items",
      "All Resistances +65",
      "+3 To Combat Skills (Paladin Only)",
      "+50 To Life",
      "+400 Defense"
    ]
  },

  {
    id: 22,
    name: "Heaven's Brethren",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Any",
    level: 45,
    pieces: [
      { name: "Dangoon's Teaching", type: "Reinforced Mace", reqLevel: 45 },
      { name: "Taebaek's Glory", type: "Ward", reqLevel: 45 },
      { name: "Haemosu's Adament", type: "Cuirass", reqLevel: 45 },
      { name: "Ondal's Almighty", type: "Spired Helm", reqLevel: 45 }
    ],
    partialBonuses: [
      "(2 items) +50 To Life",
      "(3 items) +50% Enhanced Damage",
      "(4 items) Indestructible"
    ],
    fullBonuses: [
      "+50 To Life",
      "+50% Enhanced Damage",
      "Indestructible",
      "+250 Defense",
      "+10 To All Attributes",
      "All Resistances +20"
    ]
  },

  {
    id: 23,
    name: "Hwanin's Majesty",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Any",
    level: 45,
    pieces: [
      { name: "Hwanin's Justice", type: "Bill", reqLevel: 45 },
      { name: "Hwanin's Refuge", type: "Tigulated Mail", reqLevel: 45 },
      { name: "Hwanin's Blessing", type: "Belt", reqLevel: 45 },
      { name: "Hwanin's Splendor", type: "Grand Crown", reqLevel: 45 }
    ],
    partialBonuses: [
      "(2 items) +10 To Energy",
      "(3 items) 5% Mana Stolen Per Hit",
      "(4 items) Cold Resist +40%"
    ],
    fullBonuses: [
      "+10 To Energy",
      "5% Mana Stolen Per Hit",
      "Cold Resist +40%",
      "+200 To Life",
      "30% Increased Attack Speed",
      "+5 To Light Radius",
      "Lightning Damage +1-200"
    ]
  },

  {
    id: 24,
    name: "Immortal King",
    tier: "Elite",
    patch: "lod",
    ladder: false,
    class: "Barbarian",
    level: 29,
    pieces: [
      { name: "Immortal King's Will", type: "Avenger Guard", reqLevel: 47 },
      { name: "Immortal King's Soul Cage", type: "Sacred Armor", reqLevel: 76 },
      { name: "Immortal King's Pillar", type: "War Traveler", reqLevel: 29 },
      { name: "Immortal King's Detail", type: "War Belt", reqLevel: 29 },
      { name: "Immortal King's Forge", type: "War Gauntlets", reqLevel: 30 },
      { name: "Immortal King's Stone Crusher", type: "Ogre Maul", reqLevel: 76 }
    ],
    partialBonuses: [
      "(2 items) +50 To Life",
      "(3 items) All Resistances +25",
      "(4 items) 50% Better Chance Of Getting Magic Items",
      "(5 items) +400 Defense",
      "(6 items) +250 To Attack Rating, Damage Reduced By 10%"
    ],
    fullBonuses: [
      "+50 To Life",
      "All Resistances +25",
      "50% Better Chance Of Getting Magic Items",
      "+400 Defense",
      "+250 To Attack Rating",
      "Damage Reduced By 10%",
      "+2 To Combat Masteries (Barbarian Only)",
      "+2 To Warcries (Barbarian Only)",
      "+2 To Combat Skills (Barbarian Only)"
    ]
  },

  {
    id: 25,
    name: "M'avina's Battle Hymn",
    tier: "Elite",
    patch: "lod",
    ladder: false,
    class: "Amazon",
    level: 70,
    pieces: [
      { name: "M'avina's True Sight", type: "Diadem", reqLevel: 70 },
      { name: "M'avina's Embrace", type: "Kraken Shell", reqLevel: 70 },
      { name: "M'avina's Tenet", type: "Sharkskin Belt", reqLevel: 45 },
      { name: "M'avina's Icy Clutch", type: "Battle Gauntlets", reqLevel: 45 },
      { name: "M'avina's Caster", type: "Grand Matron Bow", reqLevel: 70 }
    ],
    partialBonuses: [
      "(2 items) +100 To Attack Rating",
      "(3 items) Freezes Target",
      "(4 items) 5% Mana Stolen Per Hit",
      "(5 items) +1 To Amazon Skills"
    ],
    fullBonuses: [
      "+100 To Attack Rating",
      "Freezes Target",
      "5% Mana Stolen Per Hit",
      "+1 To Amazon Skills",
      "+All Resistances +50",
      "+350 Defense",
      "+20% Increased Attack Speed"
    ]
  },

  {
    id: 26,
    name: "Natalya's Odium",
    tier: "Elite",
    patch: "lod",
    ladder: false,
    class: "Assassin",
    level: 59,
    pieces: [
      { name: "Natalya's Totem", type: "Grim Helm", reqLevel: 59 },
      { name: "Natalya's Shadow", type: "Loricated Mail", reqLevel: 73 },
      { name: "Natalya's Soul", type: "Mesh Boots", reqLevel: 25 },
      { name: "Natalya's Mark", type: "Scissors Suwayyah", reqLevel: 79 }
    ],
    partialBonuses: [
      "(2 items) Cold Resist +25%",
      "(2 items) Lightning Resist +25%",
      "(3 items) Poison Resist +25%",
      "(4 items) +350 Defense"
    ],
    fullBonuses: [
      "Cold Resist +25%",
      "Lightning Resist +25%",
      "Poison Resist +25%",
      "+350 Defense",
      "+3 To Assassin Skills",
      "+50 To Life",
      "+2 To Bow And Crossbow Skills"
    ]
  },

  {
    id: 27,
    name: "Naj's Ancient Vestige",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Any",
    level: 71,
    pieces: [
      { name: "Naj's Puzzler", type: "Elder Staff", reqLevel: 71 },
      { name: "Naj's Light Plate", type: "Ornate Plate", reqLevel: 71 },
      { name: "Naj's Circlet", type: "Circlet", reqLevel: 53 }
    ],
    partialBonuses: [
      "(2 items) +75 To Mana",
      "(3 items) +25% Faster Run/Walk"
    ],
    fullBonuses: [
      "+75 To Mana",
      "+25% Faster Run/Walk",
      "+3 To Fire Skills",
      "+3 To Lightning Skills",
      "+3 To Cold Skills",
      "All Resistances +65",
      "+1 To All Skills",
      "+75 To Life"
    ]
  },

  {
    id: 28,
    name: "Orphan's Call",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Any",
    level: 59,
    pieces: [
      { name: "Guillaume's Face", type: "Winged Helm", reqLevel: 34 },
      { name: "Wilhelm's Pride", type: "Battle Belt", reqLevel: 42 },
      { name: "Magnus' Skin", type: "Sharkskin Gloves", reqLevel: 37 },
      { name: "Whitstan's Guard", type: "Round Shield", reqLevel: 29 }
    ],
    partialBonuses: [
      "(2 items) 10% Life Stolen Per Hit",
      "(3 items) 35% Deadly Strike",
      "(4 items) Knockback"
    ],
    fullBonuses: [
      "10% Life Stolen Per Hit",
      "35% Deadly Strike",
      "Knockback",
      "+100% Enhanced Defense",
      "+25 To Strength",
      "+50 To Life"
    ]
  },

  {
    id: 29,
    name: "Sander's Folly",
    tier: "Normal",
    patch: "lod",
    ladder: false,
    class: "Necromancer",
    level: 25,
    pieces: [
      { name: "Sander's Paragon", type: "Cap", reqLevel: 25 },
      { name: "Sander's Riprap", type: "Heavy Boots", reqLevel: 25 },
      { name: "Sander's Taboo", type: "Heavy Gloves", reqLevel: 25 },
      { name: "Sander's Superstition", type: "Bone Wand", reqLevel: 25 }
    ],
    partialBonuses: [
      "(2 items) +75 To Mana",
      "(3 items) +50 To Life"
    ],
    fullBonuses: [
      "+75 To Mana",
      "+50 To Life",
      "+1 To Necromancer Skills",
      "+100 To Attack Rating",
      "+35 To Vitality",
      "+35 To Dexterity"
    ]
  },

  {
    id: 30,
    name: "Sazabi's Grand Tribute",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Any",
    level: 51,
    pieces: [
      { name: "Sazabi's Mental Sheath", type: "Basinet", reqLevel: 51 },
      { name: "Sazabi's Ghost Liberator", type: "Balrog Skin", reqLevel: 51 },
      { name: "Sazabi's Cobalt Redeemer", type: "Cryptic Sword", reqLevel: 51 }
    ],
    partialBonuses: [
      "(2 items) Cold Resist +40%",
      "(3 items) +175 To Life"
    ],
    fullBonuses: [
      "Cold Resist +40%",
      "+175 To Life",
      "+150 Defense",
      "30% Faster Hit Recovery",
      "20% Increased Attack Speed"
    ]
  },

  {
    id: 31,
    name: "Tal Rasha's Wrappings",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Sorceress",
    level: 26,
    pieces: [
      { name: "Tal Rasha's Lidless Eye", type: "Swirling Crystal", reqLevel: 65 },
      { name: "Tal Rasha's Guardianship", type: "Lacquered Plate", reqLevel: 71 },
      { name: "Tal Rasha's Fine-Spun Cloth", type: "Mesh Belt", reqLevel: 26 },
      { name: "Tal Rasha's Adjudication", type: "Amulet", reqLevel: 65 },
      { name: "Tal Rasha's Horadric Crest", type: "Death Mask", reqLevel: 66 }
    ],
    partialBonuses: [
      "(2 items) +65 To Life",
      "(2 items) +150 To Mana",
      "(3 items) +50 Mana",
      "(3 items) Lightning Resist +33%",
      "(4 items) Cold Resist +33%",
      "(4 items) Fire Resist +33%",
      "(5 items) Meteors Summoned"
    ],
    fullBonuses: [
      "+65 To Life",
      "+150 To Mana",
      "Lightning Resist +33%",
      "Cold Resist +33%",
      "Fire Resist +33%",
      "+2 To Sorceress Skills",
      "+3 To Fire Mastery",
      "+3 To Lightning Mastery",
      "+3 To Cold Mastery"
    ]
  },

  {
    id: 32,
    name: "Trang-Oul's Avatar",
    tier: "Exceptional",
    patch: "lod",
    ladder: false,
    class: "Necromancer",
    level: 32,
    pieces: [
      { name: "Trang-Oul's Guise", type: "Bone Visage", reqLevel: 65 },
      { name: "Trang-Oul's Scales", type: "Chaos Armor", reqLevel: 65 },
      { name: "Trang-Oul's Wing", type: "Cantor Trophy", reqLevel: 65 },
      { name: "Trang-Oul's Claws", type: "Heavy Bracers", reqLevel: 45 },
      { name: "Trang-Oul's Girth", type: "Troll Belt", reqLevel: 62 }
    ],
    partialBonuses: [
      "(2 items) Cold Resist +40%",
      "(3 items) Fire Resist +40%",
      "(4 items) 20% Faster Cast Rate",
      "(5 items) Regenerate Mana 15%"
    ],
    fullBonuses: [
      "Cold Resist +40%",
      "Fire Resist +40%",
      "20% Faster Cast Rate",
      "Regenerate Mana 15%",
      "+25% Damage To Undead",
      "+150 Defense",
      "+2 To Necromancer Skills",
      "+1 To Curses (Necromancer Only)"
    ]
  },

  /* ══════════════════════════════════════════════════
     PATCH 2.6 SETS
  ══════════════════════════════════════════════════ */

  {
    id: 33,
    name: "Bane's Garments",
    tier: "Elite",
    patch: "2.6",
    ladder: false,
    class: "Any",
    level: 65,
    pieces: [
      { name: "Bane's Helm", type: "Giant Conch", reqLevel: 65 },
      { name: "Bane's Chest", type: "Sacred Armor", reqLevel: 73 },
      { name: "Bane's Gloves", type: "Ogre Gauntlets", reqLevel: 65 },
      { name: "Bane's Belt", type: "Colossus Girdle", reqLevel: 65 },
      { name: "Bane's Boots", type: "Mirrored Boots", reqLevel: 66 }
    ],
    partialBonuses: [
      "(2 items) All Resistances +25",
      "(3 items) +25% Faster Hit Recovery",
      "(4 items) Damage Reduced By 10%",
      "(5 items) +2 To All Skills"
    ],
    fullBonuses: [
      "All Resistances +25",
      "+25% Faster Hit Recovery",
      "Damage Reduced By 10%",
      "+2 To All Skills",
      "+400 Defense",
      "+150 To Life",
      "+50 To Mana"
    ]
  },

  {
    id: 34,
    name: "Horazon's Splendor",
    tier: "Elite",
    patch: "2.6",
    ladder: false,
    class: "Sorceress",
    level: 70,
    pieces: [
      { name: "Horazon's Wand", type: "Archon Staff", reqLevel: 73 },
      { name: "Horazon's Hood", type: "Spired Helm", reqLevel: 70 },
      { name: "Horazon's Mantle", type: "Dusk Shroud", reqLevel: 70 },
      { name: "Horazon's Stride", type: "Scarabshell Boots", reqLevel: 71 }
    ],
    partialBonuses: [
      "(2 items) +1 To All Skills",
      "(3 items) +100 To Mana",
      "(4 items) Cannot Be Frozen"
    ],
    fullBonuses: [
      "+3 To Sorceress Skills",
      "+1 To All Skills",
      "+100 To Mana",
      "Cannot Be Frozen",
      "+350% Enhanced Damage",
      "All Resistances +50",
      "100% Better Chance Of Getting Magic Items"
    ]
  },

  /* ══════════════════════════════════════════════════
     REIGN OF THE WARLOCK SETS (2026 Expansion)
  ══════════════════════════════════════════════════ */

  {
    id: 35,
    name: "Talic's Anguish",
    tier: "Elite",
    patch: "2026",
    ladder: false,
    class: "Any",
    expansion: "Reign of the Warlock",
    level: 75,
    pieces: [
      { name: "Talic's Resolve", type: "Corona", reqLevel: 75 },
      { name: "Talic's Fury", type: "Sacred Armor", reqLevel: 76 },
      { name: "Talic's Grip", type: "Ogre Gauntlets", reqLevel: 75 },
      { name: "Talic's Stand", type: "Mirrored Boots", reqLevel: 75 }
    ],
    partialBonuses: [
      "(2 items) +50% Enhanced Damage",
      "(3 items) All Resistances +30",
      "(4 items) +2 To All Skills"
    ],
    fullBonuses: [
      "+2 To All Skills",
      "+50% Enhanced Damage",
      "All Resistances +30",
      "+500 Defense",
      "+200 To Life",
      "20% Faster Hit Recovery",
      "Cannot Be Frozen"
    ],
    note: "Colossal Ancient Statue drop"
  },

  {
    id: 36,
    name: "Korlic's Pain",
    tier: "Elite",
    patch: "2026",
    ladder: false,
    class: "Barbarian",
    expansion: "Reign of the Warlock",
    level: 75,
    pieces: [
      { name: "Korlic's Might", type: "Colossus Blade", reqLevel: 75 },
      { name: "Korlic's Vow", type: "Savage Helmet", reqLevel: 75 },
      { name: "Korlic's Fury", type: "War Belt", reqLevel: 75 }
    ],
    partialBonuses: [
      "(2 items) +300% Enhanced Damage",
      "(3 items) +3 To Warcries (Barbarian Only)"
    ],
    fullBonuses: [
      "+300% Enhanced Damage",
      "+3 To Warcries (Barbarian Only)",
      "+3 To Combat Skills (Barbarian Only)",
      "50% Chance of Crushing Blow",
      "+150 To Life",
      "+50 To Strength"
    ],
    note: "Colossal Ancient Statue drop"
  },

  {
    id: 37,
    name: "Madawc's Ire",
    tier: "Elite",
    patch: "2026",
    ladder: false,
    class: "Barbarian",
    expansion: "Reign of the Warlock",
    level: 75,
    pieces: [
      { name: "Madawc's Throw", type: "Battle Dart", reqLevel: 75 },
      { name: "Madawc's Return", type: "War Spike", reqLevel: 75 },
      { name: "Madawc's Fury", type: "Colossus Girdle", reqLevel: 75 }
    ],
    partialBonuses: [
      "(2 items) +2 To Warcries (Barbarian Only)",
      "(3 items) 40% Increased Attack Speed"
    ],
    fullBonuses: [
      "+2 To Warcries (Barbarian Only)",
      "40% Increased Attack Speed",
      "+250% Enhanced Damage",
      "30% Deadly Strike",
      "+100 To Life",
      "Cannot Be Frozen"
    ],
    note: "Colossal Ancient Statue drop"
  },

  {
    id: 38,
    name: "Bul-Kathos' Nightmare",
    tier: "Elite",
    patch: "2026",
    ladder: false,
    class: "Barbarian",
    expansion: "Reign of the Warlock",
    level: 75,
    pieces: [
      { name: "Bul-Kathos' Vision", type: "Armet", reqLevel: 75 },
      { name: "Bul-Kathos' Wrath", type: "Colossus Blade", reqLevel: 75 },
      { name: "Bul-Kathos' Covenant", type: "Sacred Armor", reqLevel: 76 }
    ],
    partialBonuses: [
      "(2 items) +200% Damage To Demons",
      "(3 items) +3 To All Skills"
    ],
    fullBonuses: [
      "+3 To All Skills",
      "+200% Damage To Demons",
      "+300% Enhanced Damage",
      "All Resistances +40",
      "+250 To Life",
      "Indestructible"
    ],
    note: "Colossal Ancient Statue drop"
  },

  {
    id: 39,
    name: "Worusk's End",
    tier: "Elite",
    patch: "2026",
    ladder: false,
    class: "Any",
    expansion: "Reign of the Warlock",
    level: 75,
    pieces: [
      { name: "Worusk's Resolve", type: "Diadem", reqLevel: 75 },
      { name: "Worusk's Grasp", type: "Bramble Mitts", reqLevel: 75 },
      { name: "Worusk's Stride", type: "Mirrored Boots", reqLevel: 75 },
      { name: "Worusk's Seal", type: "Amulet", reqLevel: 75 }
    ],
    partialBonuses: [
      "(2 items) +1 To All Skills",
      "(3 items) 50% Better Chance Of Getting Magic Items",
      "(4 items) All Resistances +50"
    ],
    fullBonuses: [
      "+1 To All Skills",
      "50% Better Chance Of Getting Magic Items",
      "All Resistances +50",
      "+200 To Life",
      "+100 To Mana",
      "+30 To All Attributes"
    ],
    note: "Colossal Ancient Statue drop"
  }
];
