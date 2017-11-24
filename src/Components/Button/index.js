import React, {Component} from 'react' ;

class Button extends React.Component{

    render (){
        return (
            <div>
                <button onClick={this.props.functionRef} >{this.props.btnText}</button>
            </div>

        )
    }
}

export default Button