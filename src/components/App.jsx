import React from "react";
import Disciplines from "./Disciplines";
import Discipline from "./Discipline";
import Header from "./Header";
import Intro from "./Intro";
import Login from "./Login";
import Register from "./Register";
import Lesson from "./Lesson";
import Profile from "./Profile";
import Calendar from "./Calendar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const styles = {
    display: "flex",
    flexFlow: "column nowrap",
    height: "100vh",
  };
  return (
    <div className="App" style={styles}>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/disciplines">
            <Disciplines />
          </Route>
          <Route path="/discipline">
            <Discipline />
          </Route>
          <Route path="/lesson">
            <Lesson />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
