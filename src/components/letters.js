import React, { Component } from 'react';
import Letter from './letter';


class Letters extends Component {
    render() {
        let letters=this.props.letterStatus
        return (<div>
           <div>Avilable letters</div>
           {Object.keys(letters).map(l=>letters[l]?<Letter letter={l} className='clicked'/>:<Letter letter={l} className='notclicked'/>)}
        </div>)
    }
}
export default Letters