import React, { Component } from 'react';
import Letter from './letter';


class Letters extends Component {
    render() {
        let letters=this.props.letterStatus
        return (<div>
           <div>Avilable letters</div>
           {Object.keys(letters).map(l=>letters[l]?<Letter letter={l} className='clicked' selectLetter={this.props.selectLetter}/>:<Letter letter={l} className='notclicked' selectLetter={this.props.selectLetter}/>)}
        </div>)
    }
}
export default Letters