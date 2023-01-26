class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

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
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

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

  playCard() {
    return this.hand.pop();
  }
}

//This code creates a new deck, shuffles it, creates two players, deals 26 cards to each player, and plays the game by repeatedly having each player play a card, comparing the cards, and updating the scores. At the end, it displays the scores and declares the winner.

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

console.log(`${player1.name}'s score: ${player1.score}`);
console.log(`${player2.name}'s score: ${player2.score}`);
if (player1.score > player2.score) {
  console.log(`${player1.name} wins!`);
} else if (player1.score < player2.score) {
  console.log(`${player2.name} wins!`);
} else {
  console.log("It's a tie!");
}


//And for unit test, you can use Mocha and Chai to test the "compareTo" method of the Card class, like this:


const {expect} = require('chai');

mocha.describe('Card', () => {
  it('compareTo() should compare the rank of two cards', () => {
    const card1 = new Card('K', 'hearts');
    const card2 = new Card('Q', 'diamonds');
    const card3 = new Card('K', 'spades');

    expect(card1.compareTo(card2)).to.equal(1);
    expect(card2.compareTo(card1)).to.equal(-1);
    expect(card1.compareTo(card3)).to.equal(0);
  });
});
