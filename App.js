import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayer from "./components/AddPlayer";

class App extends React.Component {
  state = {
    players: [
      {
        name: "Jigmed",
        score: 0,
        id: "1",
      },
      {
        name: "Togmid",
        score: 0,
        id: "2",
      },
      {
        name: "Saraa",
        score: 0,
        id: "3",
      },
      {
        name: "Naraa",
        score: 0,
        id: "4",
      },
    ],
  };
  lastPlayerID = this.state.players.length - 1;
  playersId = +this.state.players[this.lastPlayerID].id;

  changeScore = (delta, index) => {
    this.setState((prevState) => {
      const updatedPlayers = [...prevState.players];
      const updatedPlayer = { ...updatedPlayers[index] };
      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;
      return {
        players: updatedPlayers,
      };
    });
  };

  removePlayer = (paraID) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id != paraID),
      };
    });
  };
  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: (this.playersId += 1),
        },
      ],
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length}
          players={this.state.players}
        />
        {this.state.players.map((e, index) => (
          <Player
            name={e.name}
            score={e.score}
            key={e.id}
            id={e.id}
            removePlayer={this.removePlayer}
            index={index}
            changeScore={this.changeScore}
          />
        ))}
        <AddPlayer
          addPlayer={this.handleAddPlayer}
          stateChange={this.stateChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
