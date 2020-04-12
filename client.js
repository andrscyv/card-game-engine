const socket = require('socket.io-client')('http://localhost');
socket.on('msg', function({msg}){
    console.log(msg)
});

const player = {
    move: function(move){
        socket.emit('move', move)
    }
}

socket.on('initialState', state =>{
    player.state = state
    console.log('state', state)
})

socket.on('ready', ()=>{
    console.log('ready')
})

socket.on('newState', state =>{
    console.log('newState', state)
})

socket.on('ended', winner => {
    console.log('ended', winner)
})

module.exports = player