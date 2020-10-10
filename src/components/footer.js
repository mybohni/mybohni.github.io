import React from 'react';
import { withRouter } from "react-router";

const loop = ['Home', 'Portfolio', 'Social Share', 'My Bookings', 'Account'];

const Footer = ({ history, active = 0, data = [] }) => (
    <div className = 'footer'>
        {
            loop.map((el, index) => (
                <div
                    key = {el}
                    className = {active === index ? 'active' : ''}
                    onClick = {() => history.push(`/${el.toLowerCase().split(' ').join('')}`, data)}
                >{el}</div>
            ))
        }
    </div>
)

export default withRouter(Footer);