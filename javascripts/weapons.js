"use strict";

var Gauntlet = (function(weaponsGauntlet) {

weaponsGauntlet.Weapons = {};

  weaponsGauntlet.Weapons.Barehands = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
      return this.name;
    };
  };

  weaponsGauntlet.Weapons.Dagger = function() {
    this.name = "dagger";
    this.damage = 4;
    this.hands = 1;
  };
  weaponsGauntlet.Weapons.Dagger.prototype = new weaponsGauntlet.Weapons.Barehands();

  weaponsGauntlet.Weapons.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 14;
    this.hands = 2;
  };
  weaponsGauntlet.Weapons.BroadSword.prototype = new weaponsGauntlet.Weapons.Barehands();

  weaponsGauntlet.Weapons.WarAxe = function() {
    this.name = "war axe";
    this.damage = 18;
    this.hands = 2;
  };
  weaponsGauntlet.Weapons.WarAxe.prototype = new weaponsGauntlet.Weapons.Barehands();

return weaponsGauntlet;
} (Gauntlet || {}));
