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

// Input
  // Two arrays of five integers 2 to 14
// Output
  // String "Player ${x} wins", where x is the player with the better hand1

function poker(hand1, hand2) {
  // Get each hand's rank
  const rank1 = rankHand(hand1);
  const rank2 = rankHand(hand2);
  // If they're the same
  if (rank1[0] === rank2[0]) {
    // Return the winner
    if (rank1[1] > rank2[1]) return "Player 1 wins";
    else if (rank1[1] < rank2[1]) return "Player 2 wins";
    else return "Draw";
  }
  // Else return winner
  else if (rank1[0] > rank2[0]) return "Player 1 wins";
  else return "Player 2 wins";
}

// Takes in a hand and returns an array [rank, highCard]
const rankHand = hand => {
  const store = {};
  // Iterate through the hand
    // Increment count for that card
  hand.forEach(card => store[card] ? store[card] += 1 : store[card] = 1);
  // Reduce stored cards to high card
  const highCard = Math.max(...Object.keys(store));
  // Reduce stored cards to first highest and second highest X of a kind
  const pairs = Object.values(store).reduce((pairs, card) => {
    if (card > pairs.highest) [pairs.highest, pairs.second] = [card, pairs.highest];
    else if (card > pairs.second) pairs.second = card;
    return pairs;
  }, {highest: 0, second: 0});
  // Calculate rank
  const rank = 3*pairs.highest + pairs.second;
  return[rank,highCard]
}

// test
// console.log(poker([3,5,5,5,2], [4,6,7,8,8]), "Player 1 wins");
// console.log(poker([8, 8, 8, 4, 5], [4, 4, 4, 2, 14]), "Player 2 wins");

module.exports = poker;
