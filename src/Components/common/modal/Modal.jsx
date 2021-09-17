import React, { useEffect } from "react";
import { Overlay } from "./ModalStyled";

//для работы модалки необходимо передать 3 пропса,
// в первом передаем метод который будет переключать в стейте флаг
// вторым пропсом передаем компонент формы с кнопкой сабмит
// третьим передаем имя формы
//

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
        <button type="button" className="closeBtn" onClick={closeModal}>
          <span className="material-icons-outlined">close</span>
        </button>
        <h2 className="nameForm">{nameForm}</h2>
        {children}
        <button type="button" className="cancelBtn" onClick={closeModal}>
          Відміна
        </button>
      </div>
    </Overlay>
  );
};

export default Modal;
