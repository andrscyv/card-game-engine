const io = require('socket.io')(80)
const UnoGame = require('./game')

const game = new UnoGame()

io.on('connection', function( socket ){
    console.log(socket.id)
    game.registerPlayer(socket.id)
    io.emit('msg', {msg: 'Connected to server'})
    //socket.emit('initialState',game.initUserState(socket.id))

    if( game.ready() )
        io.emit('ready')
    
    socket.on('move', move => {
       let newState =  game.play(move)
       if( game.ended() )
            io.emit('ended', game.winner())
        else
            io.emit('newState', newState)
    })
})