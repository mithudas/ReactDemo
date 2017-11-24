import React, {Component} from 'react' ;
import {BrowserRouter as Router, Link, Route} from  'react-router-dom';

import FakeAuth from "../../Service/loginService"
import Button from "../Button"
import  RegisterForm from "../Register/index"



export default class Header extends Component {


    constructor(){
        super();
        this.state={
            isLoggedin : FakeAuth.isLoggedin
        }
    }

    handleLogin() {
        FakeAuth.login();
        this.setState({isLoggedin :FakeAuth.isLoggedin})

    }

    handleLogout(){
        FakeAuth.logout()
        this.setState({isLoggedin :FakeAuth.isLoggedin})

    }



    render() {
        let button=null
        if(this.state.isLoggedin){
            button = <div> <p>Hi Mithu </p>
                <Button functionRef={this.handleLogout.bind(this)} btnText={'Logout'}></Button></div>

        }else {
            button =
                <div>
                    <Button functionRef={this.handleLogin.bind(this)} btnText={'Login'}></Button>
                    <Router>
                    <div><Link to="/register"><button>Register</button></Link>
                        <Route path='/register' component={RegisterForm}/>
                    </div>
                    </Router>
                </div>
        }

        return (

            <div>
                <span>This is React Demo</span>
                <span>  {button}</span>

            </div>
        )

    }
};


