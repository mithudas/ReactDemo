import React, {Component} from 'react' ;
import Button from "../Button"
import Store from "../ReduxExample/ReduxApp"

class ReduxExample extends React.Component{
    constructor(){
        super();
        Store.subscribe(()=>{
            const {count} = Store.getState();
            this.setState({count:count})
        })
    }

    state={count:0};

    handleIncrement(){
        Store.dispatch({type: 'INCREMENT', by: 5})
    }


    handleDecrement(){
        Store.dispatch({type: 'DECREMENT', by: 2})
    }

    render (){
        return (
            <div>
                <h1>Redux Store Used Initially</h1>
                <p>Count: {this.state.count}</p>
                <span> <Button btnText={'Increment By 5'} functionRef={this.handleIncrement.bind(this)}></Button> </span>
                 <span><Button btnText={'Decrement By 2'} functionRef={this.handleDecrement.bind(this)}></Button> </span>
            </div>

        )
    }
}

export default ReduxExample;