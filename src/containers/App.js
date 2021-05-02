import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({ robots: users });
        })
    }

    onSearchName = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        console.log('render')
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (
            <React.Fragment>
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchName} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            </React.Fragment>
        );
    }
}

export default App;