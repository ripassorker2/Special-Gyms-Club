import React from 'react';
import Exercises from '../Exercises/Exercises';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="main-container">
                <div className="body-container">
                    <Exercises></Exercises>
                </div>
                <div className="cart-container">
                    <h1>i am cart</h1>
                </div>
            </div>

        </div>
    );
};

export default Home;