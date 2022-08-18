import React, { Component } from 'react';


class EndGame extends Component {

    render() {
        return this.props.isWinner? alert('Congratulations'):alert(`you are lost the word is ${this.props.word}`)
          
        
    }
}
export default EndGame