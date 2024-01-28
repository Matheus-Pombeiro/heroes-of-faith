import React, { Component } from "react";
import TableHead from "./components/TableHead.js";
import TableFoot from "./components/TableFoot.js";
import TableBody from "./components/TableBody.js";

class App extends Component {
  state = {
    heroes: []
  };
  componentDidMount() {
    fetch("/api/heroes.json")
    .then(response => response.json())
    .then(heroes => this.setState({ heroes }))
    .catch(function(error) {
      console.log("Request error");
    })
    .finally(function() {
      console.log("Always return");
    });
  };
  handleRemoveRow = (id) => {
    const heroes = this.state.heroes.filter(h => h.id !== id);
    this.setState({ heroes });
  };
  handleSortCrescent = (name) => {
    const heroes = this.state.heroes.sort((a, b) => a.name < b.name ? -1 : 0);
    this.setState({ heroes });
  };
  handleSortDecrescent = (name) => {
    const heroes = this.state.heroes.sort((a, b) => a.name < b.name ? -1 : 0);
    heroes.reverse();
    this.setState({ heroes });
  };
  render() {
    return (
    <div className="App">
      <table className="tabela">
        <TableHead 
          sortCrescent = { this.handleSortCrescent }
          sortDecrescent = { this.handleSortDecrescent }
        />
        <TableFoot nbrHeroes = { this.state.heroes.length } />
        <TableBody 
          heroes = { this.state.heroes }
          removeRow = { this.handleRemoveRow }
        />
      </table>
    </div>
  );
}
};

export default App;
