import React from 'react';

const Activity = (props) => {
    console.log(props)
    const {name, img} = props.activities
    return (
        <div>
            <img src={img} alt="" />
            <h2>hi</h2>
        </div>
    );
};

export default Activity;