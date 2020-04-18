const UnoGame = require('./game')
let game = null
beforeEach(() =>{
    game = new UnoGame()
})

test('deals 5 players ', ()=>{
    let numPlayers = 5

    for( let i = 0; i < numPlayers ; i++ ){
        game.registerPlayer(i)
    }
    let initState = game.initialState()
    //console.log(initState)
    Object.entries(initState.players).forEach( ([k,v]) => {
        //console.log(v.hand)
        expect(v.hand.length).toBe(7)
    })

})

test('is ready after 5 players registered', () => {
    game = new UnoGame(5)
    for( let i = 0; i < 5 ; i++ ){
        game.registerPlayer(i)
        if( i < 4 )
            expect(game.ready()).toBe(false) 
    }
    expect(game.ready()).toBe(true)

})