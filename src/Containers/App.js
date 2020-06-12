import React from 'react';
import CardList from '../Components/CardList';
// import {robots} from './robot';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField:''
        }
    }

    onSearchChange = (event) =>{
        //console.log(event.target.value);
        this.setState({searchField: event.target.value})
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users})
        );
        
    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());   
        });
        console.log(filteredRobots);
        if(!robots.length){
            return (
                <div style={{textAlign:'center', margin: '0 auto', marginTop: '5rem'}}>
                    <h1>Loading</h1>
                </div>
            );
        }
        return (
            <div className="tc"> 
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;
