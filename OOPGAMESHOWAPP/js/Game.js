/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Off the record"),
      new Phrase("A sight for sore eyes"),
      new Phrase("Cool as a cucumber"),
      new Phrase("Busy as a bee"),
      new Phrase("Two peas in a pod"),
    ];
    this.activePhrase = null;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomNumber];
    return randomPhrase;
  }
  /**
   * Begins game by selecting a random phrase and display it to user
   * hides start screen
   */
  startGame() {
    const startScreen = document.querySelector("div #overlay");
    startScreen.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /**
   * Checks for winning move
   * if the length of letter in phrase is same as the lenght of showed letter
   */
  checkForWin() {
    const allLi = document.querySelectorAll(".letter");
    const allLiShow = document.querySelectorAll(".show");
    if (allLi.length === allLiShow.length) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   * chosing only live heart
   * change first live live to lost heart
   * game is lost
   */
  removeLife() {
    const hearts = document.querySelectorAll('[src = "images/liveHeart.png"]');
    this.missed += 1;
    for (let i = 0; i < hearts.length; i++) {
      hearts[0].setAttribute("src", "images/lostHeart.png");
    }
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }
  /**
   * Displays game over message
   * if game is won
   * add class win
   * create win information
   * display winning screen
   * if game is lose
   * add class lose
   * create lose information
   * display losing screen
   */
  gameOver(gameWon) {
    const startScrn = document.querySelector("div #overlay");
    const startScrnHone = document.querySelector("#overlay h1");
    if (gameWon === true) {
      startScrn.setAttribute("class", "win");
      startScrnHone.textContent = "WOW! You Win!";
      startScrn.style.display = "";
    } else if (gameWon === false) {
      startScrn.setAttribute("class", "lose");
      startScrnHone.textContent = "SORRY! Better Luck Next Time!";
      startScrn.style.display = "";
    }
  }
  /**
   * Handles onscreen keyboard button clicks.
   * when the keyboard button is clicked disable it
   * run checkLetter() on the button
   * if letter wasn't correctly guessed
   * remove Life
   * if letter was correctly guessed
   * show correctly guessed letter in the phrase
   * check if the game was won
   * if it was won
   * win the game
   */
  handleInteraction(button) {
    if (button.disabled === false) {
      button.disabled = true;
      const ifLetter = this.activePhrase.checkLetter(button.textContent);
      if (!ifLetter) {
        button.className = "wrong";
        this.removeLife();
      }
      if (ifLetter) {
        button.className = "chosen";
        this.activePhrase.showMatchedLetter(button.textContent);
        const win = this.checkForWin();
        if (win) {
          this.gameOver(true);
        }
      }
    }
  }
}
