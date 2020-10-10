import React, { useRef, useState } from 'react';
import { withRouter } from "react-router";
import img from '../img/haircut.png';
import Footer from './footer';

const Portfolio = ({ history }) => {
    const [service, setService] = useState([null, null, null, null]);
    const [view, setView] = useState(0);
    const [photo, setPhoto] = useState(false)
    const serviceName = useRef(null);
    const price = useRef(null);
    const discount = useRef(null);

    const done = () => {
        service[view - 1] = [
            serviceName.current.value,
            price.current.value,
            discount.current.value
        ]
        setService(service);
        setView(0);
        setPhoto(false);
        console.log(service)
    }

    if (view === 0) {
        return (
            <div style = {{ padding: 15 }}>
                <div className = 'bold3'>My Portfolio</div>
                {
                    service.map((el, index) => (
                        el !== null ?
                        <div className = 'card' key = { index }>
                            <img src = {img} alt = 'pic' />
                            <div>
                                <div>Haircut Normal</div>
                                <div>Normal Price: Rs 200</div>
                                <div>Discounted Price: Rs 180 (Active)</div>
                            </div>
                        </div>
                        :
                        <div
                            className = 'btn portfolio'
                            key = { index }
                            onClick = { () =>  setView(index + 1)}
                        >
                            Add Service {index + 1}
                        </div>
                    ))
                }
                <Footer active = {1} />
            </div>
        )
    } else {
        return (
            <div style = {{ padding: 15 }}>
                <div className = 'bold3'>Service { view }</div>
                <input type = 'text' placeholder = 'Name of Service' ref = {serviceName} />
                {
                    photo ?
                    <div className = 'add-photo' onClick = {() => setPhoto(true)}>
                        <img src = {img} alt = 'add pic' />
                    </div>
                    :
                    <div className = 'add-photo' onClick = {() => setPhoto(true)}>
                        <span>+</span>
                        Add photo
                    </div>
                }
                <input type = 'text' placeholder = 'Price in Rs' ref = {price} />
                <input type = 'text' placeholder = 'Discount in Rs' ref = {discount} />
                <div className = 'btn small' onClick = {done}>Done</div>
            </div>
        )
    }
    
}

export default withRouter(Portfolio);