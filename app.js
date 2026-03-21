/* =====================================================
   DIABLO II — RUNEWORD COMPENDIUM — app.js
   Fully offline, data embedded (no fetch needed)
   ===================================================== */

'use strict';

// ─── Embedded Data ───────────────────────────────────
const RUNEWORD_DATA = {"runes":["El","Eld","Tir","Nef","Eth","Ith","Tal","Ral","Ort","Thul","Amn","Sol","Shael","Dol","Hel","Io","Lum","Ko","Fal","Lem","Pul","Um","Mal","Ist","Gul","Vex","Lo","Sur","Ber","Jah","Cham","Zod","Ohm"],"categories":["Body Armor","Helm","Shield","Weapon","Sword","Axe","Mace","Staff","Bow","Polearm","Spear","Dagger","Katar","Hammer","Club","Scepter","Wand","Grimoire"],"runewords":[{"id":1,"name":"Ancient's Pledge","runes":["Ral","Ort","Tal"],"sockets":3,"itemTypes":["Shield"],"level":21,"patch":"classic","ladder":false,"stats":["+50% Enhanced Defense","Cold Resist +43%","Fire Resist +48%","Lightning Resist +48%","Poison Resist +48%","10% Damage Taken Goes to Mana"]},{"id":2,"name":"Beast","runes":["Ber","Tir","Um","Mal","Lum"],"sockets":5,"itemTypes":["Axe","Hammer","Scepter"],"level":63,"patch":"classic","ladder":false,"stats":["Level 9 Fanaticism Aura When Equipped","+40% Increased Attack Speed","+240-270% Enhanced Damage","20% Chance of Crushing Blow","25% Chance of Open Wounds","+3 To Werebear","+3 To Lycanthropy","Prevent Monster Heal","+25-40 To Strength","+10 To Energy","+2 To Mana After Each Kill","Level 13 Summon Grizzly (5 Charges)"]},{"id":3,"name":"Black","runes":["Thul","Io","Nef"],"sockets":3,"itemTypes":["Club","Hammer","Mace"],"level":35,"patch":"classic","ladder":false,"stats":["+15% Increased Attack Speed","+120% Enhanced Damage","+200 To Attack Rating","Adds 3-14 Cold Damage","40% Chance of Crushing Blow","Knockback","+10 To Vitality","Magic Damage Reduced By 2","Level 4 Corpse Explosion (12 Charges)"]},{"id":4,"name":"Bone","runes":["Sol","Um","Um"],"sockets":3,"itemTypes":["Body Armor"],"level":47,"patch":"classic","ladder":false,"stats":["15% Chance To Cast level 10 Bone Armor When Struck","15% Chance To Cast level 10 Bone Spear On Striking","+2 To Necromancer Skill Levels","+100-150 To Mana","All Resistances +30","Damage Reduced By 7"]},{"id":5,"name":"Bramble","runes":["Ral","Ohm","Sur","Eth"],"sockets":4,"itemTypes":["Body Armor"],"level":61,"patch":"classic","ladder":false,"stats":["Level 15-21 Thorns Aura When Equipped","+50% Faster Hit Recovery","+25-50% To Poison Skill Damage","-25% To Enemy Poison Resistance","+3 To Poison And Bone Skills","+0.375 To Life","+10 To Energy","Regenerate Mana 15%","+5% To Maximum Cold Resist","Fire Resist +30%","Poison Resist +100%","+13 Life After Each Kill","Level 13 Spirit Of Barbs (33 Charges)"]},{"id":6,"name":"Brand","runes":["Jah","Lo","Mal","Gul"],"sockets":4,"itemTypes":["Bow"],"level":65,"patch":"classic","ladder":true,"stats":["35% Chance To Cast Level 14 Amplify Damage When Struck","100% Chance To Cast Level 18 Bone Spear On Striking","+260-340% Enhanced Damage","Ignore Target's Defense","20% Bonus To Attack Rating","+280-330% Damage To Demons","20% Deadly Strike","Prevent Monster Heal","Knockback","Fires Explosive Arrows or Bolts (15)"]},{"id":7,"name":"Breath of the Dying","runes":["Vex","Hel","El","Eld","Zod","Eth"],"sockets":6,"itemTypes":["Weapon"],"level":69,"patch":"classic","ladder":false,"stats":["50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy","Indestructible","+60% Increased Attack Speed","+350-400% Enhanced Damage","-25% Target Defense","+50 To Attack Rating","+200% Damage To Undead","+50 To Attack Rating Against Undead","7% Mana Stolen Per Hit","12-15% Life Stolen Per Hit","Prevent Monster Heal","+30 To All Attributes","+1 To Light Radius","Requirements -20%"]},{"id":8,"name":"Call to Arms","runes":["Amn","Ral","Mal","Ist","Ohm"],"sockets":5,"itemTypes":["Weapon"],"level":57,"patch":"classic","ladder":false,"stats":["+1 To All Skills","+40% Increased Attack Speed","+240-290% Enhanced Damage","Adds 5-30 Fire Damage","7% Life Stolen Per Hit","+2-6 To Battle Command","+1-6 To Battle Orders","+1-4 To Battle Cry","Prevent Monster Heal","Replenish Life +12","30% Better Chance of Getting Magic Items"]},{"id":9,"name":"Chains of Honor","runes":["Dol","Um","Ber","Ist"],"sockets":4,"itemTypes":["Body Armor"],"level":63,"patch":"classic","ladder":false,"stats":["+2 To All Skills","+200% Damage To Demons","+100% Damage To Undead","8% Life Stolen Per Hit","+70% Enhanced Defense","+20 To Strength","Replenish Life +7","All Resistances +65","Damage Reduced By 8%","25% Better Chance of Getting Magic Items"]},{"id":10,"name":"Chaos","runes":["Fal","Ohm","Um"],"sockets":3,"itemTypes":["Katar"],"level":57,"patch":"classic","ladder":false,"stats":["9% Chance To Cast Level 11 Frozen Orb On Striking","11% Chance To Cast Level 9 Charged Bolt On Striking","+35% Increased Attack Speed","+290-340% Enhanced Damage","Adds 216-471 Magic Damage","25% Chance of Open Wounds","+1 To Whirlwind","+10 To Strength","+15 Life After Each Demon Kill"]},{"id":11,"name":"Crescent Moon","runes":["Shael","Um","Tir"],"sockets":3,"itemTypes":["Axe","Polearm","Sword"],"level":47,"patch":"classic","ladder":false,"stats":["10% Chance To Cast Level 17 Chain Lightning On Striking","7% Chance To Cast Level 13 Static Field On Striking","+20% Increased Attack Speed","+180-220% Enhanced Damage","Ignore Target's Defense","-35% To Enemy Lightning Resistance","25% Chance of Open Wounds","+9-11 Magic Absorb","+2 To Mana After Each Kill","Level 18 Summon Spirit Wolf (30 Charges)"]},{"id":12,"name":"Death","runes":["Hel","El","Vex","Ort","Gul"],"sockets":5,"itemTypes":["Sword","Axe"],"level":55,"patch":"classic","ladder":true,"stats":["Indestructible","100% Chance To Cast Level 44 Chain Lightning When You Die","25% Chance To Cast Level 18 Glacial Spike On Attack","+300-385% Enhanced Damage","20% Bonus To Attack Rating","+50 To Attack Rating","7% Mana Stolen Per Hit","50% Chance of Crushing Blow","+1 To Light Radius","Level 22 Blood Golem (15 Charges)","Requirements -20%"]},{"id":13,"name":"Delirium","runes":["Lem","Ist","Io"],"sockets":3,"itemTypes":["Helm"],"level":51,"patch":"classic","ladder":true,"stats":["1% Chance To Cast Level 50 Delirium When Struck","6% Chance To Cast Level 14 Mind Blast When Struck","14% Chance To Cast Level 13 Terror When Struck","11% Chance To Cast Level 18 Confuse On Striking","+2 To All Skills","+261 Defense","+10 To Vitality","+50 To Life","+25% Better Chance of Getting Magic Items","Level 17 Attract (60 Charges)"]},{"id":14,"name":"Destruction","runes":["Vex","Lo","Ber","Jah","Ko"],"sockets":5,"itemTypes":["Polearm","Sword"],"level":65,"patch":"classic","ladder":true,"stats":["23% Chance To Cast Level 12 Volcano On Striking","5% Chance To Cast Level 23 Molten Boulder On Striking","100% Chance To Cast Level 45 Meteor When You Die","15% Chance To Cast Level 22 Nova On Attack","+350% Enhanced Damage","Ignore Target's Defense","Adds 100-180 Magic Damage","7% Mana Stolen Per Hit","20% Chance Of Crushing Blow","20% Deadly Strike","Prevent Monster Heal","+10 To Dexterity"]},{"id":15,"name":"Doom","runes":["Hel","Ohm","Um","Lo","Cham"],"sockets":5,"itemTypes":["Axe","Hammer","Polearm"],"level":67,"patch":"classic","ladder":false,"stats":["5% Chance To Cast Level 18 Volcano On Striking","Level 12 Holy Freeze Aura When Equipped","+2 To All Skills","+45% Increased Attack Speed","+330-370% Enhanced Damage","-40-60% To Enemy Cold Resistance","20% Deadly Strike","25% Chance of Open Wounds","Prevent Monster Heal","Freezes Target +3","Requirements -20%"]},{"id":16,"name":"Dragon","runes":["Sur","Lo","Sol"],"sockets":3,"itemTypes":["Body Armor","Shield"],"level":61,"patch":"classic","ladder":true,"statsByType":{"Body Armor":["20% Chance To Cast Level 18 Venom When Struck","12% Chance To Cast Level 15 Hydra On Striking","Level 14 Holy Fire Aura When Equipped","+360 Defense","+230 Defense vs. Missile","+3-5 To All Attributes","+0.375-37.125 To Strength (Based on Character Level)","Increase Maximum Mana 5%","+5% To Maximum Lightning Resist","Damage Reduced By 7"],"Shield":["20% Chance To Cast Level 18 Venom When Struck","12% Chance To Cast Level 15 Hydra On Striking","Level 14 Holy Fire Aura When Equipped","+360 Defense","+230 Defense vs. Missile","+3-5 To All Attributes","+0.375-37.125 To Strength (Based on Character Level)","+50 To Mana","+5% To Maximum Lightning Resist","Damage Reduced By 7"]}},{"id":17,"name":"Dream","runes":["Io","Jah","Pul"],"sockets":3,"itemTypes":["Helm","Shield"],"level":65,"patch":"classic","ladder":true,"statsByType":{"Helm":["10% Chance To Cast Level 15 Confuse When Struck","Level 15 Holy Shock Aura When Equipped","+20-30% Faster Hit Recovery","+30% Enhanced Defense","+150-220 Defense","+10 To Vitality","Increase Maximum Life 5%","+(0.625 Per Character Level) To Mana","All Resistances +5-20","12-25% Better Chance of Getting Magic Items"],"Shield":["10% Chance To Cast Level 15 Confuse When Struck","Level 15 Holy Shock Aura When Equipped","+20-30% Faster Hit Recovery","+30% Enhanced Defense","+150-220 Defense","+10 To Vitality","+50 To Life","+(0.625 Per Character Level) To Mana","All Resistances +5-20","12-25% Better Chance of Getting Magic Items"]}},{"id":18,"name":"Duress","runes":["Shael","Um","Thul"],"sockets":3,"itemTypes":["Body Armor"],"level":47,"patch":"classic","ladder":false,"stats":["+40% Faster Hit Recovery","+10-20% Enhanced Damage","Adds 37-133 Cold Damage","15% Chance of Crushing Blow","33% Chance of Open Wounds","+150-200% Enhanced Defense","-20% Slower Stamina Drain","Cold Resist +45%","Lightning Resist +15%","Fire Resist +15%","Poison Resist +15%"]},{"id":19,"name":"Edge","runes":["Tir","Tal","Amn"],"sockets":3,"itemTypes":["Bow"],"level":25,"patch":"classic","ladder":true,"stats":["Level 15 Thorns Aura When Equipped","+35% Increased Attack Speed","+320-380% Damage To Demons","+280% Damage To Undead","+75 Poison Damage Over 5 Seconds","7% Life Stolen Per Hit","Prevent Monster Heal","+5-10 To All Attributes","+2 To Mana After Each Kill","Reduces All Vendor Prices 15%"]},{"id":20,"name":"Enigma","runes":["Jah","Ith","Ber"],"sockets":3,"itemTypes":["Body Armor"],"level":65,"patch":"classic","ladder":false,"stats":["+2 To All Skills","+45% Faster Run/Walk","+1 To Teleport","+750-775 Defense","+0.75 Per Level To Strength","Increase Maximum Life 5%","Damage Reduced By 8%","+14 Life After Each Kill","+0.375 Per Level To Mana","15% Damage Taken Goes To Mana","+1 To Teleport"]},{"id":21,"name":"Enlightenment","runes":["Pul","Ral","Sol"],"sockets":3,"itemTypes":["Body Armor"],"level":45,"patch":"classic","ladder":true,"stats":["5% Chance To Cast Level 15 Blaze When Struck","5% Chance To Cast level 15 Fire Ball On Striking","+2 To Sorceress Skill Levels","+1 To Warmth","+30% Enhanced Defense","Fire Resist +30%","Damage Reduced By 7"]},{"id":22,"name":"Eternity","runes":["Amn","Ber","Ist","Sol","Sur"],"sockets":5,"itemTypes":["Weapon"],"level":63,"patch":"classic","ladder":false,"stats":["Indestructible","+260-310% Enhanced Damage","+9 To Minimum Damage","7% Life Stolen Per Hit","20% Chance of Crushing Blow","Hit Blinds Target","Slows Target By 33%","Regenerate Mana 16%","Replenish Life +16","+0.1875 Per Level To Life","Level 16 Heart of Wolverine (20 Charges)","Level 17 Iron Golem (14 Charges)"]},{"id":23,"name":"Exile","runes":["Vex","Ohm","Ist","Dol"],"sockets":4,"itemTypes":["Shield"],"level":57,"patch":"classic","ladder":true,"stats":["15% Chance To Cast Level 5 Life Tap On Striking","Level 13-16 Defiance Aura When Equipped","+2 To Offensive Auras (Paladin Only)","+30% Faster Block Rate","Freezes Target","+220-260% Enhanced Defense","Replenish Life +7","+5% To Maximum Cold Resist","+5% To Maximum Fire Resist","+25% Better Chance Of Getting Magic Items","Repairs 1 Durability every 4 seconds"]},{"id":24,"name":"Faith","runes":["Ohm","Jah","Lem","Eld"],"sockets":4,"itemTypes":["Bow"],"level":65,"patch":"classic","ladder":true,"stats":["Level 12-15 Fanaticism Aura When Equipped","+1-2 To All Skills","+330% Enhanced Damage","Ignore Target's Defense","300% Bonus To Attack Rating","+75% Damage To Undead","+50 To Attack Rating Against Undead","+120 Fire Damage","All Resistances +15","10% Reanimate As: Returned","75% Extra Gold From Monsters"]},{"id":25,"name":"Famine","runes":["Fal","Ohm","Ort","Jah"],"sockets":4,"itemTypes":["Axe","Hammer"],"level":65,"patch":"classic","ladder":false,"stats":["+30% Increased Attack Speed","+320-370% Enhanced Damage","Ignore Target's Defense","Adds 180-200 Magic Damage","Adds 50-200 Fire Damage","Adds 51-250 Lightning Damage","Adds 3-14 Cold Damage","12% Life Stolen Per Hit","Prevent Monster Heal","+10 To Strength"]},{"id":26,"name":"Flickering Flame","runes":["Nef","Pul","Vex"],"sockets":3,"itemTypes":["Helm"],"level":55,"patch":"classic","ladder":true,"stats":["Level 4-8 Resist Fire Aura When Equipped","+3 To Fire Skills","-10-15% to Enemy Fire Resistance","+30% Enhanced Defense","+30 Defense","+10 To Vitality","Poison Length Reduced by 50%","+5% To Maximum Fire Resist","Replenish Life +16","+0.375 To Mana"]},{"id":27,"name":"Fortitude","runes":["El","Sol","Dol","Lo"],"sockets":4,"itemTypes":["Weapon","Body Armor"],"level":59,"patch":"classic","ladder":true,"statsByType":{"Weapon":["20% Chance To Cast Level 15 Chilling Armor When Struck","+25% Faster Cast Rate","+300% Enhanced Damage","+9 To Minimum Damage","+50 To Attack Rating","20% Deadly Strike","Hit Causes Monster To Flee 25%","+200% Enhanced Defense","+X To Life (Based on Character Level)","All Resistances +25-30","12% Damage Taken Goes To Mana","+1 To Light Radius"],"Body Armor":["20% Chance To Cast Level 15 Chilling Armor When Struck","+25% Faster Cast Rate","+300% Enhanced Damage","+200% Enhanced Defense","+15 Defense","+X To Life (Based on Character Level)","Replenish Life +7","+5% To Maximum Lightning Resist","All Resistances +25-30","Damage Reduced By 7","12% Damage Taken Goes To Mana","+1 To Light Radius"]}},{"id":28,"name":"Fury","runes":["Jah","Gul","Eth"],"sockets":3,"itemTypes":["Weapon"],"level":65,"patch":"classic","ladder":false,"stats":["+209% Enhanced Damage","40% Increased Attack Speed","Prevent Monster Heal","66% Chance of Open Wounds","33% Deadly Strike","Ignore Target's Defense","-25% Target Defense","20% Bonus to Attack Rating","6% Life Stolen Per Hit","+5 To Frenzy (Barbarian Only)"]},{"id":29,"name":"Gloom","runes":["Fal","Um","Pul"],"sockets":3,"itemTypes":["Body Armor"],"level":47,"patch":"classic","ladder":false,"stats":["15% Chance To Cast Level 3 Dim Vision When Struck","+10% Faster Hit Recovery","+200-260% Enhanced Defense","+10 To Strength","All Resistances +45","Half Freeze Duration","5% Damage Taken Goes To Mana","-3 To Light Radius"]},{"id":30,"name":"Grief","runes":["Eth","Tir","Lo","Mal","Ral"],"sockets":5,"itemTypes":["Sword","Axe"],"level":59,"patch":"classic","ladder":true,"stats":["35% Chance To Cast Level 15 Venom On Striking","+30-40% Increased Attack Speed","Damage+340-400","Ignore Target's Defense","-25% Target Defense","+(1.875 Per Character Level) % Deadly Strike","+2 To Mana After Each Kill","Prevent Monster Heal","+10-15 Life After Each Kill","Adds 5-30 Fire Damage"]},{"id":31,"name":"Hand of Justice","runes":["Sur","Cham","Amn","Lo"],"sockets":4,"itemTypes":["Weapon"],"level":67,"patch":"classic","ladder":true,"stats":["100% Chance To Cast Level 36 Blaze When You Level-Up","100% Chance To Cast Level 48 Meteor When You Die","Level 16 Holy Fire Aura When Equipped","+33% Increased Attack Speed","+280-330% Enhanced Damage","Ignore Target's Defense","7% Life Stolen Per Hit","-20% To Enemy Fire Resistance","20% Deadly Strike","Hit Blinds Target","Freezes Target +3"]},{"id":32,"name":"Harmony","runes":["Tir","Ith","Sol","Ko"],"sockets":4,"itemTypes":["Bow"],"level":39,"patch":"classic","ladder":true,"stats":["Level 10 Vigor Aura When Equipped","+200-275% Enhanced Damage","+9 To Minimum Damage","+9 To Maximum Damage","Adds 55-160 Fire Damage","Adds 55-160 Lightning Damage","Adds 55-160 Cold Damage","+2-6 To Valkyrie","+10 To Dexterity","Regenerate Mana 20%","+2 To Mana After Each Kill","+2 To Light Radius","Level 20 Revive (25 Charges)"]},{"id":33,"name":"Heart of the Oak","runes":["Ko","Vex","Pul","Thul"],"sockets":4,"itemTypes":["Staff","Mace"],"level":55,"patch":"classic","ladder":false,"stats":["+3 To All Skills","+40% Faster Cast Rate","+75% Damage To Demons","+100 To Attack Rating Against Demons","Adds 3-14 Cold Damage","7% Mana Stolen Per Hit","+10 To Dexterity","Replenish Life +20","Increase Maximum Mana 15%","All Resistances +30-40","Level 4 Oak Sage (25 Charges)","Level 14 Raven (60 Charges)"]},{"id":34,"name":"Holy Thunder","runes":["Eth","Ral","Ort","Tal"],"sockets":4,"itemTypes":["Scepter"],"level":23,"patch":"classic","ladder":false,"stats":["+60% Enhanced Damage","-25% Target Defense","Adds 5-30 Fire Damage","Adds 21-110 Lightning Damage","+75 Poison Damage Over 5 Seconds","+10 To Maximum Damage","Lightning Resist +60%","+5 To Maximum Lightning Resist","+3 To Holy Shock (Paladin Only)","Level 7 Chain Lightning (60 Charges)"]},{"id":35,"name":"Honor","runes":["Amn","El","Ith","Tir","Sol"],"sockets":5,"itemTypes":["Weapon"],"level":27,"patch":"classic","ladder":false,"stats":["+1 To All Skills","+160% Enhanced Damage","+9 To Minimum Damage","+9 To Maximum Damage","+250 To Attack Rating","7% Life Stolen Per Hit","25% Deadly Strike","+10 To Strength","Replenish Life +10","+2 To Mana After Each Kill","+1 To Light Radius"]},{"id":36,"name":"Ice","runes":["Amn","Shael","Jah","Lo"],"sockets":4,"itemTypes":["Bow"],"level":65,"patch":"classic","ladder":true,"stats":["100% Chance To Cast Level 40 Blizzard When You Level-up","25% Chance To Cast Level 22 Frost Nova On Striking","Level 18 Holy Freeze Aura When Equipped","+20% Increased Attack Speed","+140-210% Enhanced Damage","Ignore Target's Defense","+25-30% To Cold Skill Damage","-20% To Enemy Cold Resistance","7% Life Stolen Per Hit","20% Deadly Strike","3.125% Extra Gold From Monsters"]},{"id":37,"name":"Infinity","runes":["Ber","Mal","Ber","Ist"],"sockets":4,"itemTypes":["Polearm","Spear"],"level":63,"patch":"classic","ladder":true,"stats":["50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy","Level 12 Conviction Aura When Equipped","+35% Faster Run/Walk","+255-325% Enhanced Damage","-(45-55)% To Enemy Lightning Resistance","40% Chance of Crushing Blow","Prevent Monster Heal","0.5% (0-49.5%) Deadly Strike","+0.5% To Strength","Level 21 Cyclone Armor (30 Charges)"]},{"id":38,"name":"Insight","runes":["Ral","Tir","Tal","Sol"],"sockets":4,"itemTypes":["Polearm","Staff"],"level":27,"patch":"classic","ladder":false,"stats":["Level 12-17 Meditation Aura When Equipped","+35% Faster Cast Rate","+200-260% Enhanced Damage","+9 To Minimum Damage","180-250% Bonus to Attack Rating","Adds 5-30 Fire Damage","+75 Poison Damage Over 5 Seconds","+1-6 To Critical Strike","+5 To All Attributes","+2 To Mana After Each Kill","23% Better Chance of Getting Magic Items"]},{"id":39,"name":"King's Grace","runes":["Amn","Ral","Thul"],"sockets":3,"itemTypes":["Sword","Scepter"],"level":25,"patch":"classic","ladder":false,"stats":["+100% Enhanced Damage","+150 To Attack Rating","+100% Damage To Demons","+50 To Attack Rating Against Demons","+100% Damage To Undead","+50 To Attack Rating Against Undead","Adds 5-30 Fire Damage","Adds 3-14 Cold Damage","7% Life Stolen Per Hit"]},{"id":40,"name":"Kingslayer","runes":["Mal","Um","Gul","Fal"],"sockets":4,"itemTypes":["Sword","Axe"],"level":53,"patch":"classic","ladder":false,"stats":["+30% Increased Attack Speed","+230-270% Enhanced Damage","-25% Target Defense","20% Bonus To Attack Rating","33% Chance of Crushing Blow","50% Chance of Open Wounds","+1 To Vengeance","Prevent Monster Heal","+10 To Strength","40% Extra Gold From Monsters"]},{"id":41,"name":"Last Wish","runes":["Jah","Mal","Jah","Sur","Jah","Ber"],"sockets":6,"itemTypes":["Sword","Hammer","Axe"],"level":65,"patch":"classic","ladder":true,"stats":["6% Chance To Cast Level 11 Fade When Struck","10% Chance To Cast Level 18 Life Tap On Striking","20% Chance To Cast Level 20 Charged Bolt On Attack","Level 17 Might Aura When Equipped","+330-375% Enhanced Damage","Ignore Target's Defense","60-70% Chance of Crushing Blow","Prevent Monster Heal","Hit Blinds Target","+(0.5 Per Character Level) To Strength"]},{"id":42,"name":"Lawbringer","runes":["Amn","Lem","Ko"],"sockets":3,"itemTypes":["Sword","Hammer","Scepter"],"level":43,"patch":"classic","ladder":false,"stats":["20% Chance To Cast Level 15 Decrepify On Striking","Level 16-18 Sanctuary Aura When Equipped","-50% Target Defense","Adds 150-210 Fire Damage","Adds 130-180 Cold Damage","7% Life Stolen Per Hit","Slain Monsters Rest In Peace","+200-250 Defense vs. Missile","+10 To Dexterity","75% Extra Gold From Monsters"]},{"id":43,"name":"Leaf","runes":["Tir","Ral"],"sockets":2,"itemTypes":["Staff"],"level":19,"patch":"classic","ladder":false,"stats":["+3 To Fire Skills","+3 To Inferno (Sorceress Only)","+3 To Warmth (Sorceress Only)","+3 To Fire Bolt (Sorceress Only)","+(2 Per Character Level) Defense","Cold Resist +33%","Adds 5-30 Fire Damage","+2 To Mana After Each Kill","+15 To Strength"]},{"id":44,"name":"Lionheart","runes":["Hel","Lum","Fal"],"sockets":3,"itemTypes":["Body Armor"],"level":41,"patch":"classic","ladder":false,"stats":["+20% Enhanced Damage","+25 To Strength","+15 To Dexterity","+20 To Vitality","+10 To Energy","+50 To Life","All Resistances +30","Requirements -15%"]},{"id":45,"name":"Lore","runes":["Ort","Sol"],"sockets":2,"itemTypes":["Helm"],"level":27,"patch":"classic","ladder":false,"stats":["+1 To All Skills","+10 To Energy","+2 To Mana After Each Kill","Lightning Resist +30%","Damage Reduced By 7","+2 To Light Radius"]},{"id":46,"name":"Malice","runes":["Ith","El","Eth"],"sockets":3,"itemTypes":["Weapon"],"level":15,"patch":"classic","ladder":false,"stats":["+33% Enhanced Damage","+9 To Maximum Damage","100% Chance Of Open Wounds","-25% Target Defense","-100 To Monster Defense Per Hit","Prevent Monster Heal","-25 To Vitality","Magic Damage Reduced By 100"]},{"id":47,"name":"Melody","runes":["Shael","Ko","Nef"],"sockets":3,"itemTypes":["Bow"],"level":39,"patch":"classic","ladder":false,"stats":["+3 To Bow And Crossbow Skills","+20% Increased Attack Speed","+50% Enhanced Damage","+300% Damage To Undead","+3 To Slow Missiles","+3 To Dodge","+3 To Critical Strike","Knockback","+10 To Dexterity"]},{"id":48,"name":"Memory","runes":["Lum","Io","Sol","Eth"],"sockets":4,"itemTypes":["Staff"],"level":37,"patch":"classic","ladder":false,"stats":["+3 To Sorceress Skill Levels","+33% Faster Cast Rate","+9 To Minimum Damage","-25% Target Defense","+3 To Energy Shield","+2 To Static Field","+50% Enhanced Defense","+10 To Vitality","+10 To Energy","Increase Maximum Mana 20%","Magic Damage Reduced By 7"]},{"id":49,"name":"Mist","runes":["Cham","Shael","Gul","Thul","Ith"],"sockets":5,"itemTypes":["Bow"],"level":67,"patch":"classic","ladder":true,"stats":["Level 8-12 Concentration Aura When Equipped","+3 To All Skills","+20% Increased Attack Speed","+100% Piercing Attack","+325-375% Enhanced Damage","+9 To Maximum Damage","20% Bonus To Attack Rating","Adds 3-14 Cold Damage","Freezes Target +3","+24 To Vitality","All Resistances +40"]},{"id":50,"name":"Mosaic","runes":["Mal","Gul","Amn"],"sockets":3,"itemTypes":["Katar"],"level":53,"patch":"classic","ladder":true,"stats":["50% Chance To Cast Level 20 Fire Bolt When Struck","+50% Increased Attack Speed","+200-250% Enhanced Damage","All Resistances +10","+10 To Minimum Damage","+10 To Maximum Damage","7% Life Stolen Per Hit","10% Chance of Crushing Blow","+2 To Martial Arts (Assassin Only)","Prevent Monster Heal"]},{"id":51,"name":"Myth","runes":["Hel","Amn","Nef"],"sockets":3,"itemTypes":["Body Armor"],"level":25,"patch":"classic","ladder":false,"stats":["3% Chance To Cast Level 1 Howl When Struck","10% Chance To Cast Level 1 Taunt On Striking","+2 To Barbarian Skill Levels","+30 Defense vs. Missile","Replenish Life +10","Attacker Takes Damage of 14","Requirements -15%"]},{"id":52,"name":"Nadir","runes":["Nef","Tir"],"sockets":2,"itemTypes":["Helm"],"level":13,"patch":"classic","ladder":false,"stats":["+50% Enhanced Defense","+10 Defense","+30 Defense vs. Missile","+5 To Strength","+2 To Mana After Each Kill","-33% Gold From Monsters","-3 To Light Radius","Level 13 Cloak of Shadows (9 Charges)"]},{"id":53,"name":"Night Wing's Veil","runes":["Sur","El"],"sockets":2,"itemTypes":["Helm"],"level":67,"patch":"classic","ladder":true,"stats":["+2 To All Skills","+20% Faster Hit Recovery","+90-120% Enhanced Defense","+10-20% To Cold Skill Damage","Lightning Resist +25%","+5% To Maximum Cold Resist","+4-8 Cold Absorb","+2 To Mana After Each Kill","Requirements -50%"]},{"id":54,"name":"Oath","runes":["Shael","Pul","Mal","Lum"],"sockets":4,"itemTypes":["Axe","Mace","Sword"],"level":49,"patch":"classic","ladder":true,"stats":["Indestructible","30% Chance To Cast Level 20 Bone Spirit On Striking","+50% Increased Attack Speed","+210-340% Enhanced Damage","+75% Damage To Demons","+100 To Attack Rating Against Demons","Prevent Monster Heal","+10 To Energy","+10-15 Magic Absorb","Level 16 Heart of Wolverine (20 Charges)","Level 17 Iron Golem (14 Charges)"]},{"id":55,"name":"Obedience","runes":["Hel","Ko","Thul","Eth","Fal"],"sockets":5,"itemTypes":["Polearm"],"level":41,"patch":"classic","ladder":false,"stats":["30% Chance To Cast Level 21 Enchant When You Kill An Enemy","+40% Faster Hit Recovery","+370% Enhanced Damage","-25% Target Defense","Adds 3-14 Cold Damage","-25% To Enemy Fire Resistance","40% Chance of Crushing Blow","+200-300 Defense","+10 To Strength","+10 To Dexterity","All Resistances +20-30","Requirements -20%"]},{"id":56,"name":"Obsession","runes":["Zod","Ist","Lem","Lum","Io","Nef"],"sockets":6,"itemTypes":["Staff"],"level":69,"patch":"classic","ladder":false,"stats":["Indestructible","24% Chance to cast level 10 Weaken when struck","+4 To All Skills","+65% Faster Cast Rate","+60% Faster Hit Recovery","Knockback","+10 To Vitality","+10 To Energy","Increase Maximum Life 15-25%","Regenerate Mana 15-30%","All Resistances +60-70","75% Extra Gold From Monsters","30% Better Chance of Getting Magic Items"]},{"id":57,"name":"Passion","runes":["Dol","Ort","Eld","Lem"],"sockets":4,"itemTypes":["Weapon"],"level":43,"patch":"classic","ladder":false,"stats":["+25% Increased Attack Speed","+160-210% Enhanced Damage","50-80% Bonus To Attack Rating","+75% Damage To Undead","+50 To Attack Rating Against Undead","Adds 1-50 Lightning Damage","+1 To Berserk","+1 To Zeal","Hit Blinds Target +10","Hit Causes Monster To Flee 25%","75% Extra Gold From Monsters","Level 3 Heart of Wolverine (12 Charges)"]},{"id":58,"name":"Peace","runes":["Shael","Thul","Amn"],"sockets":3,"itemTypes":["Body Armor"],"level":29,"patch":"classic","ladder":false,"stats":["4% Chance To Cast Level 5 Slow Missiles When Struck","2% Chance To Cast level 15 Valkyrie On Striking","+2 To Amazon Skill Levels","+20% Faster Hit Recovery","+2 To Critical Strike","Cold Resist +30%","Attacker Takes Damage of 14"]},{"id":59,"name":"Phoenix","runes":["Vex","Vex","Lo","Jah"],"sockets":4,"itemTypes":["Weapon","Shield"],"level":65,"patch":"classic","ladder":true,"statsByType":{"Weapon":["100% Chance To Cast Level 40 Blaze When You Level-Up","40% Chance To Cast Level 22 Firestorm On Striking","Level 10-15 Redemption Aura When Equipped","+350-400% Enhanced Damage","Ignores Target's Defense","14% Mana Stolen Per Hit","-28% To Enemy Fire Resistance","20% Deadly Strike","+350-400 Defense vs. Missile","+15-21 Fire Absorb"],"Shield":["100% Chance To Cast Level 40 Blaze When You Level-Up","40% Chance To Cast Level 22 Firestorm On Striking","Level 10-15 Redemption Aura When Equipped","+350-400 Defense vs. Missile","+350-400% Enhanced Defense","-28% To Enemy Fire Resistance","+50 To Life","+5% To Maximum Lightning Resist","+10% To Maximum Fire Resist","+15-21 Fire Absorb"]}},{"id":60,"name":"Pride","runes":["Cham","Sur","Io","Lo"],"sockets":4,"itemTypes":["Polearm"],"level":67,"patch":"classic","ladder":true,"stats":["25% Chance To Cast Level 17 Fire Wall When Struck","Level 16-20 Concentration Aura When Equipped","260-300% Bonus To Attack Rating","+(1*Clvl)% Damage To Demons","Adds 50-280 Lightning Damage","20% Deadly Strike","Hit Blinds Target","+10 To Vitality","Replenish Life +8","1.875% Extra Gold From Monsters Per Level"]},{"id":61,"name":"Principle","runes":["Ral","Gul","Eld"],"sockets":3,"itemTypes":["Body Armor"],"level":55,"patch":"classic","ladder":false,"stats":["100% Chance To Cast Level 5 Holy Bolt On Striking","+2 To Paladin Skill Levels","+50% Damage To Undead","+100-150 To Life","15% Slower Stamina Drain","+5% To Maximum Poison Resist","Fire Resist +30%"]},{"id":62,"name":"Prudence","runes":["Mal","Tir"],"sockets":2,"itemTypes":["Body Armor"],"level":49,"patch":"classic","ladder":false,"stats":["+25% Faster Hit Recovery","+140-170% Enhanced Defense","All Resistances +25-35","Damage Reduced by 3","Magic Damage Reduced by 17","+2 To Mana After Each Kill","+1 To Light Radius","Repairs Durability 1 In 4 Seconds"]},{"id":63,"name":"Radiance","runes":["Nef","Sol","Ith"],"sockets":3,"itemTypes":["Helm"],"level":27,"patch":"classic","ladder":false,"stats":["+75% Enhanced Defense","+30 Defense vs. Missile","+10 To Vitality","+10 To Energy","+33 To Mana","Damage Reduced By 7","Magic Damage Reduced By 3","15% Damage Taken Goes To Mana","+5 To Light Radius"]},{"id":64,"name":"Rain","runes":["Ort","Mal","Ith"],"sockets":3,"itemTypes":["Body Armor"],"level":49,"patch":"classic","ladder":false,"stats":["5% Chance To Cast Level 15 Cyclone Armor When Struck","5% Chance To Cast Level 15 Twister On Striking","+2 To Druid Skills","+100-150 To Mana","Lightning Resist +30%","Poison Resist +30%","15% Damage Taken Goes To Mana"]},{"id":65,"name":"Rhyme","runes":["Shael","Eth"],"sockets":2,"itemTypes":["Shield"],"level":29,"patch":"classic","ladder":false,"stats":["+40% Faster Block Rate","20% Increased Chance of Blocking","Regenerate Mana 15%","All Resistances +25","Cannot Be Frozen","50% Extra Gold From Monsters","25% Better Chance of Getting Magic Items"]},{"id":66,"name":"Rift","runes":["Hel","Ko","Lem","Gul"],"sockets":4,"itemTypes":["Polearm","Scepter"],"level":53,"patch":"classic","ladder":true,"stats":["20% Chance To Cast Level 16 Tornado On Striking","16% Chance To Cast Level 21 Frozen Orb On Attack","20% Bonus To Attack Rating","Adds 160-250 Magic Damage","Adds 60-180 Fire Damage","+5-10 To All Attributes","+10 To Dexterity","38% Damage Taken Goes To Mana","75% Extra Gold From Monsters","Level 15 Iron Maiden (40 Charges)","Requirements -20%"]},{"id":67,"name":"Sanctuary","runes":["Ko","Ko","Mal"],"sockets":3,"itemTypes":["Shield"],"level":49,"patch":"classic","ladder":false,"stats":["+20% Faster Hit Recovery","+20% Faster Block Rate","20% Increased Chance of Blocking","+130-160% Enhanced Defense","+250 Defense vs. Missile","+20 To Dexterity","All Resistances +50-70","Magic Damage Reduced By 7","Level 12 Slow Missiles (60 Charges)"]},{"id":68,"name":"Silence","runes":["Dol","Eld","Hel","Ist","Tir","Vex"],"sockets":6,"itemTypes":["Weapon"],"level":55,"patch":"classic","ladder":false,"stats":["+2 To All Skills","+20% Increased Attack Speed","+20% Faster Hit Recovery","+200% Enhanced Damage","+75% Damage To Undead","+50 To Attack Rating Against Undead","11% Mana Stolen Per Hit","Hit Causes Monster To Flee 25%","All Resistances +75","+2 To Mana After Each Kill","30% Better Chance of Getting Magic Items","Requirements -20%"]},{"id":69,"name":"Smoke","runes":["Nef","Lum"],"sockets":2,"itemTypes":["Body Armor"],"level":37,"patch":"classic","ladder":false,"stats":["+20% Faster Hit Recovery","+75% Enhanced Defense","+280 Defense vs. Missile","+10 To Energy","All Resistances +50","-1 To Light Radius","Level 6 Weaken (18 Charges)"]},{"id":70,"name":"Spirit","runes":["Tal","Thul","Ort","Amn"],"sockets":4,"itemTypes":["Sword","Shield"],"level":25,"patch":"classic","ladder":false,"statsByType":{"Sword":["+2 To All Skills","+25-35% Faster Cast Rate","+55% Faster Hit Recovery","Adds 1-50 Lightning Damage","Adds 3-14 Cold Damage \u2014 3 Second Duration","+75 Poison Damage Over 5 Seconds","7% Life Stolen Per Hit","+250 Defense vs. Missile","+22 To Vitality","+89-112 To Mana","+3-8 Magic Absorb"],"Shield":["+2 To All Skills","+25-35% Faster Cast Rate","+55% Faster Hit Recovery","+250 Defense vs. Missile","+22 To Vitality","+89-112 To Mana","Cold Resist +35%","Lightning Resist +35%","Poison Resist +35%","+3-8 Magic Absorb","Attacker Takes Damage of 14"]}},{"id":71,"name":"Splendor","runes":["Eth","Lum"],"sockets":2,"itemTypes":["Shield"],"level":37,"patch":"classic","ladder":false,"stats":["+1 To All Skills","+10% Faster Cast Rate","+20% Faster Block Rate","+60-100% Enhanced Defense","+10 To Energy","Regenerate Mana 15%","50% Extra Gold From Monsters","20% Better Chance of Getting Magic Items","+3 To Light Radius"]},{"id":72,"name":"Stealth","runes":["Tal","Eth"],"sockets":2,"itemTypes":["Body Armor"],"level":17,"patch":"classic","ladder":false,"stats":["+25% Faster Run/Walk","+25% Faster Cast Rate","+25% Faster Hit Recovery","+6 To Dexterity","+15 To Maximum Stamina","Regenerate Mana 15%","Poison Resist +30%","Magic Damage Reduced By 3"]},{"id":73,"name":"Steel","runes":["Tir","El"],"sockets":2,"itemTypes":["Sword","Axe","Mace"],"level":13,"patch":"classic","ladder":false,"stats":["+25% Increased Attack Speed","+20% Enhanced Damage","+3 To Minimum Damage","+3 To Maximum Damage","+50 To Attack Rating","50% Chance of Open Wounds","+2 To Mana After Each Kill","+1 To Light Radius"]},{"id":74,"name":"Stone","runes":["Shael","Um","Pul","Lum"],"sockets":4,"itemTypes":["Body Armor"],"level":47,"patch":"classic","ladder":false,"stats":["+60% Faster Hit Recovery","+250-290% Enhanced Defense","+300 Defense vs. Missile","+16 To Strength","+16 To Vitality","+10 To Energy","All Resistances +15","Level 16 Molten Boulder (80 Charges)","Level 16 Clay Golem (16 Charges)"]},{"id":75,"name":"Strength","runes":["Amn","Tir"],"sockets":2,"itemTypes":["Weapon"],"level":25,"patch":"classic","ladder":false,"stats":["+35% Enhanced Damage","7% Life Stolen Per Hit","25% Chance of Crushing Blow","+2 To Mana After Each Kill","+20 To Strength","+10 To Vitality"]},{"id":76,"name":"Treachery","runes":["Shael","Thul","Lem"],"sockets":3,"itemTypes":["Body Armor"],"level":43,"patch":"classic","ladder":false,"stats":["5% Chance To Cast Level 15 Fade When Struck","25% Chance To Cast level 15 Venom On Striking","+2 To Assassin Skills","+45% Increased Attack Speed","+20% Faster Hit Recovery","Cold Resist +30%","50% Extra Gold From Monsters"]},{"id":77,"name":"Venom","runes":["Tal","Dol","Mal"],"sockets":3,"itemTypes":["Weapon"],"level":49,"patch":"classic","ladder":false,"stats":["Ignore Target's Defense","+273 Poison Damage Over 6 Seconds","7% Mana Stolen Per Hit","Prevent Monster Heal","Hit Causes Monster To Flee 25%","Level 13 Poison Nova (11 Charges)","Level 15 Poison Explosion (27 Charges)"]},{"id":78,"name":"Voice of Reason","runes":["Lem","Ko","El","Eld"],"sockets":4,"itemTypes":["Sword","Mace"],"level":43,"patch":"classic","ladder":false,"stats":["15% Chance To Cast Level 13 Frozen Orb On Striking","18% Chance To Cast Level 20 Ice Blast On Striking","+50 To Attack Rating","+220-350% Damage To Demons","+355-375% Damage To Undead","+50 To Attack Rating Against Undead","Adds 100-220 Cold Damage","-24% To Enemy Cold Resistance","Hit Freezes Target +3","75% Extra Gold From Monsters","+1 To Light Radius"]},{"id":79,"name":"Wealth","runes":["Lem","Ko","Tir"],"sockets":3,"itemTypes":["Body Armor"],"level":43,"patch":"classic","ladder":false,"stats":["+10 To Dexterity","+2 To Mana After Each Kill","300% Extra Gold From Monsters","100% Better Chance of Getting Magic Items"]},{"id":80,"name":"White","runes":["Dol","Io"],"sockets":2,"itemTypes":["Wand"],"level":35,"patch":"classic","ladder":false,"stats":["+3 To Poison And Bone Skills","+20% Faster Cast Rate","+2 To Bone Spear","+4 To Skeleton Mastery","+3 To Bone Armor","+2 To Bone Spear","+4 To Skeleton Mastery","Hit Causes Monster To Flee 25%","+10 To Vitality","Replenish Life +13","+150% Damage To Undead","+13 To Mana"]},{"id":81,"name":"Wind","runes":["Sur","El"],"sockets":2,"itemTypes":["Weapon"],"level":61,"patch":"classic","ladder":false,"stats":["10% Chance To Cast Level 9 Tornado On Striking","+20% Faster Run/Walk","+40% Increased Attack Speed","+15% Faster Hit Recovery","+120-160% Enhanced Damage","-50% Target Defense","+50 To Attack Rating","Hit Blinds Target","+1 To Light Radius","Level 13 Twister (127 Charges)"]},{"id":82,"name":"Wrath","runes":["Pul","Lo","Ber","Mal"],"sockets":4,"itemTypes":["Bow"],"level":63,"patch":"classic","ladder":true,"stats":["30% Chance To Cast Level 1 Decrepify On Striking","5% Chance To Cast Level 10 Life Tap On Striking","+375% Damage To Demons","+100 To Attack Rating Against Demons","+250-300% Damage To Undead","Adds 85-120 Magic Damage","Adds 41-240 Lightning Damage","20% Chance of Crushing Blow","Prevent Monster Heal","+10 To Strength","+0.375% Deadly Strike Per Level"]},{"id":83,"name":"Zephyr","runes":["Ort","Eth"],"sockets":2,"itemTypes":["Bow"],"level":21,"patch":"classic","ladder":false,"stats":["+33% Enhanced Damage","+66 To Attack Rating","Adds 1-50 Lightning Damage","-25% Target Defense","+25% Faster Run/Walk","+25% Increased Attack Speed","Level 1 Twister (50 Charges)"]},{"id":84,"name":"Hustle","runes":["Shael","Ko","Eld"],"sockets":3,"itemTypes":["Weapon","Body Armor"],"level":39,"patch":"2.4","ladder":false,"statsByType":{"Weapon":["+30% Increased Attack Speed","+180% Enhanced Damage","+75% Damage To Undead","+50 To Attack Rating Against Undead","+10 To Dexterity","+5% To Maximum Cold Resist","20-25% Faster Run/Walk"],"Body Armor":["Level 1-6 Burst of Speed When Struck","+50-65% Enhanced Defense","+10 To Dexterity","+40% Faster Run/Walk","Replenish Life +8","+5% To Maximum Cold Resist","All Resistances +10-20"]}},{"id":85,"name":"Unbending Will","runes":["Fal","Io","Ith","Eld","El","Hel"],"sockets":6,"itemTypes":["Sword"],"level":41,"patch":"2.4","ladder":false,"stats":["18% Chance to Cast Level 18 Taunt on Striking","+3 To Combat Skills","+20-30% Increased Attack Speed","+300-350% Enhanced Damage","+9 To Maximum Damage","+50 To Attack Rating","+75% Damage To Undead","+50 To Attack Rating Against Undead","8-10% Life Stolen Per Hit","Prevent Monster Heal","+10 To Strength","+10 To Vitality","Damage Reduced By 8","+1 To Light Radius","Requirements -20%"]},{"id":86,"name":"Flickering Flame","runes":["Nef","Pul","Vex"],"sockets":3,"itemTypes":["Helm"],"level":55,"patch":"2.4","ladder":false,"stats":["Level 4-8 Resist Fire Aura When Equipped","+3 To Fire Skills","-10-15% to Enemy Fire Resistance","+30% Enhanced Defense","+30 Defense","+10 To Vitality","Poison Length Reduced by 50%","+5% To Maximum Fire Resist","Replenish Life +16","+0.375 To Mana Per Level"]},{"id":87,"name":"Pattern","runes":["Tal","Ort","Thul"],"sockets":3,"itemTypes":["Katar"],"level":23,"patch":"2.4","ladder":false,"stats":["+30% Faster Block Rate","10% Bonus to Attack Rating","+40-80% Enhanced Damage","+3-6 Fire Damage","+3-14 Cold Damage","+1-50 Lightning Damage","+75% Damage To Undead","+50 Attack Rating Against Undead","+6 To Strength","+6 To Dexterity","All Resistances +15"]},{"id":88,"name":"Plague","runes":["Cham","Shael","Um"],"sockets":3,"itemTypes":["Sword","Katar","Club"],"level":67,"patch":"2.4","ladder":false,"stats":["20% Chance to cast Level 12 Lower Resist When Struck","25% Chance to Cast Level 15 Poison Nova On Striking","Level 13-17 Cleansing Aura When Equipped","+1-2 To All Skills","+20% Increased Attack Speed","+220-320% Enhanced Damage","-23% To Enemy Poison Resistance","0.3% (0-29.7%) Deadly Strike","+25% Chance of Open Wounds","Freezes Target +3"]},{"id":89,"name":"Wisdom","runes":["Pul","Ith","Eld"],"sockets":3,"itemTypes":["Helm"],"level":45,"patch":"2.4","ladder":false,"stats":["+33% Piercing Attack","+15-25% Bonus to Attack Rating","4-8% Mana Stolen Per Hit","+30% Enhanced Defense","+10 To Energy","Increase Maximum Mana 10%","20% Faster Run/Walk"]},{"id":90,"name":"Void","runes":["Zod","Ist","Cham"],"sockets":3,"itemTypes":["Dagger"],"level":67,"patch":"2026","ladder":false,"expansion":"Reign of the Warlock","stats":["+2 To All Skills","+40% Faster Cast Rate","+10-15% To Magic Skill Damage","+1-3 To Abyss","+8-12 To All Attributes","Level 4 Decrepify (35/35 Charges)","Adds 3-14 Cold Damage","Indestructible","30% Better Chance of Getting Magic Items"]},{"id":91,"name":"Authority","runes":["Hel","Shael","Ral"],"sockets":3,"itemTypes":["Body Armor"],"level":29,"patch":"2026","ladder":false,"expansion":"Reign of the Warlock","stats":["2% Chance to cast level 10 Psychic Ward when struck","10% Chance to cast level 15 Miasma Chain on striking","+2 To Warlock Skill Levels","+40-60% Enhanced Damage","Requirements -15%","+20% Faster Hit Recovery","Fire Resist +30%"]},{"id":92,"name":"Coven","runes":["Ist","Ral","Io"],"sockets":3,"itemTypes":["Helm"],"level":33,"patch":"2026","ladder":false,"expansion":"Reign of the Warlock","stats":["+1 To All Skills","+20% Faster Cast Rate","Life After Each Kill +5-10","+30-50% Enhanced Defense","+10 To Vitality","Replenish Life +8"]},{"id":93,"name":"Ritual","runes":["Lo","Gul","Ber"],"sockets":3,"itemTypes":["Dagger"],"level":61,"patch":"2026","ladder":false,"expansion":"Reign of the Warlock","stats":["+40% Increased Attack Speed","+260% Bonus To Attack Rating","+250% Damage To Demons","Slain Monsters Rest In Peace","+1-3 To Blade Warp","+10 To All Attributes","7% Life Stolen Per Hit"]},{"id":94,"name":"Hysteria","runes":["Shael","Ith","Ko"],"sockets":3,"itemTypes":["Body Armor"],"level":35,"patch":"2026","ladder":true,"expansion":"Reign of the Warlock","stats":["+25% Faster Hit Recovery","+30% Faster Run/Walk","+1 To All Skills","+120-160% Enhanced Defense","+15 To Dexterity","+15 To Vitality","All Resistances +20","Magic Damage Reduced By 5"]},{"id":95,"name":"Mania","runes":["Shael","Hel","Eld"],"sockets":3,"itemTypes":["Sword","Axe","Mace"],"level":39,"patch":"2026","ladder":true,"expansion":"Reign of the Warlock","stats":["+35% Increased Attack Speed","+150-200% Enhanced Damage","+100% Damage To Undead","+75 To Attack Rating Against Undead","Level 3 Fanaticism (12 Charges)","Level 1 Burst of Speed (10 Charges)","+5 To Strength"]},{"id":96,"name":"Vigilance","runes":["Io","Gul","Thul"],"sockets":3,"itemTypes":["Shield","Grimoire"],"level":51,"patch":"2026","ladder":false,"expansion":"Reign of the Warlock","stats":["+30% Faster Block Rate","5% Chance To Cast Level 10 Ring of Fire When Struck","+200-240% Enhanced Defense","All Resistances +35-45","+20 To Life","+15 To Mana","Replenish Life +12","Magic Damage Reduced By 5"]}]};

