import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import Filter from './Filter'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs,
      filterGreased: false
    }
  }
  // sortWeight= () => {
  //   console.log("we're sorting")
  //   let sortedHogs = this.state.hogs.sort((a,b) => {
  //     let weight1 = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  //     let weight2 = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  //     return weight1 - weight2
  //   })
  //   this.setState({
  //     hogs: sortedHogs
  //   })
  // }
  toggleFilterGreased = () => {
    console.log("greasingthings")
    this.setState({
      filterGreased: !this.state.filterGreased
    })
  }

  sortHogs= (charles) => {
    console.log("we're sorting")
    let sortedHogs = this.state.hogs.sort((a,b) => {
      let weight1 = a[charles]
      let weight2 = b[charles]
      if(weight1 < weight2)
      {
        return -1
      }else{
        return 1
      }
    })
    this.setState({
      hogs: sortedHogs
    })
  }
  beans = (nathan) => {
     console.log("Ryan is Beans", nathan.target.value)
     this.sortHogs(nathan.target.value)

  }
  render() {
    
    return (
      <div className="App">
          < Nav />
          < Filter beans={this.beans} handleClick={this.toggleFilterGreased}/>
          < HogList hogs={this.state.hogs} filterGreased={this.state.filterGreased}/>
      </div>
    )
  }
}

export default App;
