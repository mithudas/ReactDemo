import React, {Component} from 'react' ;
//import {connect} from  'react-redux'


import Header from "../Header"
import Body from "../Body"
import Footer from "../Footer"
import ES6Exercise from "../ES6Exercise"



class App extends Component {


    render (){
        ES6Exercise() ; // returned a stateless component just for testing
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>

        )

    }
}
//
//const mapStateToProps=(state)=>{
//    return {
//        users: state.users,
//        company:state.company
//    }
//}

//export default connect(mapStateToProps) (App)


export default App