// ─── State ───────────────────────────────────────────
let state = {
  data: null,
  filters: {
    search: '',
    category: 'all',
    socket: 'all',
    patch: 'all',
    ladder: 'all',
    selectedRunes: new Set()
  },
  sort: 'category'
};

// ─── Category map: canonical order + display label ───
const CATEGORY_ORDER = [
  { key: 'Body Armor',  label: 'Body Armor'  },
  { key: 'Helm',        label: 'Helm'        },
  { key: 'Shield',      label: 'Shield'      },
  { key: 'Grimoire',    label: 'Grimoire'    },
  { key: 'Sword',       label: 'Sword'       },
  { key: 'Axe',         label: 'Axe'         },
  { key: 'Mace',        label: 'Mace'        },
  { key: 'Club',        label: 'Club'        },
  { key: 'Hammer',      label: 'Hammer'      },
  { key: 'Scepter',     label: 'Scepter'     },
  { key: 'Polearm',     label: 'Polearm'     },
  { key: 'Spear',       label: 'Spear'       },
  { key: 'Dagger',      label: 'Dagger'      },
  { key: 'Katar',       label: 'Katar'       },
  { key: 'Wand',        label: 'Wand'        },
  { key: 'Staff',       label: 'Staff'       },
  { key: 'Bow',         label: 'Bow'         },
  { key: 'Weapon',      label: 'Any Weapon'  },
];

