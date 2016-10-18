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

    $('#combat').append(`<h4>${orc.enemyName} attacks ${player1.playerName} with a ${orc.weapon.name} and scores ${this.totalDamage} hit points.`);


    console.log("orcAttack", this.totalDamage);
  };

  // enemiesGauntlet.Combatants.Orc.prototype = new enemiesGauntlet.Combatants.Monster();
  enemiesGauntlet.Combatants.Orc.prototype = new enemiesGauntlet.Combatants.Orc();

  return enemiesGauntlet;
} (Gauntlet || {}));
