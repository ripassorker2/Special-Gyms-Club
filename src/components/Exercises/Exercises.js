import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [Exercises, setExercise] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])
    return (
        <div>
            <h1>Special Gyms Club !!!</h1>
            <h3>Selects today's exercise !!</h3>
            <div className='exercises-container'>
                {
                    Exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;