import React from "react";
import TableHead from "./components/TableHead.js";
import TableFoot from "./components/TableFoot.js";
import TableBody from "./components/TableBody.js";

function App() {
  return (
    <div className="App">
      <table className="tabela">
        <TableHead />
        <TableFoot />
        <TableBody />
      </table>
    </div>
  );
};

export default App;
