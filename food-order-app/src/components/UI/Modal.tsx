import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props: { onClose: () => void }) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = (props: { children: ReactNode; onClose: () => void }) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays") as HTMLDivElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays") as HTMLDivElement
      )}
    </Fragment>
  );
};

export default Modal;
