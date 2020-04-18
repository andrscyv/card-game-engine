const UnoDeck = require('./UnoDeck')
let deck = null

beforeEach(()=>{
    deck = new UnoDeck()
})

test('correct uno deck', () => {
    //console.log(deck.deck)
    let cards = deck.top(108)
    let properties = ['val', 'color', 'effect']
    expect(cards.length).toBe(108)
    properties.forEach( p => {
        expect(cards[0]).toHaveProperty(p)
    })
}) 

test('takes 3 cards from top',()=>{
    expect(deck.top(3).length).toBe(3)
})

test('discard a card', ()=>{
    deck.discard({
        val:'0',
        color:0,
        effect:()=>{}
    })
})

test('draw a hand of seven', ()=>{
    let hand = deck.drawHand()
    expect(hand.length).toBe(7)
})