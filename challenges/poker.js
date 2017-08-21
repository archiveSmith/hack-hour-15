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
    let sortedHand1 = hand1.sort((a,b)=>{return a-b})

    let sortedHand2 = hand2.sort((a,b)=>{return a-b})

    let resultHand1 = findHand(sortedHand1)

    let resultHand2 = findHand(sortedHand2)

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}


const findHand = (hand) => {
    let result;
    let temp = hand[0];
    let container = []
    let counterCard = 1
    let counterSwitch = 0
    let i;

    for(i=1; i<hand.length; i++) {
        if (temp === hand[i]) counterCard ++
        else {
            temp === hand[i];
            container.push(counterCard)
            counterCard = 1
            counterSwitch ++
        }
    }

    let determinePairs = container.filter( (el) => el !== 2)

    if(container[0] === 4 || 1 && counterSwitch === 2) result = '4ofakind'

    if(container[0] === 3 || 2 && counterSwitch === 2) result = 'fullhouse'      

    if(counterSwitch === 4) result = 'straight'

    if(ontainer.includes(3) && counterSwitch === 3) result = '3ofakind'
        
    if(determinePairs.length === 1 && counterSwitch === 3) result = '2ofakind'   

    if(determinePairs.length === 3  && counterSwitch === 3) result = '1ofakind' 

    if(counterSwitch === 4 && ) result = 'highcard'

    return result
}


// * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
module.exports = poker;
