//for unit test implements Mocha and Chai


const expect = chai.expect

describe('Card', () => {
  it('compareTo() should compare the rank of two cards', () => {
    const card1 = new Card(13, 'hearts');
    const card2 = new Card(12, 'diamonds');
    const card3 = new Card(13, 'spades');

    expect(card1.compareTo(card2)).to.equal(1);
    expect(card2.compareTo(card1)).to.equal(-1);
    expect(card1.compareTo(card3)).to.equal(0);
  });
});