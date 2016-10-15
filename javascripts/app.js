"use strict";
/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());
var $classSelected;
var $weaponSelected;

console.log("Gauntlet", Gauntlet);

var warrior = new Gauntlet.Combatants.Player();
warrior.playerName = "Justin";
warrior.setWeapon(new Gauntlet.Weapons.WarAxe());

// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());
console.log("warrior", warrior);

$(document).ready(function() {

  // eventListeners
  // eventListener for classSelected
  // get the class selected
  $('.class_selected').click((event) =>{
    $classSelected = event.target.lastChild;
    console.log("$classSelected", $classSelected);
  });

  // get the weapon selected
  $('.weapon_selected').click((event) =>{
    $weaponSelected = event.target.lastChild;
    console.log("$weaponSelected", $weaponSelected);
  });

  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    console.log("nextCard", nextCard);
    var moveAlong = false;
    var playerName = $("#player-name");

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        // get players name
        playerName.val();
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});