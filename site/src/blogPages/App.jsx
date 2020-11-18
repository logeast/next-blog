import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SafeArea from '../components/SafeArea';
import Header from '../components/Header';
import CardList from './CardList';

function App() {
    return (
        <>
            <Header />
            <Router>
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
        </>
    );
}

export default App;
