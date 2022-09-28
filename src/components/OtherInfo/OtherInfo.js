import React from 'react';
import pic from '../../image/Person_Image-removebg-preview.png'
import './OtherInfo.css'

const OtherInfo = ({exerciseDetails}) => {
    
    let totalTime = 0;
    for(const activity of exerciseDetails){
        totalTime = totalTime + activity.time
    }
    
    return (
        <div className='person-container'>
            <div className='person'>
                <img src={pic} alt="" />
                <h3>Rasna Sharmin
                    <br /> <small>Sydney, Australia</small>
                </h3>
            </div>
            <div className='person-info'>
                <h5>Height <br />5.7</h5>
                <h5>Weight <br />57 kg</h5>
                <h5>25 years <br />Age</h5>
            </div>
            <div className="break-container">
                <h3>Add A Break</h3>
                <div className="break-time">
                    <h5>2min</h5>
                    <h5>4min</h5>
                    <h5>5min</h5>
                    <h5>10min</h5>
                </div>
            </div>
            <div className='exercise-container'>
                <h2>Exercise Details</h2>
                <div className="exercise">
                    <h4>Exercise time:</h4>
                    <p> {totalTime} <small>min</small></p>
                </div>
                <div className="exercise">
                    <h4>Break time:</h4>
                    <p> {} <small>min</small></p>
                </div>
            </div>
            <button className='btn-completed'>Activity Completed</button>
        </div>
    );
};

export default OtherInfo;