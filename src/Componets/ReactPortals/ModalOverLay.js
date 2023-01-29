import React, { useState } from "react";
import { useGlobalContext } from "../../Context/GlobalCOntext";

const ModalOverLay = ({ Content,ClassName }) => {
  const {modalhandler,modal} = useGlobalContext()
  return (
    <div style={modal ? { display: "block" } : {}} className="modal-overlay">
      {modal && (
        <div className={`modal-overlay-Wrapper ${ClassName}`}>
          <div className="modalInner">
            <div className="modalContent text-black">
              <Content></Content>
            </div>
            <div className="modalClose">
              <button className="btn  btn-primary" onClick={modalhandler}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalOverLay;
