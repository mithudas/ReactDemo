import React, {Component} from 'react' ;
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'

import users from "../../Constants/index"
import UserDetail from "../UserDetail"
import FakeAuth from "../../Service/loginService"


class  User extends React.Component{

    componentDidMount(){
        console.log(this.props)
        if(!FakeAuth.isLoggedin){
           const {history}  = this.props;
            history.push("/")
        }
    }
    render (){
        const {match}= this.props;

        return (
            <div>
                <h1>user is here</h1>
                <ul>

                    {
                        users.map((user, index)=>(

                        <li key={`user_key_${index}`}> <Link to={`${match.path}/${user.id}`}>{user.title}</Link></li>

                        ))
                    }
                </ul>
                <div>
                    <Route path={`${match.path}/:id`}  component={UserDetail}></Route>

                </div>
            </div>

        )
    }
}

export default withRouter(User);