// ─── Load data ───────────────────────────────────────
function loadData() {
  state.data = RUNEWORD_DATA;
  init();
}

// ─── Helper: get all stat strings regardless of data shape ───
function getAllStats(rw) {
  if (rw.stats) return rw.stats;
  if (rw.statsByType) return Object.values(rw.statsByType).flat();
  return [];
}



// ─── Init ─────────────────────────────────────────────
function init() {
  buildCategoryPills();
  buildRuneGrid();
  wireEvents();
  render();
}

// ─── Build category pills from actual data ────────────
function buildCategoryPills() {
  const allTypes = new Set();
  state.data.runewords.forEach(rw => rw.itemTypes.forEach(t => allTypes.add(t)));

  const container = document.getElementById('categoryFilter');
  const all = document.createElement('button');
  all.className = 'pill active';
  all.dataset.category = 'all';
  all.textContent = 'All Types';
  container.appendChild(all);

  CATEGORY_ORDER.forEach(cat => {
    if (!allTypes.has(cat.key)) return;
    const btn = document.createElement('button');
    btn.className = 'pill';
    btn.dataset.category = cat.key;
    btn.textContent = cat.label;
    container.appendChild(btn);
  });

  container.addEventListener('click', e => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    container.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    state.filters.category = btn.dataset.category;
    render();
  });
}

