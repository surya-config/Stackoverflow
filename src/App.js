import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
