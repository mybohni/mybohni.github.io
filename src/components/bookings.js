import React from 'react';
import { withRouter } from "react-router";
import Footer from './footer';
import hair from '../img/haircut.png';
import detox from '../img/detox.png';
import shave from '../img/shave.png';

const Bookings = ({ history }) => {

    return (
        <div style = {{ padding: 15 }}>
            <div className = 'bold3'>My Bookings</div>
            <div className = 'card'>
                <img src = {hair} alt = 'pic' />
                <div>
                    <div>Haircut Normal</div>
                    <div>Price: Rs 200</div>
                    <div>10:00 - 10:30, 25th Oct 2020</div>
                </div>
            </div>
            <div className = 'card'>
                <img src = {shave} alt = 'pic' />
                <div>
                    <div>Shave Normal</div>
                    <div>Price: Rs 200</div>
                    <div>11:00 - 11:30, 25th Oct 2020</div>
                </div>
            </div>
            <div className = 'card'>
                <img src = {detox} alt = 'pic' />
                <div>
                    <div>Facial Detox</div>
                    <div>Price: Rs 500</div>
                    <div>12:00 - 12:45, 25th Oct 2020</div>
                </div>
            </div>
            <Footer active = {3} />
        </div>
    )
}

export default withRouter(Bookings);