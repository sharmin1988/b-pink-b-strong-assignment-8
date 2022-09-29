import React from 'react';
import './BreakTime.css'

const BreakTime = ({handelBreak}) => {
    return (
        <div>
            <div className="break-container">
                <h3>Add A Break</h3>
                <div className="break-time">
                    <h5 onClick={() => handelBreak(2)}>2min</h5>
                    <h5 onClick={() => handelBreak(3)}>3min</h5>
                    <h5 onClick={() => handelBreak(4)}>4min</h5>
                    <h5 onClick={() => handelBreak(5)}>5min</h5>
                </div>
            </div>
        </div>
    );
};

export default BreakTime;