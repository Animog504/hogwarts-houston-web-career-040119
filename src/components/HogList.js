import React, { Component } from 'react'
import Hog from './Hog'

class HogList extends Component{
    constructor(){
        super()
        this.state = {
           
        }
    }
    render(){
        return(
            <div>
                {this.props.hogs.map(hog => {
                    return (!this.props.filterGreased || hog.greased ?
                         <Hog hog={hog}  /> 
                         :null)
                })}
            </div>
        )
    }
}

export default HogList