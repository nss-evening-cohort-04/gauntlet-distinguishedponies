"use strict";

let $classSelected;
let $weaponSelected;
const enemyNames = ["Sarah the Twilight Sparkler", "Blair the Derpy Hooves", "Tommy the Applejack", "Justin the Sweetie Belle"];
const appendPlayerName = [" Princess Celestia", " the AppleJack", " the Spike", " the Apple Bloom"];
// randomNum between 0 - 3;
let randomNum = Math.floor(Math.random() * 3) + 0;

let player1 = new Gauntlet.Combatants.Player();
var orc;


function createOpponent() {
  orc = new Gauntlet.Combatants.Orc();
  orc.enemyName = enemyNames[randomNum];
  orc.generateClass();
  // randomly assigned health between 50 - 100 + healthBonus
  orc.health = Math.floor((Math.random() * 50) + 50 + orc.class.healthBonus);
  orc.setWeapon(new Gauntlet.Weapons.BroadSword());
}

createOpponent();

$(document).ready(function() {

  // eventListeners
  // eventListener for classSelected
  // get the class selected
  $('.class_selected').click((event) => {
    event.preventDefault();
    $classSelected = $(event.target).attr("value");
    // iterate over every function in an object to determine which class was selected
    $.each(Gauntlet.GuildHall, (event, index) => {
      if(event === $classSelected) {
        // index applies the current function
        player1.setClass(new index());
        // update HP based on $classSelected
        player1.health = player1.health + player1.class.healthBonus;
      }
    });
  });

  // get the weapon selected
  $('.weapon_selected').click((event) =>{
    event.preventDefault();
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

// Attack button battle function

$('#attack_button').click((event) =>{
  event.preventDefault();

  player1.player1Attack(orc);
  if(player1.health >= 0) {
    // This prevents the enemy from attacking if he reaches 0 first
    orc.enemyAttack(player1);
  }
  populateBattlePage();
});

$('#hide_modal').click((event)=>{
  $('#win__modal').modal("hide");
});

  // battle page logic
  function populateBattlePage() {
    $('#playerHp').html(`<div id="stat__name"><h1>${player1.playerName}${appendPlayerName[randomNum]}</h1></div>
                      <div class="stat__font" id="stat__health"><span>You Have <strong>${player1.health}</strong> HP</span></div>
                      <div class="stat__font" id="stat__weapon"><span>Your weapon is a <strong>${player1.weapon.name}</strong></span></div>
                      <div class="stat__font" id="stat__class"><span>Your Class is <strong>${player1.class.name}</strong></span></div>`);
    $('#enemyHp').html(`<div id="stat__name"><h1>${orc.enemyName}</h1></div>
                      <div class="stat__font" id="stat__health"><span>You Have <strong>${orc.health}</strong> HP</span></div>
                      <div class="stat__font" id="stat__weapon"><span>Your weapon is a <strong>${orc.weapon.name}</strong></span></div>
                      <div class="stat__font" id="stat__class"><span>Your Class is <strong>${orc.class.name}</strong></span></div>`);
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
    $("#win__modal").modal("hide");
    $("#lose__modal").modal("hide");
    // reset player1
    player1 = new Gauntlet.Combatants.Player();
    player1.playerName = $("#player-name").val();
    createOpponent();
    // Clear div
    $('#combat').html("");
    $("." + previousCard).show();
  });
});