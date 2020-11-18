import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SafeArea from '../components/SafeArea';
import Header from '../components/Header';
import CardList from './CardList';
import Footer from '../components/Footer';

function App() {
    return (
        <Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        home
                    </Route>
                    <Route exact path="/blog">
                        <CardList />
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
