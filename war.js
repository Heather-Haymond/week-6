class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
// Compares the rank of two cards
  compareTo(otherCard) {
    if (this.rank > otherCard.rank) {
      return 1;
    } else if (this.rank < otherCard.rank) {
      return -1;
    } else {
      return 0;
    }
  }
}

class Deck {
  constructor() {
    this.cards = [];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
     // Creates a new deck of cards
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
  } 

 // Shuffles the deck of cards 
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

   // Deals a specified number of cards to a player
  deal(numCards, player) {
    for (let i = 0; i < numCards; i++) {
      player.hand.push(this.cards.pop());
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }
 // Removes a card from the player's hand (signified by .pop)
  playCard() {
    return this.hand.pop();
  }
}

// Creates a new deck, shuffles it, creates two players, deals 26 cards to each player,
// and plays the game by repeatedly having each player play a card, comparing the cards,
// and updating the scores. At the end, it displays the scores and declares the winner.

const deck = new Deck();
deck.shuffle();

const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

deck.deal(26, player1);
deck.deal(26, player2);

while (player1.hand.length > 0 && player2.hand.length > 0) {
  const card1 = player1.playCard();
  const card2 = player2.playCard();
  const comparison = card1.compareTo(card2);
  if (comparison === 1) {
    player1.score++;
  } else if (comparison === -1) {
    player2.score++;
  }
}
// Displays the score and displays winner
console.log(`${player1.name}'s score: ${player1.score}`);
console.log(`${player2.name}'s score: ${player2.score}`);
if (player1.score > player2.score) {
  console.log(`${player1.name} wins!`);
} else if (player1.score < player2.score) {
  console.log(`${player2.name} wins!`);
} else {
  console.log("It's a tie!");
}


