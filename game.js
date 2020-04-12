const game = {
    deck: [],
    userCount:0,
    init: function(){
        this.deck = [1, 2, 3, 4, 5]
        console.log(this.deck)
    },
    initUserState: function(id){
        console.log('InitUserstate', id)
        this.userCount++
        return this.deck
    },
    ready: function(){
        console.log('ready')
        return this.userCount > 1
    },
    play: function( move ){
        console.log('play', move)
        this.deck.pop()
        return this.deck
    },
    ended: function(){
        console.log('ended')
        return false
    },
    winner: function(){
        console.log('winner')
        return null
    }
}

module.exports = game