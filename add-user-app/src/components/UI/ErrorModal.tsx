import { MouseEventHandler } from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

export interface IModalData {
  title: string;
  message: string;
}

const ErrorModal = ({
  title,
  message,
  hideModal = () => {},
}: {
  title: string;
  message: string;
  hideModal?: () => void;
}) => {
  const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    hideModal();
  };

  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
