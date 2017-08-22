/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  hand1.sort();
  hand2.sort();
  const hand1Count = {};
  const hand2Count = {};

  function countCards(hand, obj) {
    hand.forEach((card, i) => {
      if (obj[card]) obj[card] += 1;
      else obj[card] = 1;
    });
  }

  countCards(hand1, hand1Count);
  countCards(hand2, hand2Count);

  Object.keys(hand1Count).forEach((key, i) => {
    
  });
  console.log(hand1Count, hand2Count);
}


console.log(poker([3,5,5,5,2], [4,6,7,8,8]))

module.exports = poker;
