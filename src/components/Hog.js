import React, { Component } from 'react'


class Hog extends Component{
    constructor(props){
        super(props)
        this.state = {
            details: false
        }
    }
    toggleInfo = () =>{
        this.setState({
            details: !this.state.details
        })
        // console.log(this.state.details)
    }

    render(){

        let fileName = this.props.hog.name
        .toLowerCase()
        .replace(/ /g,"_")
        let cleanName = require("../hog-imgs/" + fileName + ".jpg")

        // console.log(cleanName)
        return(
            <div onClick={this.toggleInfo}>
                <h2>{this.props.hog.name}</h2>
                <img src={cleanName}></img>
                { this.state.details ? 
                <div>
                    <p>Specialty: {this.props.hog.specialty}</p>
                    <p>Greased: {this.props.hog.greased ? "true" : "false"}</p>
                    <p>Extra Bullshit: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </p>
                    <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
                </div>
                : null

                }
                
                
            </div>
        )
    }
}

export default Hog