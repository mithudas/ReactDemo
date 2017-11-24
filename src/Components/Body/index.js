import React, {Component} from 'react' ;
import ContactUs from '../ContactUs'
import Home from '../Home'
import AboutUs from '../AboutUS'
import User from '../User'
import ReduxExample from  '../ReduxExample/index'

import {BrowserRouter as Router, Link, Route} from  'react-router-dom';

export default class Body extends Component {

    getTime(){
    return +new Date()
}
    render (){
        let timestamp = +new Date()
        return (
            <div>
                <Router>
                    <div>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/aboutus">About us</Link></div>
                        <div><Link to="/contactus">Contact us</Link></div>
                        <div><Link to="/user">Users</Link></div>
                        <div><Link to="/reduxExample">Redux Example</Link></div>

                        <div>
                            <Route extact path="/" component={Home}/>
                            <Route path="/aboutus" component={AboutUs}/>
                            <Route path="/contactus" component={ContactUs}/>
                            <Route path="/user" component={User}/>
                            <Route path='/reduxExample' component={ReduxExample}/>

                        </div>

                    </div>
                    </Router>
            </div>

    )

    }
}


