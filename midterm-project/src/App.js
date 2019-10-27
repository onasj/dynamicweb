import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './containers/home';

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        </div>
    );
}

export default App;