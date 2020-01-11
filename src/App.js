// create your App component here
import React, { Component } from 'react'

export class App extends Component {
    constructor(){
        super()
        this.state = {
            people: []
        }
    }
    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`)
        .then(response => response.json())
        .then(json => {this.setState({
            peopleInSpace: json.people
          })
        })
    }
    render() {
        return (
            <div>
                {this.state.people.map(people => people.name)}
            </div>
        )
    }
}

export default App
