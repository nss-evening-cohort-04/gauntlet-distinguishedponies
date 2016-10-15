"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */

var Gauntlet = (function(spellsGauntlet) {

  spellsGauntlet.SpellBook = {};



  /*
    Base spell function that defines name, damage, damage type
   */
  spellsGauntlet.SpellBook.Spell = function() {
    this.name = "";
    this.damage = 0;

    this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
    this.type = "";

    this.toString = function() {
      return this.name + " of " + this.type + " for " + this.damage + " damage!";
    };
  };

  /*
    An elemental sphere that can be cast by a magical class
   */
  spellsGauntlet.SpellBook.Sphere = function() {
    this.name = "sphere";
    this.damage = Math.floor(Math.random() * 10 + 10);

    var random = Math.round(Math.random() * (this.damageTypes.length - 1));
    this.type = this.damageTypes[random];
  };
  spellsGauntlet.SpellBook.Sphere.prototype = new spellsGauntlet.SpellBook.Spell();

  /*
A conjuration spell that is used to summon the undead battle horse Arvak
*/
spellsGauntlet.SpellBook.SummonArvakSpell = function() {
  this.name = "summon";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
spellsGauntlet.SpellBook.SummonArvakSpell.prototype = new spellsGauntlet.SpellBook.Spell();

/*
A magical elixir that gives razor shooting pegsus wings to the chosen class
*/
spellsGauntlet.SpellBook.PegasusSpell = function() {
  this.name = "pegasus";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
spellsGauntlet.SpellBook.PegasusSpell.prototype = new spellsGauntlet.SpellBook.Spell();

/*
A magical hat that produces frosty the snowman breath to freeze enemies
*/
spellsGauntlet.SpellBook.FrostySpell = function() {
  this.name = "frosty";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
spellsGauntlet.SpellBook.FrostySpell.prototype = new spellsGauntlet.SpellBook.Spell();



return spellsGauntlet;
} (Gauntlet || {}));


