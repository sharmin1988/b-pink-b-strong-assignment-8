import React, { useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Person from '../Person/Person';
import './OtherInfo.css'

const OtherInfo = ({ exerciseDetails }) => {
    const [brTime, setBrTime] = useState([])

    let totalTime = 0;
    for (const activity of exerciseDetails) {
        totalTime = totalTime + activity.time
    }

    const handelBreak = (event) => {
        console.log(event)

        setBrTime([...brTime, event])
    }
    let breakTotal = 0;
    for (const breakTime of brTime){
        breakTotal = breakTotal + breakTime;
    }

    return (
        <div className='otherInfo-container'>
            <Person></Person>
            <BreakTime handelBreak={handelBreak}></BreakTime>
            <div className='exercise-container'>
                
                <h2>Exercise Details</h2>

                {/* total time  */}
                <div className="exercise">
                    <h4>Exercise time:</h4>
                    <p>{totalTime} <small>min</small></p>
                </div>

                {/* total Break time */}
                <div className="exercise">
                    <h4>Break time:</h4>
                    <p>{breakTotal} <small>min</small></p>
                </div>
            </div>
            <button className='btn-completed'>Activity Completed</button>
        </div>
    );
};

export default OtherInfo;