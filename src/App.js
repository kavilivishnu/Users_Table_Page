import React from 'react';
import './App.css';
import Search from './Components/Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './Components/Details';
import Pagination from './Components/Pagination';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/Search" component={Search} />
        <Route path="/Details" component={Details} />
        <Pagination />
      </div>
    </Router>
  );
}

export default App;
