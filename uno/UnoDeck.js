const { isNextPlayer, getNextPlayer, getCurrentPlayer } = require('./util')

class UnoDeck{
    constructor(){
        this.deck = []
        this.specialCards = ['+2', 'S', 'R', 'C', '+4']
        this.discarded = []
        let colors = [0, 1, 2, 3]
        let baseCards  = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "S", "R"] ;
        let specialCards = ["C","+4"]

        //One zero card per color
        colors.forEach( c => {
            // this.deck.push({
            //     color:c,
            //     val:'0'
            // })
            this.deck.push(buildUnoCard('0',c))
        })
        //Two of baseCards per color
        baseCards.forEach( baseCard =>{
            for( let i = 0; i < 4 ; i++ ){
                // let card = {
                //     color:i,
                //     val: baseCard
                // }
                // this.deck.push(card)
                // this.deck.push({...card})
                this.deck.push(buildUnoCard(baseCard,i))
                this.deck.push(buildUnoCard(baseCard,i))
            }
        })

        //Four wild cars (C) and wild draw four (+4)
        for(let i = 0; i < 4; i++){
            // this.deck.push({
            //     val:'C'
            // })
            // this.deck.push({
            //     val:'+4'
            // })
            this.deck.push(buildUnoCard('C'))
            this.deck.push(buildUnoCard('+4'))
        }
        //console.log(this.deck)
        shuffle(this.deck)
    }
    get topOfDiscard(){
        return this.discard[0]
    }
    discard(card){
        this.discarded.push(card)
    }
    top(num_cards = 1){
        return this.deck.splice(0, num_cards)
    }
    drawHand(){
        return this.top(7)
    }
    draw(){
        return this.top()
    }
}
let buildUnoCard = function(val, color = -1){
    let effect = null
    switch(val){
        case '+2':
            effect = function(state, params){
                let {players} = state
                let nextPlayer = getNextPlayer(state)
                nextPlayer.hand.append(state.deck.top(2))
                

                return state
            }
            break;
        case '+4':
            effect = function(state){
                return state
            }
            break;
        case 'S':
            effect = function(state){
                return state
            }
            break;
        case 'R':
            effect = function(state){
                return state
            }
            break;
        case 'C':
            effect = function(state){
                return state
            }
            break;
        default:
            effect = () =>{}
    }
    return {
        val,
        color,
        effect
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  module.exports = UnoDeck