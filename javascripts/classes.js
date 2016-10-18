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
      - Scootaloo
      - Fluttershy
      - Luckette
      - Spike
 */
classesGauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
classesGauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


classesGauntlet.GuildHall.Scootaloo = function() {
  this.name = "Scootaloo";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
classesGauntlet.GuildHall.Scootaloo.prototype = new classesGauntlet.GuildHall.Fighter();


classesGauntlet.GuildHall.Fluttershy = function() {
  this.name = "Fluttershy";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
classesGauntlet.GuildHall.Fluttershy.prototype = new classesGauntlet.GuildHall.Fighter();


classesGauntlet.GuildHall.Luckette = function() {
  this.name = "Luckette";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
classesGauntlet.GuildHall.Luckette.prototype = new classesGauntlet.GuildHall.Fighter();


classesGauntlet.GuildHall.Spike = function() {
  this.name = "Spike";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
classesGauntlet.GuildHall.Spike.prototype = new classesGauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Applejack
      - Conujurer
      - Rarity
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


classesGauntlet.GuildHall.Applejack = function() {
  this.name = "Applejack";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
classesGauntlet.GuildHall.Applejack.prototype = new classesGauntlet.GuildHall.Mage();


classesGauntlet.GuildHall.Snips = function() {
  this.name = "Snips";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
classesGauntlet.GuildHall.Snips.prototype = new classesGauntlet.GuildHall.Mage();


classesGauntlet.GuildHall.Rarity = function() {
  this.name = "Rarity";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
classesGauntlet.GuildHall.Rarity.prototype = new classesGauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Snails
      - Gilda
      - Dash
 */

classesGauntlet.GuildHall.Stealth = function() {
  this.healthBonus = 30;
  this.strengthBonus = 5;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
classesGauntlet.GuildHall.Stealth.prototype = new Gauntlet.GuildHall.PlayerClass();


classesGauntlet.GuildHall.Snails = function() {
  this.name = "Snails";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
classesGauntlet.GuildHall.Snails.prototype = new classesGauntlet.GuildHall.Stealth();


classesGauntlet.GuildHall.Gilda = function() {
  this.name = "Gilda";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
classesGauntlet.GuildHall.Gilda.prototype = new classesGauntlet.GuildHall.Stealth();


classesGauntlet.GuildHall.Dash = function() {
  this.name = "Dash";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 5;
};
classesGauntlet.GuildHall.Dash.prototype = new classesGauntlet.GuildHall.Stealth();



return classesGauntlet;
} (Gauntlet || {}));
