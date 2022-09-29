import React from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = ({ handleTime, exercises }) => {

    return (
        <div>
            <h1><i className="fa-solid fa-person-walking"></i> Special Gyms Club !!!</h1>
            <h3>Selects today's exercise !!</h3>
            <div className='exercises-container'>
                {
                    exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id} handleTime={handleTime}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;