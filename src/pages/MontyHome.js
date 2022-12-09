import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Wake from '../actions/Wake.js'
import Chill from '../actions/Chill.js'
import Sleep from '../actions/Sleep.js';
import Play from '../actions/Play.js';



import '../css/montyhome.css'

export default function MontyHome() {

    const [active, setActive] = useState("")
    

    return (

        <>

            <Container className='container-main' fluid>
                <Row className='button-row'>
                    <Col className='button-col'>
                        <button className='button' onClick={()=> setActive("Wake")}>Wake Up</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button'>Feed</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button' onClick={()=> setActive("Play")}>Play</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button' onClick={()=> setActive("Chill")}>Chill</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button' onClick={()=> setActive("Sleep")}>Sleep</button>
                    </Col>
                </Row>
                
                    
                

            </Container>

            {active === "Wake" && <Wake />}
            {active === "Chill" && <Chill />}
            {active === "Play" && <Play />}
            {active === "Sleep" && <Sleep />}
            




        </>
    );
}
