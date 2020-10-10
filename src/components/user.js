import React from 'react';
import { withRouter } from "react-router";
import Footer from './footer';

const User = ({ history }) => {

    return (
        <div style = {{ padding: 15 }}>
            <div style = {{
                width: '100%',
                height: 150,
                borderRadius: 10,
                backgroundColor: '#40BFFF',
                marginBottom: 15
            }}></div>
            <div style = {{
                width: '100vw',
                padding: '25px 15px',
                backgroundColor: '#C4C4C4',
                margin: '0 -15px 15px'
            }}>
                <div style = {{
                    fontWeight: 700,
                    fontSize: 27,
                    textShadow: '0 4px 4px rgba(0,0,0,0.25)',
                    marginBottom: 10
                }}>Welcome User</div>
                <div style = {{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-around'
                }}>
                    <div className = 'bold1' onClick = {() => history.push('/account')}>Shop Profile</div>
                    <div className = 'bold1' onClick = {() => history.push('/portfolio')}>Portfolio</div>
                    <div className = 'bold1' onClick = {() => history.push('/socialshare')}>Share</div>
                </div>
            </div>
            <div style = {{ textAlign: 'center', fontSize: 24, color: '#333', letterSpacing: '0.5px', lineHeight: 1.5 }}>
                <div className = 'plus'></div>
                <div onClick = {() => history.push('/account')}>
                    Create
                    <br/>
                    Account
                </div>
            </div>
            <Footer active = {0} />
        </div>
    )
}

export default withRouter(User);