import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import ArticleListingPage from './containers/ArticleListingPage';
import ArticlePage from './containers/ArticlePage';

//import articleData from 'components/articleData';

function App() {
    //console.log('articleData', articleData);
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={ArticleListingPage} />
                <Route exact path="/article/:id" component={ArticlePage} />
            </Router>
        </div>
    );
}

export default App;
