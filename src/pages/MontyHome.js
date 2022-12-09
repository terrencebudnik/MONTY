import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Chill from '../components/Chill.js'



import '../css/montyhome.css'

export default function MontyHome() {

    const [active, setActive] = useState("")
    

    return (

        <>

            <Container className='container-main' fluid>
                <Row className='button-row'>
                    <Col className='button-col'>
                        <button className='button'>Wake Up</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button'>Feed</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button'>Play</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button' onClick={()=> setActive("Chill")}>Chill</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button'>Sleep</button>
                    </Col>
                </Row>
                
                    
                

            </Container>

            {active === "Chill" && <Chill />}
            




        </>
    );
}
