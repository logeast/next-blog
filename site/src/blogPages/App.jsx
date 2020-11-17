import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SafeArea from '../components/SafeArea';
import Header from '../components/Header';

function App() {
    return (
        <SafeArea>
            <Header />
        </SafeArea>
    );
}

export default App;
