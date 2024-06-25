/** @format */

import "bootstrap/dist/css/bootstrap.css";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastItem = ({ toasts }) => {
  return (
    <ToastContainer className="fixed z-10 top-16 right-5">
      {toasts.map((toast) => (
        <Toast className="d-inline-block m-1" bg={toast.type}>
          <Toast.Header className="justify-between">
            <strong>{toast.title}</strong>
            <small>{new Date().toLocaleTimeString()}</small>
          </Toast.Header>
          <Toast.Body className="text-white font-semibold text-sm">{toast.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  );
};

export default ToastItem;
