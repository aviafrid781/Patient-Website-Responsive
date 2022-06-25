import React from 'react';
import { Button, Col, FloatingLabel, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaCheck } from "react-icons/fa";
const List = () => {
    return (
        <div style={{ margin: '5px' }}>
            <h1 style={{ textAlign: 'initial', margin: '10px',fontWeight: '500',fontSize: '20px' }}>To-Do List</h1>
            <div>

                <Form>
                    <InputGroup className="mb-3,m-5, p-7">
                        <Form.Control rows={2}


                            aria-describedby="basic-addon2"
                        />
                        <Button className=" m-3" style={{ backgroundColor: '#FF7594' }}>
                            <FaCheck /> Add
                        </Button>
                    </InputGroup>


                </Form>
                <br />
                <Button  style={{ backgroundColor: '#FF7594' }}> <FaCheck /> Done</Button>{' '}

            </div>
            <br />
            <Form.Group className="mb-3, m-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="We hereby agree that we shall not use any list of your customers which may be obtained in connection with this Agreement for the purpose of solicitation of any product or service " />   <small style={{color:'green'}}> Last Added 12 june 2022 </small>

            </Form.Group>
            <Form.Group className="mb-3 , m-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="nothing in this paragraph or otherwise shall be deemed to prohibit or restrict us or our affiliates in any way from solicitations of any product solicitation of any product file  as safe " />   <small style={{color:'green'}}> Last Added 12june2022 </small>

            </Form.Group>
            <Form.Group className="mb-3, m-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Central Contractor Registration (CCR) database means the primary Government repository for Contractor information required for the conduct of business with the Government  " />   <small style={{color:'green'}}> Last Added 10 june 2022 </small>

            </Form.Group>
            <Form.Group className="mb-3, m-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Personnel file means, for the purposes of Part III (8VAC20-90-60 et seq.), any and all memoranda, entries or other documents included in the teacher's file as maintained of business  " />   <small style={{color:'green'}}> Last Added 01 june 2022 </small>

            </Form.Group>
            <Form.Group className="mb-3, m-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Screening means the evaluation process used to identify an individual's ability to perform activities of daily living and address health and safety concerns conduct of business safety." />   <small style={{color:'green'}}> Last Added 01 june 2022 </small>

            </Form.Group>

        </div >
    );
};

export default List;