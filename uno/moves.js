let moves = {
    drawFirstDiscard: ({players, direction, top, deck}) => {
        let top = deck.draw()
        deck.discard(top)
    },
    playCard: function(state, {card, cardEffectParams = null}){
        let {players, direction, top, deck} = state
        if( isPlayable(card, top) ){
            deck.discard(card)
            card.effect(state, cardEffectParams)
        }else
            throw new Error()
    }
}

let isPlayable = (card, top) => {
    let alwaysPlayable = ['C', '+4']
    return top.color === card.color || top.val === card.val || alwaysPlayable.includes(card.val)
}
module.exports = moves 