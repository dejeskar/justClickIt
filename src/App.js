import React, { Component } from "react";
import animalCard from "./components/animalCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import animals from "./animals.json";
import "./App.css";

class App extends Component {
 
  state = {
    animals
  };

  moveAnimal = id => {
  
    const animals = this.state.animals.filter(animal => animal.id !== id);
 
    this.setState({ animals });
  };

 
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
