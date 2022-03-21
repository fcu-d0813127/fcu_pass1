import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pass.css';
import './backgcolor.css';

const Pass = (props) => {
  const date_ = new Date();
  const backgroundNumber_ = `backgcolor${date_.getDay()}`;

  /**
   * @param {function(): string}
   */
  const generateDate_ = () => {
    const month = (date_.getMonth() + 1).toLocaleString().padStart(2, '0');
    const day = date_.getDate().toLocaleString().padStart(2, '0');
    return `${month}/${day}`;
  };

  return (
    <Modal show={props.isShow} centered={true}>
      <Modal.Header className='modal-header'>
        <Modal.Title className='modal-title'>PASS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='body-item'>
          <div className={`circle ${backgroundNumber_}`}>
            <div className='content'>
              <div className='date'>{generateDate_()}</div>
              <div className='dvtitle'>{props.name}</div>
              <div className='pass-group'>
                <div className='dvtitle'>自主健康管理</div>
                <div className='pass'>PASS</div>
              </div>
              <div className='footer'>逢甲大學關心您</div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='modal-footer'>
        <Button className='modal-button' variant='primary' onClick={props.handleClose}>關閉</Button>
      </Modal.Footer>
    </Modal>
  );
};

export {Pass};