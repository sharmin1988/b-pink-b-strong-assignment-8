import React from 'react';
import './Activity.css'

const Activity = (props) => {
    console.log(props)
    const { name, img, time } = props.activities
    return (
        <div className='activity-card'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <h3>Name: <span className='pink'>{name}</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, labore.</p>
                <p><small>For Age: 20-40</small></p>
                <p>Time required: <strong>{time}min</strong></p>
            </div>
            <button className='add-to-btn'>Add To List</button>

        </div>
    );
};

export default Activity;