import React  from 'react';
import Container from 'react-bootstrap/Container';

import '../css/sleep.css'


export default function Sleep() {
   
    return (
        <Container className='home-sleep'>
         
                <div className ='monty-sleep'>

                    <figure className='head-sleep'>
                        <div className='eyes-sleep'>
                            <span id='eye1-sleep'></span>
                            <span id='eye2-sleep'></span>
                        </div>
                    </figure>
                    <figure className='body-sleep'></figure>
                    <figure className='legs-sleep'>
                        <span id='leg1-sleep'></span>
                        <span id='leg2-sleep'></span>
                        <span id='leg3-sleep'></span>
                        <span id='leg4-sleep'></span>
                        <span id='leg5-sleep'></span>
                        <span id='leg6-sleep'></span>
                        <span id='leg7-sleep'></span>
                        <span id='leg8-sleep'></span>
                    </figure>

                </div>
               
            
      
          
        </Container>

    );

}