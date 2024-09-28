import React from 'react';
import './PopUp.css'
import poplogo from '../assets/solargagaLoading.svg';
const PopUp = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img src={poplogo}/>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <div class="loader1">
  <p class="text1">
  <span class="letter letter1">U</span>
  <span class="letter letter2">n</span>
  <span class="letter letter3">d</span>
  <span class="letter letter4">e</span>
  <span class="letter letter5">r</span>
  <span className="letter">&nbsp;</span>
  <span class="letter letter6">D</span>
  <span class="letter letter7">e</span>
  <span class="letter letter8">v</span>
  <span class="letter letter9">e</span>
  <span class="letter letter10">l</span>
  <span class="letter letter11">o</span>
  <span class="letter letter12">p</span>
  <span class="letter letter13">m</span>
  <span class="letter letter14">e</span>
  <span class="letter letter14">n</span>
  <span class="letter letter14">t</span>
  <span class="letter letter14">.</span>
  <span class="letter letter14">.</span>
  <span class="letter letter14">.</span>
  </p>
</div>
            <div class="lds-roller"><div></div><div></div><div></div><div></div></div>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
