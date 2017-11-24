import React, {Component} from 'react' ;

import Calculator from "../Calculator"

export default class Home extends React.Component{

    render (){

        return (
            <div>
                <h1>You can calculate here</h1>
                <Calculator/>
            </div>

        )
    }
}