import React from 'react';
import pic from '../../image/Person_Image-removebg-preview.png'
import './Person.css'

const Person = () => {
    return (
        <div>
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
        </div>
    );
};

export default Person;