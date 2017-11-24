import React, {Component} from 'react' ;
import  MathButton from "../MathButton"
import Button from "../Button"

class Calculator extends Component{
    constructor(){
        super();
        this.state={
            first:'',
            second:'',
            result:''
        }

    }

    handleInput(event){
        const newState= this.state[`${event.target.name}`] = event.target.value
        this.setState(Object.assign({},this.state,newState))
        console.log(this.state)
    }


    addition(){
      this.setState({result:(parseInt(this.state.first) + parseInt(this.state.second))});
        setTimeout(function(){
            console.log("result", this.state)

        },2000)
    }

    subtraction(){
      this.setState({result:(this.state.first - this.state.second)});
        console.log("result", this.state)
    }

    multiply(){
      this.setState({result:(this.state.first * this.state.second)});
        console.log("result", this.state.result)
    }

    division(){
      this.setState({result:(this.state.first / this.state.second)});
        console.log("result", this.state.result)
    }

    clearFields(){
        this.setState({ first:'', second : '', result : '' } );
        console.log(this.state)
    }

    render (){
        return (
            <div>
                <div>
                First:: <input name="first" value={this.state.first} onChange={this.handleInput.bind(this)} />
                Second: <input name="second" value={this.state.second} onChange={this.handleInput.bind(this)}/>
                </div>

                <div>
                <MathButton handleCalculation={this.addition.bind(this)} btnText={'Add'}/>
                <MathButton handleCalculation={this.subtraction.bind(this)} btnText={'Subtract'}/>
                <MathButton handleCalculation={this.multiply.bind(this)} btnText={'Multiply'}/>
                <MathButton handleCalculation={this.division.bind(this)} btnText={'Divide'}/>
                </div>
                <div>Result:::::{this.state.result}</div>

                <Button functionRef={this.clearFields.bind(this)} btnText={"Clear Fields"}/>


            </div>

        )
    }
}


export default Calculator