import React, { Component } from "react";
import animalCard from "./components/animalCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import animals from "./animals.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    animals
  };

  moveAnimal = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const animals = this.state.animals.filter(animal => animal.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ animals });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Animals Gone Wild</Title>
        {this.state.animals.map(animal => (
          < animalCard
            moveAnimal={this.moveAnimal}
            id={animal.id}
            key={animal.id}
            image={animal.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