// ─── Build rune grid ──────────────────────────────────
function buildRuneGrid() {
  const grid = document.getElementById('runeGrid');
  state.data.runes.forEach(rune => {
    const btn = document.createElement('button');
    btn.className = 'rune-btn';
    btn.dataset.rune = rune;
    btn.textContent = rune;
    btn.title = `Filter by ${rune} rune`;
    grid.appendChild(btn);
  });

  grid.addEventListener('click', e => {
    const btn = e.target.closest('.rune-btn');
    if (!btn) return;
    const rune = btn.dataset.rune;
    if (state.filters.selectedRunes.has(rune)) {
      state.filters.selectedRunes.delete(rune);
      btn.classList.remove('selected');
    } else {
      state.filters.selectedRunes.add(rune);
      btn.classList.add('selected');
    }
    render();
  });

  document.getElementById('clearRunesBtn').addEventListener('click', () => {
    state.filters.selectedRunes.clear();
    grid.querySelectorAll('.rune-btn').forEach(b => b.classList.remove('selected'));
    render();
  });
}

// ─── Wire all events ──────────────────────────────────
function wireEvents() {
  // Search
  const searchInput = document.getElementById('searchInput');
  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.filters.search = searchInput.value.toLowerCase().trim();
      render();
    }, 180);
  });

  // Socket filter
  document.getElementById('socketFilter').addEventListener('click', e => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    document.getElementById('socketFilter').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    state.filters.socket = btn.dataset.socket;
    render();
  });

  // Patch filter
  document.getElementById('patchFilter').addEventListener('click', e => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    document.getElementById('patchFilter').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    state.filters.patch = btn.dataset.patch;
    render();
  });

  // Ladder filter
  document.getElementById('ladderFilter').addEventListener('click', e => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    document.getElementById('ladderFilter').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    state.filters.ladder = btn.dataset.ladder;
    render();
  });

  // Sort
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.sort = btn.dataset.sort;
      render();
    });
  });

  // Reset
  document.getElementById('resetBtn').addEventListener('click', resetAll);

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// ─── Filter logic ─────────────────────────────────────
function getFilteredRunewords() {
  const { search, category, socket, patch, ladder, selectedRunes } = state.filters;

  return state.data.runewords.filter(rw => {
    // Category
    if (category !== 'all' && !rw.itemTypes.includes(category)) return false;

    // Sockets
    if (socket !== 'all' && rw.sockets !== parseInt(socket)) return false;

    // Patch
    if (patch !== 'all' && rw.patch !== patch) return false;

    // Ladder
    if (ladder === 'true'  && !rw.ladder) return false;
    if (ladder === 'false' && rw.ladder)  return false;

    // Rune finder:
    // 1 rune selected  → show all runewords that contain it (OR/any)
    // 2+ runes selected → show runewords that contain ALL of them (AND)
    if (selectedRunes.size > 0) {
      const rwRuneSet = new Set(rw.runes);
      if (selectedRunes.size === 1) {
        const hasAny = [...selectedRunes].some(r => rwRuneSet.has(r));
        if (!hasAny) return false;
      } else {
        const hasAll = [...selectedRunes].every(r => rwRuneSet.has(r));
        if (!hasAll) return false;
      }
    }

    // Search
    if (search) {
      const hay = [
        rw.name,
        rw.runes.join(' '),
        rw.itemTypes.join(' '),
        ...getAllStats(rw)
      ].join(' ').toLowerCase();
      if (!hay.includes(search)) return false;
    }

    return true;
  });
}

