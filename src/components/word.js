import React, { Component } from 'react';


class Word extends Component {

    render() {
        let word=['_ ','_ ','_ ','_']
        return  (<div>{word.map(w=><span>{w}</span>)}<div>your ideal mood when coding.</div></div>)
        
    }
}
export default Word