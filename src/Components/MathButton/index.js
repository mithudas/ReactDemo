import React, {Component} from 'react' ;

class MathButton extends React.Component{

    render (){
        return (
            <span>
                <button onClick={this.props.handleCalculation}>{this.props.btnText}</button>
            </span>

        )
    }
}

export default MathButton