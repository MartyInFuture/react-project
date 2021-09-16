import React, { useEffect } from "react";
import { Overlay } from "./ModalStyled";

const Modal = ({ closeModal, children, nameForm = "Name form" }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEscape = (e) => e.code === "Escape" && closeModal();

  const onOverlayClick = ({ target, currentTarget }) => {
    target === currentTarget && closeModal();
  };
  return (
    <Overlay onClick={onOverlayClick}>
      <div className="modal">
        <h2 className="nameForm">{nameForm}</h2>
        {children}
        <button type="button" className="cancel">
          Відміна
        </button>
      </div>
    </Overlay>
  );
};

export default Modal;
