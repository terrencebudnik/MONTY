import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/header.css'

export default function Header() {

    return (

        <Container fluid>
            <Row>
                <Col>
                    <h1 className='title'>Welcome to MONTY's World</h1>
                </Col>
            </Row>
            <Row>
                <Col className='col-link'>
                    <a className='link' href='/montyhome'>Spend Some Time With MONTY</a>
                </Col>
            </Row>
        </Container>

    );
}
