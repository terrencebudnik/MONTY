import React from 'react';
import Modal from 'react-bootstrap/Modal';
import feedGif from '../animations/monty-feed.gif'
import '../css/feed.css'


export default function Feed(props) {

  return (
    <div>
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body className='modal-body-feed'>
          <img className='feed-gif' src={feedGif} />
        </Modal.Body>
        <Modal.Footer className='modal-footer-feed'>
          <button className='button-close-feed' onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

