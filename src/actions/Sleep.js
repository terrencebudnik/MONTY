import React from 'react';
import Modal from 'react-bootstrap/Modal';
import sleepGif from '../animations/monty-go-to-sleep.gif'
import '../css/sleep.css'


export default function Sleep(props) {

  return (
    <div>
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body className='modal-body-sleep'>
          <img className='sleep-gif' src={sleepGif} />
        </Modal.Body>
        <Modal.Footer className='modal-footer-sleep'>
          <button className='button-close-sleep' onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}



