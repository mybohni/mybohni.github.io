import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import User from './components/user';
import Portfolio from './components/portfolio';
import Account from './components/account';
import Header from './components/header';
import Share from './components/share';
import Bookings from './components/bookings';

const App = () => (
    <Router>
        <Switch>
            <Route path = "/socialshare" component = { Share } />
            <Route path = "/mybookings" component = { Bookings } />
            <Route path = "/account" component = { Account } />
            <Route path = "/portfolio" component = { Portfolio } />
            <Route path = "/user" component = { User } />
            <Route path = "/register" component = { Register } />
            <Route path = "/login" component = { Login } />
            <Route path = "/Home" component = { Home } />
            <Route exact path = "/" component = { Home } />
            <Route path = "/">
                <Header show = {false} />
                <Link to = '/' style = {{ display: 'block', textAlign: 'center', color: '#40BFFF', fontWeight: 700, fontSize: 12 }}>Go to Home</Link>
            </Route>
        </Switch>
    </Router>
)

export default App;
