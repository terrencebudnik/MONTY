import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WakeUp from '../actions/Wake';
import Feed from '../actions/Feed';
import Sleep from '../actions/Sleep';

import '../css/montyhome.css'

export default function MontyHome() {

    const [wakeUpShow, setWakeUpShow] = useState(false);
    const [feedShow, setFeedShow] = useState(false);
    const [sleepShow, setSleepShow] = useState(false);

    return (

        <>

            <Container className='container-main' fluid>
                <Row className='button-row'>
                    <Col className='button-col'>
                        <button className='button' onClick={() => setWakeUpShow(true)}>Wake Up</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button' onClick={() => setFeedShow(true)}>Feed</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button'>Play</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button'>Chill</button>
                    </Col>
                    <Col className='button-col'>
                        <button className='button' onClick={() => setSleepShow(true)}>Sleep</button>
                    </Col>
                </Row>

            </Container>


            <WakeUp
                show={wakeUpShow}
                onHide={() => setWakeUpShow(false)} />

            <Feed
                show={feedShow}
                onHide={() => setFeedShow(false)} />

            <Sleep
                show={sleepShow}
                onHide={() => setSleepShow(false)} />



        </>
    );
}
