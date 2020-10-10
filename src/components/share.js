import React from 'react';
import { withRouter } from "react-router";
import Footer from './footer';

import copy from '../img/copy.png';
import wa from '../img/wa.png';

const Share = ({ history }) => {

    return (
        <div style = {{ padding: 15 }}>
            <div className = 'bold3'>Share</div>
            <div className = 'sharediv'>
                As a Text Message
                <img src = {wa} alt = 'whatsapp' />
            </div>
            <div className = 'sharediv'>
                As Image
                <img src = {wa} alt = 'whatsapp' />
            </div>
            <div className = 'sharediv'>
                As a Video
                <img src = {wa} alt = 'whatsapp' />
            </div>
            <div className = 'sharediv'>
                Copy Shop Website
                <img src = {copy} alt = 'whatsapp' style = {{ marginRight: -10 }} />
            </div>
            <Footer active = {2} />
        </div>
    )
}

export default withRouter(Share);