import React, {Component} from 'react' ;
import users from "../../Constants/index"


class UserDetail extends React.Component{

    render (){
        const {match}= this.props;

        const myuser = users.find((user)=>( user.id == match.params.id))
        return (
            <div>
            userdeatail component
                {JSON.stringify(myuser)}
            </div>

        )
    }
}

export default UserDetail