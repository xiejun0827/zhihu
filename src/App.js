import React from 'react';
import Router from "./router/public"
import One from "./router/index"

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="App">
                <Router ooo={One}/>
            </div>
        );
    }
}

export default App;
