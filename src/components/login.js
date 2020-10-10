import React from 'react';
import { withRouter } from "react-router";
import Header from './header';

const Login = ({ history }) => {

    return (
        <div style = {{ padding: 15 }}>
            <Header />
            <input type = 'text' placeholder = 'Mobile Number' />
            <input type = 'text' placeholder = 'OTP' />
            <button className = 'btn' onClick = { () => history.push('/user') }>Sign In</button>
            <div className = 'or'><span>OR</span></div>
            <div className = 'loginbtn' onClick = { () => history.push('/user') }>Login with Google</div>
            <div className = 'loginbtn' onClick = { () => history.push('/user') }>Login with Facebook</div>
            <div className = 'loginblue'>Forgot Password</div>
            <div style = {{ textAlign: 'center', fontSize: 12, marginTop: 10 }}>
                Don’t have a account? <span className = 'loginblue' onClick = { () => history.push('/register') }>Register</span>
            </div>
        </div>
    )
}

export default withRouter(Login);