import React from 'react';

const Header = ({ isLogin = true, show = true }) => (
    <div style = {{ textAlign: 'center', padding: '50px 0 25px' }}>
        <div style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 72,
            height: 72,
            borderRadius: 16,
            backgroundColor: '#40BFFF',
            margin: '0 auto 15px auto'
        }}>
            <div style = {{
                width: 26,
                height: 26,
                border: '8px solid #fff',
                borderRadius: 4,
                transform: 'rotate(45deg)'
            }}></div>
        </div>
        <div style = {{ fontSize: 16, fontWeight: 700, color: '#223263', marginBottom: 10 }}>
            {isLogin ? 'Welcome to Bohni' : 'Let’s Get Started'}
        </div>
        {
            show && 
            <div style = {{ fontSize: 12, fontWeight: 400, color: '#9098B1'}}>
                {isLogin ? 'Sign in to continue' : 'Create an new account'}
            </div>
        }
    </div>
)

export default Header;