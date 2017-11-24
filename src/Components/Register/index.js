import React, {Component} from 'react' ;
import PropTypes from 'prop-types';


import Button from "../Button"

class RegisterForm extends React.Component{

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            message:null
        };
    }

    handleSubmit(e){
        e.preventDefault();
            let message=''
            if(!this.state.username || !this.state.password || !this.state.confirmPassword){
                message='All fields are mandatory'
            }else if (this.state.password!=this.state.confirmPassword){
                message='Confirm Password do not matched'
            }else {
                message='You are resgistered!!!'
            }
        this.setState({message:message})
    }

    handleInput(e){
        let state = {}
        state[e.target.name] = e.target.value
        this.setState(state)
        console.log(this.state)

    }

    render (){
        return (
            <div>
                <form action="">
                    <p>{this.state.message}</p>
                    <div>User Name: <input type="text" name="username" value={this.state.username} onChange ={this.handleInput.bind(this)}></input></div>
                    <div>Password: <input type="text" name="password" value={this.state.password} onChange={this.handleInput.bind(this)}/></div>
                    <div>Confirm Password: <input type="text" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInput.bind(this)}/></div>

                    <Button functionRef={this.handleSubmit.bind(this)} btnText={'Submit'} ></Button>

                </form>
            </div>

        )
    }
}

RegisterForm.propTypes={
    username: PropTypes.string.isRequired,
    password:PropTypes.number.isRequired,
    confirmPassword:PropTypes.number.isRequired
}


export default RegisterForm