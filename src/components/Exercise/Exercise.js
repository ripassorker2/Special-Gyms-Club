import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { handleTime } = props
    const { picture, time, price, name, } = props.exercise;
    return (
        <div>
            <div className='exercise-container'>
                <img src={picture} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p><strong>Price : ${price}</strong></p>
                    <p><strong>Time : {time}s</strong></p>
                    <button onClick={() => handleTime(props.exercise)} > Add to List </button>
                </div>
            </div>
        </div>

    );
};

export default Exercise;