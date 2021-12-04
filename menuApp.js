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
          this.deleteDecks();
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

  menuCardOptions(deckInfo) {
    return prompt(`
    Enter selection:
    0) Back
    1) Add a card
    2) Delete a card

    ${deckInfo}
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
    let index = prompt(
      `Select a deck index to view more information.
${deckListString} 
    `
    );
    if (index > -1 && index < this.decks.length) {
      this.selectedDeck = this.decks[index];
    }

    if (index > -1 && index < this.decks.length) {
      this.selectedDeck = this.decks[index];
      let description = "Press 0 to return." + "\n";
      "Deck Name: " + this.selectedDeck.deckName + "\n";

      for (let i = 0; i < this.selectedDeck.deckList.length; i++) {
        description +=
          i +
          1 +
          ") " +
          "Name: " +
          this.selectedDeck.deckList[i].cardName +
          "\n " +
          "Card Type: " +
          this.selectedDeck.deckList[i].cardType +
          "\n" +
          "Pitch Color: " +
          this.selectedDeck.deckList[i].cardPitchColor +
          "\n" +
          "Class: " +
          this.selectedDeck.deckList[i].cardClass +
          "\n" +
          "Quantity: " +
          this.selectedDeck.deckList[i].cardQuantity +
          "\n";
      }
      ("Press 0 to return");

      let selection = this.menuCardOptions(description);
      switch (selection) {
        case "1":
          this.addNewCard();
          break;
        case "2":
          this.deleteCard();
      }
    }
  }

  addNewCard() {
    let cardName = prompt("Enter the card name.");
    let cardType = prompt("Enter card type.");
    let cardPitchColor = prompt("Enter card pitch color.");
    let cardClass = prompt("Enter card class type.");
    let cardQuantity = prompt("Enter card quantity.");
    this.selectedDeck.deckList.push(
      new Cards(cardName, cardType, cardPitchColor, cardClass, cardQuantity)
    );
  }

  deleteCard() {
    let cardListString = "";
    for (let i = 0; i < this.selectedDeck.deckList.length; i++) {
      cardListString +=
        i + ") " + this.selectedDeck.deckList[i].cardName + "\n";
    }

    let index = prompt(`Enter index of the card you want to delete.
    
      ${cardListString}
    `);

    if (index > -1 && index < this.selectedDeck.deckList.length) {
      this.selectedDeck.deckList.splice(index, 1);
    }
  }

  deleteDecks() {
    let deckListString = "";
    for (let i = 0; i < this.decks.length; i++) {
      deckListString += i + ") " + this.decks[i].deckName + "\n";
    }

    let index = prompt(`Enter the index of the deck you want to delete.

    ${deckListString}
    `);
    if (index > -1 && index < this.decks.length) {
      this.decks.splice(index, 1);
    }
  }

  displayAllDecks() {
    let deckListString = "";
    for (let i = 0; i < this.decks.length; i++) {
      deckListString += i + 1 + ") " + this.decks[i].deckName + "\n";
    }
    let index = prompt(`Avaliable Decks:
    
${deckListString} 

Press 0 to return.
`);
  }
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
