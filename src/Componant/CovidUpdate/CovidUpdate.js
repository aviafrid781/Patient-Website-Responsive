import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CovidUpdate = () => {
    return (
        <div style={{border:'1px solid Aquamarine',margin:'5px'}}>
            <h1 style={{ textAlign: 'initial', margin: '10px',fontWeight: '500',fontSize: '20px' }}>Covid-19 Updates</h1>
            <div className='m-5,t-5'>
                <p style={{ textAlign: 'end', marginRight: '5 ' }}>18 june 2022</p>
                <p style={{ textAlign: 'end', marginRight: '5 ', fontSize: '5' }}>Thurtday 10.00.00 pm</p>
            </div>

            <div style={{display:'flex'}}>
                <div >
                    <img style={{width:'700px',height:'300px'}} src="https://images.unsplash.com/photo-1585139786570-905b59b4fddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG51cnNlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div style={{ display: 'flex', borderRadius: '10px' ,color:'#FBFBFB',fontSize: '38.4072px',fontFamily: 'Poppins'}}>
                    <div style={{ backgroundColor: '#FF7594' }}>
                        <p >Infection </p>
                        <h3>500</h3>
                        <p > Rate</p>
                        <h3>10%</h3>
                    </div>
                    

                    <div style={{ backgroundColor: '#FF7594',width:'700px' ,height:'300px',color:'#FBFBFB',fontSize: '38.4072px',fontFamily: 'Poppins'}}>
                        <p >Total infection</p>
                        <h3>500000</h3>
                        <p >Number of Death</p>
                        <h3 >20</h3>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default CovidUpdate;