import React from 'react';
import { withRouter } from "react-router";
import Header from './header';

const Register = ({ history }) => {

    return (
        <div style = {{ padding: 15 }}>
            <Header isLogin = { false } />
            <input type = 'text' placeholder = 'Full Name' />
            <input type = 'text' placeholder = 'Your Email' />
            <input type = 'text' placeholder = 'Password' />
            <input type = 'text' placeholder = 'Password Again' />
            <button className = 'btn' onClick = { () => history.push('/user') }>Sign Up</button>
            <div style = {{ textAlign: 'center', fontSize: 12, marginTop: 20 }}>
                Have a account? <span className = 'loginblue' onClick = { () => history.push('/login') }>Sign in</span>
            </div>
        </div>
    )
}

export default withRouter(Register);