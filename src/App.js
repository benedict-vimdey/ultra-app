import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Reports from './Pages/Reports'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' component={Products}/>
          <Route path='/reports' component={Reports}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
