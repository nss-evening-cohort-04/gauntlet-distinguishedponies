"use strict";

/*
  Test code to generate a human player and an orc player
 */

/*
  Test code to generate a spell
 */
// let spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());
let $classSelected;
let $weaponSelected;
const enemyNames = ["Sarah the Twilight Sparkler", "Blair the Derpy Hooves", "Tommy the Applejack", "Justin the Sweetie Belle"];
const appendPlayerName = [" Princess Celestia", " the AppleJack", " the Spike", " the Apple Bloom"];
console.log("Gauntlet", Gauntlet);
// randomNum between 0 - 3;
let randomNum = Math.floor(Math.random() * 3) + 0;

let player1 = new Gauntlet.Combatants.Player();

var orc = new Gauntlet.Combatants.Orc();
orc.enemyName = enemyNames[randomNum];
orc.generateClass();
// randomly assigned health between 50 - 100 + healthBonus
orc.health = Math.floor((Math.random() * 50) + 50 + orc.class.healthBonus);
orc.setWeapon(new Gauntlet.Weapons.BroadSword());
console.log("orc", orc);

$(document).ready(function() {

  // eventListeners
  // eventListener for classSelected
  // get the class selected
  $('.class_selected').click((event) => {
    $classSelected = $(event.target).attr("value");
    // iterate over every function in an object to determine which class was selected
    $.each(Gauntlet.GuildHall, (event, index) => {
      if(event === $classSelected) {
        // index applies the current function
        player1.setClass(new index());
        // update HP based on $classSelected
        player1.health = player1.health + player1.class.healthBonus;
        console.log(player1);
      }
    });
  });

  // get the weapon selected
  $('.weapon_selected').click((event) =>{
    $weaponSelected = $(event.target).attr("value");
    // iterate over every function in an object to determine which class was selected
    $.each(Gauntlet.Weapons,(event, index) => {
      if(event === $weaponSelected) {
        // index applies the current function
        player1.setWeapon(new index());
        populateBattlePage();
      }
    });
  });

$('#attack_button').click((event) =>{
  event.preventDefault();

  console.log('test');
});

$('#hide_modal').click((event)=>{
  console.log(event);
  $('#win__modal').modal("hide");
  $('#lose__modal').modal("hide");

});
  // battle page logic
  function populateBattlePage() {
    $('#playerHp').html(`<h3>${player1.playerName}${appendPlayerName[randomNum]}</h3>
                      <h4>You Have ${player1.health} HP</h4>
                      <h4>Your weapon is a ${player1.weapon.name}
                      <h4> Your Class is ${player1.class.name}`);
    $('#enemyHp').html(`<h3>${orc.enemyName}</h3>
                      <h4>You Have ${orc.health} HP</h4>
                      <h4>Your weapon is a ${orc.weapon.name}
                      <h4> Your Class is ${orc.class.name}`);

  }
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
    var moveAlong = false;
    var playerName = $("#player-name");

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        // get players name
        player1.playerName = playerName.val();
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