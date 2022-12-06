import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import wake from '../animations/monty-wake-up.gif'
import '../css/wake.css'


export default function Wake(props) {
    
    return (
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <h2 className='aboutHeader'>MONTY is waking up...</h2>
      </div>
      <Modal.Body>
       <img className='gif' src={wake} />
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}
