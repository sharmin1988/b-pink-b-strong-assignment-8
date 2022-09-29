import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Person from '../Person/Person';
import { addToDb } from '../Utilities/fakeDb';
import './OtherInfo.css'

const OtherInfo = ({ exerciseDetails }) => {
    const [brTime, setBrTime] = useState(0)

    let totalTime = 0;
    for (const activity of exerciseDetails) {
        totalTime = totalTime + activity.time
    }

    const handelBreak = (event) => {
        console.log(event)
        addToDb(event)
        setBrTime(event)
    }
    useEffect(() => {
        const storeData = localStorage.getItem('Break-time')
        if(storeData){
            const newData = JSON.parse(storeData)
            setBrTime(newData.time)
        }
    }, [])

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
                    <p>{brTime} <small>min</small></p>
                </div>
            </div>
            <button className='btn-completed'>Activity Completed</button>
        </div>
    );
};

export default OtherInfo;