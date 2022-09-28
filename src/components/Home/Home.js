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
                    <div className='user-info'>
                        <img src="https://scontent.fdac20-1.fna.fbcdn.net/v/t1.6435-9/118290441_229293018817549_5675367518733679984_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=m6vroJvxC_4AX-xgCJh&tn=7_wcj_6NfxzthbaP&_nc_ht=scontent.fdac20-1.fna&oh=00_AT93YWxDHHMgQVJU7C2lT0LWU4LOh3fjVtL0Wop2tzX14A&oe=6359803B" alt="" />
                        <p>Ripas Sorker Rifat</p>
                    </div>
                    <div className='physical-info'>
                        <h3>My physical info</h3>
                        <div>
                            <p>Weight : 53 kg</p>
                            <p>Height : 5.7 inces</p>
                            <p>Age : 53 years</p>
                        </div>
                    </div>
                    <div className="breck-info">
                        <p>10s</p>
                        <p>20s</p>
                        <p>30s</p>
                        <p>40s</p>
                        <p>50s</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;