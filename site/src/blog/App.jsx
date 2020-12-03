import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ArticleList from './ArticleList';

function App() {
    return (
        <Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        home
                    </Route>
                    <Route path="/blog">
                        <ArticleList />
                    </Route>
                    <Route path="/about">about</Route>
                    <Route path="/contact">contact</Route>
                </Switch>
            </Router>
            <Footer />
        </Fragment>
    );
}

export default App;
