"use strict";

var Gauntlet = (function(enemiesGauntlet) {

enemiesGauntlet.Enemies = {};


  enemiesGauntlet.Combatants.Orc = function(name) {
    this.enemyName = name || "unknown monster";
    this.weapon = null;
    this.health = this.health + 20;
    this.species = "Orc";
    this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

    this.generateClass = function() {
      // Get a random index from the allowed classes array
      var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

      // Get the string at the index
      var randomClass = this.allowedClasses[random];

      // Composes the corresponding player class into the player object
      this.class = new enemiesGauntlet.GuildHall[randomClass]();
      return this.class;
    };
  };

   enemiesGauntlet.Combatants.Orc.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  };

  enemiesGauntlet.Combatants.Orc.prototype.enemyAttack = function(target){
    this.totalDamage = Math.floor(Math.random() * 10) + 0 + this.weapon.damage;
    target.health -= this.totalDamage;
      if(target.health <= 0){
        $('#lose__modal').modal("show");

    }
    $('#combat').prepend(`<span id="player__name__color">${orc.enemyName}</span> attacks <span id="player__name__color">${player1.playerName}${appendPlayerName[randomNum]}</span><br/>
                           with a ${orc.weapon.name} and scores <span id="enemy__name__color">${this.totalDamage}</span> hit points.<br/>`);

  };

  enemiesGauntlet.Combatants.Orc.prototype = new enemiesGauntlet.Combatants.Orc();

  return enemiesGauntlet;
} (Gauntlet || {}));
