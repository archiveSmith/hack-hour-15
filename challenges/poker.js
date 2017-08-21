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
    let twos = [];
    let threes = [];
    let fullHouses = [];
    let highCards = [];
    let oneObj = {};
    let twoObj = {};
    let playOne;
    let playTwo;

    hand1.forEach((card)=>{
        oneObj[card] ? oneObj[card] += 1 : oneObj[card] = 1;
    });
    console.log(oneObj);
    hand2.forEach((card)=>{
        twoObj[card] ? twoObj[card] += 1 : twoObj[card] = 1;
    });
    console.log(twoObj);
    // find twos and threes and highcards
    for (cards in oneObj){
        oneObj[cards] === 2 ? (twos[0] ? twos[0] += 1 : twos[0] = 1) : twos[0] = 0;
        oneObj[cards] === 3 ? (threes[0] = true, playOne = "threeOfKind") : threes[0] = false;
    }
    ((twos[0]===1) &&threes[0]) ? fullHouses[0] = true : fullHouses[0] = false;
    twos[0] === 2 ? playOne = "twoPair": (twos[0]===1 ? playOne = "onePair" : null );
    // straight
    let handOneArr = Object.keys(oneObj).sort((a,b)=>{return a+b})
    console.log(handOneArr);
    // handOneArr.forEach((card, counter = 1)=>{
    //     (card-counter) === 
    // })

console.log(playOne)
     
//     switch(expression) {
//     case n:
//         code block
//         break;
//     case n:
//         code block
//         break;
//     default:
//         code block
// }

}

module.exports = poker;
console.log(poker([3,5,5,5,2], [4,6,7,8,8]))