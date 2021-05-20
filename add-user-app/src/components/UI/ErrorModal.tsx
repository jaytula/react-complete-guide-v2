import { Fragment } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

export interface IModalData {
  title: string;
  message: string;
}

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({
  title,
  message,
  onClose,
}: {
  title: string;
  message: string;
  onClose: () => void;
}) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({
  title,
  message,
  onClose,
}: {
  title: string;
  message: string;
  onClose: () => void;
}) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {createPortal(
        <ModalOverlay title={title} message={message} onClose={onClose} />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </Fragment>
  );
};

export default ErrorModal;
