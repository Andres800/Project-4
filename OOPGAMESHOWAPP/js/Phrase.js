/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   * select parent div
   * splits phrase into an array of characters
   * loops trough an array of letters and append them to the page
   * checks if there isn't a letter
   * leave blank space
   * hide letter
   */
  addPhraseToDisplay() {
    const pDiv = document.querySelector("#phrase");
    const ul = document.querySelector("ul");
    const splitPhrase = this.phrase.split("");
    console.log(splitPhrase);

    splitPhrase.forEach((letter) => {
      const li = document.createElement("li");
      li.textContent = letter;
      if (!/^[a-z]$/.test(letter)) {
        li.className = "space";
      } else {
        li.className = `hide letter ${letter}`;
      }
      ul.appendChild(li);
    });
    console.log(pDiv);
  }

  /**
   * Checks if passed letter is in phrase
   * if the letter is include in phrase
   */
  checkLetter(letter) {
    const phrase = this.phrase;
    if (phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * for every letter in phrase
   * if param letter is matching the letter in phrase
   * show letter in phrase
   */
  showMatchedLetter(letter) {
    const phrase = document.querySelectorAll(".letter");
    phrase.forEach((char) => {
      if (char.textContent === letter) {
        char.classList.add("show");
        char.classList.remove("hide");
      }
    });
  }
}
