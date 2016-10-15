"use strict";

/*
  Test code to generate a human player and an orc player
 */

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());
var $classSelected;
var $weaponSelected;

console.log("Gauntlet", Gauntlet);

var player1 = new Gauntlet.Combatants.Player();
// player1.setWeapon(new Gauntlet.Weapons.Dagger());

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
    // I will try to find a better way to do this..... JL
    // console.log("event.target", event.target);
    $weaponSelected = $(event.target).attr("value");
    if($weaponSelected === "Dagger") {
      player1.setWeapon(new Gauntlet.Weapons.Dagger());
      console.log("player1", player1);
    } else if ($weaponSelected === "Axe") {
      player1.setWeapon(new Gauntlet.Weapons.Dagger());
      console.log("player1", player1);
    } else {
      player1.setWeapon(new Gauntlet.Weapons.Dagger());
      console.log("player1", player1);
    }
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
        player1.playerName = playerName.val();
        console.log("player1", player1);
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