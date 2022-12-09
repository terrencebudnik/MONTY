import React  from 'react';
import Container from 'react-bootstrap/Container';

import '../css/chill.css'


export default function Chill() {
   
    return (
        <Container className='home-chill'>
         
                <div className ='monty-chill'>

                    <figure className='head-chill'>
                        <div className='eyes-chill'>
                            <span id='eye1-chill'></span>
                            <span id='eye2-chill'></span>
                        </div>
                    </figure>
                    <figure className='body-chill'></figure>
                    <figure className='legs-chill'>
                        <span id='leg1-chill'></span>
                        <span id='leg2-chill'></span>
                        <span id='leg3-chill'></span>
                        <span id='leg4-chill'></span>
                        <span id='leg5-chill'></span>
                        <span id='leg6-chill'></span>
                        <span id='leg7-chill'></span>
                        <span id='leg8-chill'></span>
                    </figure>

                </div>
               
            
      
          
        </Container>

    );

}