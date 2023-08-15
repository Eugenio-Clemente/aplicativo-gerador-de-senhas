/* eslint-disable react/prop-types */
import "./modal.css";

const Modal = (props) => {
  return (
    <>
      <div onClick={props.onClose} className="backdrop"></div>
      <div className="modal">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={props.onClose}>Ok</button>
      </div>
    </>
  );
};

export default Modal;