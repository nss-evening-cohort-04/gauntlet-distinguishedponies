"use strict";

/*
  TODO: Modularize this code with IIFE
 */

var Gauntlet = (function(classesGauntlet) {

classesGauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
classesGauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  };
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
classesGauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
classesGauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


classesGauntlet.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
classesGauntlet.GuildHall.Warrior.prototype = new classesGauntlet.GuildHall.Fighter();


classesGauntlet.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
classesGauntlet.GuildHall.Valkyrie.prototype = new classesGauntlet.GuildHall.Fighter();


classesGauntlet.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
classesGauntlet.GuildHall.Berserker.prototype = new classesGauntlet.GuildHall.Fighter();


classesGauntlet.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
classesGauntlet.GuildHall.Monk.prototype = new classesGauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
classesGauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
classesGauntlet.GuildHall.Mage.prototype = new classesGauntlet.GuildHall.PlayerClass();


classesGauntlet.GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
classesGauntlet.GuildHall.Shaman.prototype = new classesGauntlet.GuildHall.Mage();


classesGauntlet.GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
classesGauntlet.GuildHall.Wizard.prototype = new classesGauntlet.GuildHall.Mage();


classesGauntlet.GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
classesGauntlet.GuildHall.Conjurer.prototype = new classesGauntlet.GuildHall.Mage();


classesGauntlet.GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
classesGauntlet.GuildHall.Sorcerer.prototype = new classesGauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */


return classesGauntlet;
} (Gauntlet || {}));
