import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/montybuild.css'


export default function MontyBuild() {

    return (

        <Container className='home'>
            <div>
                <figure className='head'>
                    <div className='eyes'>
                        <span id='eye1'></span>
                        <span id='eye2'></span>
                    </div>
                </figure>
                <figure className='body'></figure>
            </div>
        </Container>

    );

}