import React from 'react';
import Modal from 'react-bootstrap/Modal';
import wakeUpGif from '../animations/monty-wake-up.gif'
import '../css/wake.css'


export default function WakeUp(props) {

  return (
    <div>
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body className='modal-body-wake'>
          <img className='wake-gif' src={wakeUpGif} />
        </Modal.Body>
        <Modal.Footer className='modal-footer-wake'>
          <button className='button-close-wake' onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
