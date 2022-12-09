import React  from 'react';
import Container from 'react-bootstrap/Container';

import '../css/wake.css'


export default function Wake() {
   
    return (
        <Container className='home-wake'>
         
                <div className ='monty-wake'>

                    <figure className='head-wake'>
                        <div className='eyes-wake'>
                            <span id='eye1-wake'></span>
                            <span id='eye2-wake'></span>
                        </div>
                    </figure>
                    <figure className='body-wake'></figure>
                    <figure className='legs-wake'>
                        <span id='leg1-wake'></span>
                        <span id='leg2-wake'></span>
                        <span id='leg3-wake'></span>
                        <span id='leg4-wake'></span>
                        <span id='leg5-wake'></span>
                        <span id='leg6-wake'></span>
                        <span id='leg7-wake'></span>
                        <span id='leg8-wake'></span>
                    </figure>

                </div>
               
            
      
          
        </Container>

    );

}