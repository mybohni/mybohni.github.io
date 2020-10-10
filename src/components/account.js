import React from 'react';
import { withRouter } from "react-router";
import img from '../img/user.png';
import Footer from './footer';

const Account = ({ history }) => {

    return (
        <div style = {{ padding: 15, paddingBottom: 100 }}>
            <div className = 'user'>
                <img src = {img} alt = 'User' />
            </div>
            <div className = 'bold2'>Shop Name</div>
            <input type = 'text' placeholder = 'Shop Name' />
            <div className = 'bold2'>Shop Website</div>
            <input type = 'text' placeholder = 'MyBohni.com/ShopName' />
            <div className = 'bold2'>Category</div>
            <input type = 'text' placeholder = 'MyBohni.com/ShopName' />
            <div className = 'bold2'>About Shop (Optional)</div>
            <textarea placeholder = 'Ad velit voluptate laboris excepteur ex. Ea tempor veniam cillum ea cillum anim fugiat pariatur qui mollit ' />
            <div className = 'btn small' onClick = {() => history.push('/user', ['Shop Name', 'MyBohni.com/ShopName', 'MyBohni.com/ShopName'])}>Done</div>
            <Footer active = {4} />
        </div>
    )
}

export default withRouter(Account);