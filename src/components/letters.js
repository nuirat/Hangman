import React, { Component } from 'react';


class Letter extends Component {
    render() {
        let letters=['a','b','c','d','e','f']
        return (<div>
           <div>Avilable letters</div>
           {letters.map(l=><span>{l}</span>)}
        </div>)
    }
}
export default Letter