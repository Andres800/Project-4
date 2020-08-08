/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/***
 Global variables
 */
let game;
const resetButton = document.querySelector("#overlay button");
const Keybrd = document.querySelector("#qwerty");
const KeybrdButtons = document.querySelectorAll("#qwerty button");
let existingPhrase = document.querySelectorAll("ul li");

/*** 
 Event Handlers
 ***/

/*** 
 Event Handler For start and reset button
 It sets new game and start it.
 Also when used as reset button, this button removes existing old phrase, resets Keybrd and resets lifes.

 if phrase exists in DOM remove existing phrase
 for every letter in phrase
 remove it from parent
 for every button
 set disabled to false
 give a button class of key
 for every heart
 make heart live
 sets new game
 starts new game
 ***/
resetButton.addEventListener("click", (e) => {
  if (existingPhrase) {
    const existingPhraseParent = document.querySelector("#phrase ul");
    existingPhrase = document.querySelectorAll("ul li");
    existingPhrase.forEach((letter) => {
      existingPhraseParent.removeChild(letter);
    });
    KeybrdButtons.forEach((button) => {
      button.disabled = false;
      button.className = "key";
    });
    const hearts = document.querySelectorAll(".tries img");
    hearts.forEach((heart) => {
      heart.setAttribute("src", "images/liveHeart.png");
    });
  }
  e.preventDefault();
  game = new Game();
  game.startGame();
});

/*** 
 Event Handler For game Keybrd handling game interactions

 if clickd element is a button
 start game interactions
 ***/
Keybrd.addEventListener("click", (e) => {
  const clickd = e.target;
  if (clickd.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});

/*** 
 Event Handler For real Keybrd handling game interactions

 for every DOM Keybrd button
 find which DOM button matches real Keybrd button
 handle game interactions on DOM button
 ***/
document.addEventListener("keydown", (e) => {
  const clickd = e.key;
  KeybrdButtons.forEach((button) => {
    if (clickd === button.textContent) {
      game.handleInteraction(button);
    }
  });
});
