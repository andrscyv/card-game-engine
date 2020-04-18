module.exports = {
    isNextPlayer : (playerTurn, currentPlayerTurn, numPlayers, direction) => {
    return direction === 'r' ? ( currentPlayerTurn + 1 - playerTurn ) % numPlayers ===  0 : ( currentPlayerTurn - 1 - playerTurn ) % numPlayers ===  0
    },
    getNextPlayer : (state) => {
    let { players } = state
    let currentPlayer = getCurrentPlayer( state )
    let numPlayers = Object.keys(players).length
    let nextPlayerId = Object.keys(players).find( pId => {
        return isNextPlayer(players[pId].turn, currentPlayer.turn, numPlayers, state.direction)
    } )
    return players[nextPlayerId]

    },
    getCurrentPlayer : (state) => state.players[Object.keys(players).find( pId => players[pId].isMyTurn )]
}
