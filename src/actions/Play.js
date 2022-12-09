import React, { useEffect }  from 'react';
import Container from 'react-bootstrap/Container';

import '../css/play.css'


export default function Play() {

    useEffect(() => {
        const homePlay = document.querySelector(".home-play");
        homePlay.addEventListener('click', function (event) {
            let x = event.clientX;
            let y = event.clientY;
            const monty = document.querySelector(".monty-play");
            monty.style.position = "absolute";
          monty.style.left = `${x}px`;
            monty.style.top = `${y}px`;
          })
    
        })
    
    

   
    return (
        <Container className='home-play'>
         
                <div className ='monty-play'>

                    <figure className='head-play'>
                        <div className='eyes-play'>
                            <span id='eye1-play'></span>
                            <span id='eye2-play'></span>
                        </div>
                    </figure>
                    <figure className='body-play'></figure>
                    <figure className='legs-play'>
                        <span id='leg1-play'></span>
                        <span id='leg2-play'></span>
                        <span id='leg3-play'></span>
                        <span id='leg4-play'></span>
                        <span id='leg5-play'></span>
                        <span id='leg6-play'></span>
                        <span id='leg7-play'></span>
                        <span id='leg8-play'></span>
                    </figure>

                </div>
               
            
      
          
        </Container>

    );

}