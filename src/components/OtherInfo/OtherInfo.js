import React from 'react';
import pic from '../../image/Person_Image-removebg-preview.png'
import './OtherInfo.css'

const OtherInfo = () => {
    return (
        <div className='person-container'>
            <div className='person'>
                <img src={pic} alt="" />
                <h4>Name: Rasna Sharmin</h4>
            </div>
            <div className='person-info'>
                <h5>Height <br />5.7</h5>
                <h5>Weight <br />57 kg</h5>
                <h5>25 years <br />Age</h5>
            </div>
        </div>
    );
};

export default OtherInfo;