function countRunes(runes) {
  const map = {};
  runes.forEach(r => map[r] = (map[r] || 0) + 1);
  return map;
}

// ─── Sort logic ───────────────────────────────────────
function sortRunewords(list) {
  const sorted = [...list];
  const categoryIndex = rw => {
    for (let i = 0; i < CATEGORY_ORDER.length; i++) {
      if (rw.itemTypes.includes(CATEGORY_ORDER[i].key)) return i;
    }
    return 99;
  };

  switch (state.sort) {
    case 'level':
      sorted.sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
      break;
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'sockets':
      sorted.sort((a, b) => a.sockets - b.sockets || a.level - b.level);
      break;
    default: // category
      sorted.sort((a, b) => categoryIndex(a) - categoryIndex(b) || a.level - b.level);
  }
  return sorted;
}

// ─── Main render ──────────────────────────────────────
function render() {
  const filtered = getFilteredRunewords();
  const sorted   = sortRunewords(filtered);

  // Stats
  document.getElementById('statTotal').textContent = `${state.data.runewords.length} runewords`;
  document.getElementById('statShown').textContent = `${sorted.length} shown`;

  const grid       = document.getElementById('runewordGrid');
  const emptyState = document.getElementById('emptyState');
  grid.innerHTML = '';

  if (sorted.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  if (state.sort === 'category') {
    renderGrouped(sorted, grid);
  } else {
    sorted.forEach(rw => grid.appendChild(buildCard(rw)));
  }
}

function renderGrouped(list, container) {
  const groups = {};
  const groupOrder = [];

  list.forEach(rw => {
    const primaryCat = getPrimaryCategory(rw);
    if (!groups[primaryCat]) {
      groups[primaryCat] = [];
      groupOrder.push(primaryCat);
    }
    groups[primaryCat].push(rw);
  });

  groupOrder.forEach(cat => {
    // Header
    const hdr = document.createElement('div');
    hdr.className = 'category-header';
    hdr.innerHTML = `<span class="category-header-text">${cat}</span><span class="category-header-line"></span>`;
    container.appendChild(hdr);
    // Cards
    groups[cat].forEach(rw => container.appendChild(buildCard(rw)));
  });
}

function getPrimaryCategory(rw) {
  for (const cat of CATEGORY_ORDER) {
    if (rw.itemTypes.includes(cat.key)) return cat.label;
  }
  return rw.itemTypes[0] || 'Other';
}

// ─── Card builder ─────────────────────────────────────
function buildCard(rw) {
  const card = document.createElement('div');
  card.className = 'rw-card' + (rw.patch === '2026' ? ' is-expansion' : '');
  card.innerHTML = `
    <div class="rw-card-head">
      <div class="rw-card-top">
        <div class="rw-name">${rw.name}</div>
        <div class="rw-level">Req. Lvl ${rw.level}</div>
      </div>
      <div class="rw-badges">
        ${rw.itemTypes.map(t => `<span class="badge badge-type">${t}</span>`).join('')}
        ${rw.ladder ? `<span class="badge badge-ladder">Ladder</span>` : ''}
        ${rw.patch === '2026' ? `<span class="badge badge-expansion">Reign of the Warlock</span>` : ''}
        ${rw.patch === '2.4' ? `<span class="badge badge-patch">Patch 2.4</span>` : ''}
      </div>
    </div>
    <div class="rw-runes">${formatRunes(rw.runes)}</div>
    <div class="rw-stats-preview">
      ${getAllStats(rw).slice(0, 3).map(s => `<div class="rw-stat-line">${s}</div>`).join('')}
      ${getAllStats(rw).length > 3 ? `<div class="rw-stat-more">+${getAllStats(rw).length - 3} more…</div>` : ''}
    </div>
  `;
  card.addEventListener('click', () => openModal(rw));
  return card;
}

function formatRunes(runes) {
  return runes.map((r, i) =>
    `<span class="rune-tag">${r}</span>${i < runes.length - 1 ? '<span class="rune-arrow">›</span>' : ''}`
  ).join('');
}

// ─── Stats renderer (handles statsByType or flat stats) ───
function renderModalStats(rw) {
  if (rw.statsByType) {
    return Object.entries(rw.statsByType).map(([type, stats]) => `
      <div class="modal-type-group">
        <div class="modal-type-group-label">${type}</div>
        <ul class="modal-stats">
          ${stats.map(s => `<li class="modal-stat-item">${s}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }
  return `<ul class="modal-stats">
    ${getAllStats(rw).map(s => `<li class="modal-stat-item">${s}</li>`).join('')}
  </ul>`;
}

// ─── Modal ────────────────────────────────────────────
function openModal(rw) {
  const nameClass = rw.patch === '2026' ? 'modal-expansion-name' : '';
  const html = `
    <div class="modal-inner">
      <div class="modal-name ${nameClass}">${rw.name}</div>
      <div class="modal-meta">
        <span class="badge badge-type" style="font-size:0.82rem;padding:4px 12px;">Req. Level ${rw.level}</span>
        <span class="badge badge-type" style="font-size:0.82rem;padding:4px 12px;">${rw.sockets} Socket${rw.sockets > 1 ? 's' : ''}</span>
        ${rw.ladder ? `<span class="badge badge-ladder" style="font-size:0.82rem;padding:4px 12px;">Ladder Only</span>` : ''}
        ${rw.patch === '2026' ? `<span class="badge badge-expansion" style="font-size:0.82rem;padding:4px 12px;">Reign of the Warlock</span>` : ''}
        ${rw.patch === '2.4' ? `<span class="badge badge-patch" style="font-size:0.82rem;padding:4px 12px;">Patch 2.4</span>` : ''}
      </div>

      <div class="modal-section-label">Rune Order</div>
      <div class="modal-runes">
        ${rw.runes.map((r, i) =>
          `<span class="modal-rune-tag">${r}</span>${i < rw.runes.length - 1 ? '<span class="modal-rune-arrow">›</span>' : ''}`
        ).join('')}
      </div>

      <div class="modal-section-label">Item Types</div>
      <div class="modal-types">
        ${rw.itemTypes.map(t => `<span class="modal-type-tag">${t}</span>`).join('')}
      </div>

      <div class="modal-section-label">Properties</div>
      ${renderModalStats(rw)}

      ${rw.ladder ? `<div class="modal-ladder-note">⚠ This runeword can only be created on Ladder-mode characters during an active season.</div>` : ''}
      ${rw.patch === '2026' ? `<div class="modal-expansion-note">⚔ New in Diablo II: Resurrected — <em>Reign of the Warlock</em> (2026 Expansion)</div>` : ''}
    </div>
  `;
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ─── Reset ────────────────────────────────────────────
function resetAll() {
  state.filters = {
    search: '', category: 'all', socket: 'all',
    patch: 'all', ladder: 'all', selectedRunes: new Set()
  };
  state.sort = 'category';

  document.getElementById('searchInput').value = '';

  document.querySelectorAll('#categoryFilter .pill').forEach((p, i) => p.classList.toggle('active', i === 0));
  document.querySelectorAll('#socketFilter .pill').forEach((p, i) => p.classList.toggle('active', i === 0));
  document.querySelectorAll('#patchFilter .pill').forEach((p, i)  => p.classList.toggle('active', i === 0));
  document.querySelectorAll('#ladderFilter .pill').forEach((p, i) => p.classList.toggle('active', i === 0));
  document.querySelectorAll('.sort-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  document.querySelectorAll('.rune-btn').forEach(b => b.classList.remove('selected'));

  render();
}

// expose for inline onclick in empty state
window.resetAll = resetAll;

// ─── Kick off ─────────────────────────────────────────
loadData();
