import React from "react";
import "./App.css";
import Search from "./Components/Search";
import Details from "./Components/Details";
import Pagination from "./Components/Pagination";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/Details" component={Details} />
        </Switch>
        <Pagination />
      </div>
    </Router>
  );
}

export default App;
