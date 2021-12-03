class Cards {
  constructor(cardName, cardType, cardPitchColor, cardClass, cardQuantity) {
    this.cardName = cardName;
    this.cardType = cardType;
    this.cardPitchColor = cardPitchColor;
    this.cardClass = cardClass;
    this.cardQuantity = cardQuantity;
  }

  cardInformation() {
    console.log(`${this.cardName}: 
        Card Type: ${this.cardType}
        Card Type: ${this.cardType}
        Pitch Color: ${this.cardPitchColor}
        Class Type: ${this.cardClass}
        Card Quantity: ${this.cardQuantity}`);

    return `${this.cardName}: 
        Card Type: ${this.cardType}
        Card Type: ${this.cardType}
        Pitch Color: ${this.cardPitchColor}
        Class Type: ${this.cardClass}
        Card Quantity: ${this.cardQuantity}`;
  }
}

class Deck {
  constructor(deckName) {
    this.deckName = deckName;
    this.deckList = [];
  }

  addCard(newCard) {
    if (newCard instanceof Cards) {
      this.deckList.push(newCard);
    } else {
      throw new Error(
        `You can only add a card from the instance of Card. ${newCard} is not valid.`
      );
    }
  }
}

class Menu {
  constructor() {
    this.decks = [];
    this.selectedDeck = null;
  }

  start() {
    let selection = this.menuDeckOptions();

    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createNewDeck();
          break;
        case "2":
          this.viewDeckInformation();
          break;
        case "3":
          deleteDecks();
          break;
        case "4":
          this.displayAllDecks();
          break;
        default:
          selection = 0;
      }
      selection = this.menuDeckOptions();
    }
    alert("Closing");
  }

  menuDeckOptions() {
    return prompt(`
    Enter selection:
    0) Exit
    1) Create new deck
    2) View Deck Information
    3) Delete a Deck
    4) Display all decks    
    `);
  }

  menuCardOptions() {
    return prompt(`
    Enter selection:
    0) Back
    1) Create card
    2) Delete card
    `);
  }

  createNewDeck() {
    let deckName = prompt("Enter the new deck name.");
    this.decks.push(new Deck(deckName));
  }

  viewDeckInformation() {
    let deckListString = "";
    for (let i = 0; i < this.decks.length; i++) {
      deckListString += i + ") " + this.decks[i].deckName + "\n";
    }
    let index = prompt(`Select a deck index to view more information.
${deckListString}
    `);
    if (index > -1 && index < this.decks.length) {
      this.selectedDeck = this.decks[index];
    }

    // let selection =
  }

  displayAllDecks() {
    let deckListString = "";
    for (let i = 0; i < this.decks.length; i++) {
      deckListString += i + ") " + this.decks[i].deckName + "\n";
    }
    alert(`Avaliable Decks:
${deckListString} 
`);
  }

  deleteDecks() {}
}

// let outForBlood = new Cards(
//   "Out for Blood",
//   "Attack Reaction",
//   "Red",
//   "Warrior",
//   3
// );

// let overPower = new Cards("Overpower", "Attack Reaction", "Red", "Warrior", 3);

// let testDoriDeck = new Deck("Dorinthea Ironsong Classic Constructed");
// testDoriDeck.addCard(outForBlood);
// testDoriDeck.addCard(overPower);

// console.log(testDoriDeck);

let menu = new Menu();
menu.start();
//
