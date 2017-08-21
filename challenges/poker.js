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

  function fourOfAKind(arr) {
    if (arr[0] === arr [3] || arr[1] === arr[4]) return 1
    return false
  }
  
  function fullHouse(arr) {
    if ((arr[0] === arr[2] && arr[3] === arr[4]) || (arr[0] === arr[1] && arr[2] === arr[4])) return 2
    return false
  }
  function straight(arr) {
    for(let i = 0; i < arr.length-1; i++) {
      if ((arr[i] + 1) !== arr[i+1]) return false
    }
    return 3
  }

  function threeOfAKind(arr) {
    if (arr[0] === arr[2] || arr[1] === arr[3] || arr[2] === arr[4]) return 4
    return false
  }

  function twoPair(arr) {
    if((arr[0] === arr[1] && arr[2] === arr[3]) || (arr[0] === arr[1] && arr[3] === arr[4]) || (arr[1] === arr[2] && arr[3] === arr[4])) return 5
    return false
  }

  function onePair(arr) {
    if(arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[3] || arr[3] === arr[4]) return 6
    return false
  }

  const p1 = fourOfAKind(hand1) || fullHouse(hand1) || straight(hand1) || threeOfAKind(hand1) || twoPair(hand1) || onePair(hand1) || 7
  const p2 = fourOfAKind(hand2) || fullHouse(hand2) || straight(hand2) || threeOfAKind(hand2) || twoPair(hand2) || onePair(hand2) || 7

  if (p1 > p2) return 'Player 2 wins'
  if (p1 < p2) return 'Player 1 wins'
 

  if (hand1[4] > hand2[4]) return 'Player 1 Wins'
  if (hand1[4] < hand2[4]) return 'Player 2 Wins'
    
  return 'Draw'
 
}

module.exports = poker;
