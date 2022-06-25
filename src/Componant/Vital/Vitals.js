import React from 'react';
import { Button, Card } from 'react-bootstrap';
import blood from '../../Images/blood.png'
import heart from '../../Images/heart.png'
import oxy from '../../Images/oxy.png'
import prass from '../../Images/prassure.png'
const Vitals = () => {
    return (
        <div style={{ display: 'flex', marginLeft:'220px', padding: '15px', }}>

            <Card style={{ width: '13rem', height: ' 200.58px',padding: '15px' }}>
                <Card.Img variant="top" style={{
                    width: '39.55px',
                    height: '38.58px'
                }} src={heart} />
                <Card.Body>
                    <Card.Title>Pulse count</Card.Title>
                    <Card.Text>
                        60bpm
                    </Card.Text>
                    <Card.Text style={{ color: '#03922B' }}>
                        Normal
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card style={{ width: '13rem', height: ' 200.58px', margin: '5px', padding: '15px' }}>
                <Card.Img variant="top"  style={{
                    width: '39.55px',
                    height: '38.58px'
                }}  src={blood} />
                <Card.Body>
                        <Card.Title >Blood Plassure</Card.Title>
                    <Card.Text>
                        110/70mmHg
                    </Card.Text>
                    <Card.Text style={{ color: '#82AB0D' }}>
                        Slightly Higher
                    </Card.Text>



                </Card.Body>
            </Card>

            <Card style={{ width: '13rem', height: ' 200.58px',margin:'5px', padding: '15px' }}>
                <Card.Img variant="top" style={{
                    width: '39.55px',
                    height: '38.58px'
                }} src={oxy} />
                <Card.Body>
                    <Card.Title style={{
                 fontSize:'1rem'
                    
                }}>Oxyzen Saturation</Card.Title>

                    <Card.Text>
                        97%
                    </Card.Text>
                    <Card.Text style={{ color: '#82AB0D' }}>
                        Slightly Higher
                    </Card.Text>


                </Card.Body>
            </Card>

            <Card style={{ width: '13rem', height: ' 200.58px', margin: '5px', padding: '15px' }}>
                <Card.Img variant="top" style={{
                    width: '39.55px',
                    height: '38.58px'
                }} src={prass} />
                <Card.Body>
                    <Card.Title>Glucose count</Card.Title>
                    <Card.Text>
                        100mm/dl
                    </Card.Text>

                    <Card.Text style={{ color: '#03922B' }}>
                        Normal
                    </Card.Text>


                </Card.Body>
            </Card>

        </div >
    );
};

export default Vitals;