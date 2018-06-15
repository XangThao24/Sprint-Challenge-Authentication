import React from "react";
import axios from "axios";
import Joke from "./Joke";

class JokesList extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }

  componentDidMount () {
    const token = localStorage.getItem('jwt');

    const requestOptions = {
        headers: {
            Authorization: token,
        },
    };
    axios
        .get('http://localhost:5000/api/jokes', requestOptions)
        .then(response => {
            this.setState({ jokes: response.data });
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
  }

  render() {
    return (
      <div>
        <h2>JokesList</h2>
        
        {this.state.jokes.map(joke => {
               return (
                 <div key={joke.id}>
                    <h3>{joke.setup}</h3>
                    <p >{joke.punchline}</p>
                  </div>
               )
            })}
        
      </div>
    )
  }
}

export default JokesList;