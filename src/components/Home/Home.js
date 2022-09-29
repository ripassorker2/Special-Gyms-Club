import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import Summary from '../Summary/Summary';
import './Home.css'

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [times, setTime] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])


    const handleTime = (exercise) => {
        console.log(exercise);
        const newTime = [...times, exercise]
        setTime(newTime)
    }

    return (
        <div>
            <div className="main-container">
                <div className="body-container">
                    <Exercises handleTime={handleTime} exercises={exercises} ></Exercises>
                </div>
                <div className="summary">
                    <Summary times={times}></Summary>
                </div>

            </div>

        </div>
    );
};

export default Home;