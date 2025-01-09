let cards = [{
    suit: 'spades',
    types: ['king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 'ace']
},
{
    suit: 'clubs',
    types: ['king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 'ace']
},
{
    suit: 'diamonds',
    types: ['king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 'ace']
},
{
    suit: 'hearts',
    types: ['king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 'ace']
}]

function getRandomCard() {
    const randomSuitIndex = Math.floor(Math.random() * cards.length)
    const randomSuit = cards[randomSuitIndex]

    const randomTypeIndex = Math.floor(Math.random() * randomSuit.types.length)
    const randomType = randomSuit.types[randomTypeIndex];
    
    return {Suit: randomSuit.suit, Type: randomType};
}

function handOfFour() {
    hand = []
    for (let i = 0; i < 4; i++) {
    hand.push(getRandomCard());
    }
    return hand
}
console.log(handOfFour())