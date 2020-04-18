const UnoDeck = require('./uno/UnoDeck')
const moves = require('./uno/moves')
class UnoGame {
    constructor( numPlayers = 4 ){
        this.deck = new UnoDeck()
        this.players = {}
        this.direction = 'r'
        this.numPlayers = numPlayers
        this.moves = moves
    }
    get state(){
        return {
            players: this.players,
            direction: this.direction,
            top: this.deck.topOfDiscard,
            deck:this.deck
        }
    }
    registerPlayer(id){
        console.log('registerPlayer', id)
        this.players[id] = {
            turn : Object.keys(this.players).length
        }
    }
    ready(){
        console.log('ready')
        return Object.entries(this.players).length === this.numPlayers
    }
    initialState(){
        Object.keys(this.players).forEach( playerId => {
            let player = this.players[playerId]
            player.hand =  this.deck.drawHand()
            player.isMyTurn = player.turn === 0
        })
        this.moves.setFirstDiscard(this.state)
        return this.state
    }
    play( move, args ){
        console.log('play', move)
        moves[move](this.state, args)
        return this.state

    }
    ended(){
        console.log('ended')
        return false
    }
    winner(){
        console.log('winner')
        return null
    }

}

module.exports = UnoGame