import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import feed from '../animations/monty-feed.gif'
import '../css/feed.css'


export default function Feed(props) {
    
    return (
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <h2 className='aboutHeader'>Toss in some MONTY snacks...</h2>
      </div>
      <Modal.Body>
       <img className='gif' src={feed} />
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}
