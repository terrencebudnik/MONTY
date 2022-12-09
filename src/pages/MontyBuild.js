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
                <figure className='legs'>
                    <span id='leg1'></span>
                    <span id='leg2'></span>
                    <span id='leg3'></span>
                    <span id='leg4'></span>
                    <span id='leg5'></span>
                    <span id='leg6'></span>
                    <span id='leg7'></span>
                    <span id='leg8'></span>
                </figure>

            </div>
        </Container>

    );

}