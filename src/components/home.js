import React from 'react';
import { withRouter } from "react-router";

const Home = ({ history }) => {

    return (
        <div style = {{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#40BFFF',
            textAlign: 'center',
            fontSize: 35,
            paddingBottom: 100
        }}>
            <div
                style = {{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 137,
                    height: 137,
                    borderRadius: 16,
                    backgroundColor: '#fff',
                    marginBottom: 35
                }}
                onClick = { () => history.push('/login') }
            >
                <div style = {{
                    width: 60,
                    height: 60,
                    border: '18px solid #40BFFF',
                    borderRadius: 10,
                    transform: 'rotate(45deg)'
                }}></div>
            </div>
            <h3 style = {{ fontWeight: 400, margin: 0 }}>
                Welcome
                <br />
                to
                <br />
                Bohni
            </h3>
        </div>
    )
}

export default withRouter(Home);