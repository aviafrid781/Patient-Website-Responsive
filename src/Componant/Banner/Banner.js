import React from 'react';
import a from '../../Images/a.png'
const Banner = () => {
    return (
        <div style={{ display: 'flex', borderRadius: '8px', backgroundColor: '#FF7594',height:'300px' }}>
            <div>
                <img src={a} alt="" />
            </div>

            <div style={{marginLeft:'700px',position: 'absolute', top:'50px',color:'#FBFBFB',fontFamily: 'Poppins'}}>
                <h1>Hello, Mary Jane!</h1>
                <br />
                <p style={{fontSize: '16px'}}>Stay Up-to-Date with your appointments.</p>
                <br />
                <p>You Have No pending Reports</p>
            </div>
        </div>
    );
};

export default Banner;