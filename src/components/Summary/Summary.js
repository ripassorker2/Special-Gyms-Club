import React, { useState } from 'react';
import './Summary.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Summary = ({ times }) => {
    const notify = () => toast("Wow !! Completed all Events");

    const [breakTime, setBreakTime] = useState(0)

    let totalTime = 0;
    for (let time of times) {
        totalTime = totalTime + time.time;
    }
    const addBreakTime = (time) => {
        setBreakTime(time)
        localStorage.setItem('time', time)
    }
    useState(() => {
        const prevTime = localStorage.getItem('time')
        if (prevTime) {
            setBreakTime(prevTime);
        }
    }, [])

    return (
        <div>
            <div className="cart-container">
                <div className='user-info'>
                    <img src="https://scontent.fdac20-1.fna.fbcdn.net/v/t1.6435-9/118290441_229293018817549_5675367518733679984_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=m6vroJvxC_4AX-xgCJh&tn=7_wcj_6NfxzthbaP&_nc_ht=scontent.fdac20-1.fna&oh=00_AT93YWxDHHMgQVJU7C2lT0LWU4LOh3fjVtL0Wop2tzX14A&oe=6359803B" alt="" />
                    <p>Ripas Sorker Rifat</p>
                </div>
                <div >
                    <h2>Add a break time !!</h2>
                    <div className="breck-info">
                        <p onClick={() => addBreakTime('10')}>10s</p>
                        <p onClick={() => addBreakTime('20')} >20s</p>
                        <p onClick={() => addBreakTime('30')}>30s</p>
                        <p onClick={() => addBreakTime('40')}>40s</p>
                        <p onClick={() => addBreakTime('50')}>50s</p>
                    </div>
                </div>
                <div className='exercise-info'>
                    <h2>Exeecise info :</h2>
                    <div className='time'>
                        <p>Exercise time : </p>
                        <p>  {totalTime} seconds </p>
                    </div>
                    <div className='time'>
                        <p>Break time :</p>
                        <p> {breakTime} seconds</p>
                    </div>
                </div>
                <div className='btn'>
                    <button onClick={notify}>Completed Event</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Summary;