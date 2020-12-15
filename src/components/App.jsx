import React from "react";
import Disciplines from "./Disciplines";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        height: "100vh",
      }}
    >
      <Header />
      <Disciplines />
    </div>
  );
}

export default App;
