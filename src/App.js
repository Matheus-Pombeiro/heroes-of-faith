import React, { Component } from "react";
import TableHead from "./components/TableHead.js";
import TableFoot from "./components/TableFoot.js";
import TableBody from "./components/TableBody.js";

class App extends Component {
  state = {
    heroes: [
      {
        id: "1",
        name: "Abel",
        book: "Genesis",
        testament: "Old"
      },
      {
        id: "2",
        name: "Enoch",
        book: "Genesis",
        testament: "Old"
      },
      {
        id: "3",
        name: "Noah",
        book: "Genesis",
        testament: "Old"
      }
    ]
  };
  render() {
    return (
    <div className="App">
      <table className="tabela">
        <TableHead />
        <TableFoot />
        <TableBody heroes={ this.state.heroes } />
      </table>
    </div>
  );
}
};

export default App;
