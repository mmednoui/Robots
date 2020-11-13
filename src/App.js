import React, {Component} from 'react'
import Cardlist from './Cardlist'
import SearchBox from './SearchBox'
import {robots} from './Robots'
class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: robots,
            searchfield: "",
        }
    }
    
    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value})
       
    }

    render() {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Cardlist robots={filteredrobots}/>
    </div>
        )
    }

}
export default App;