import { MouseEventHandler } from "react";
import classes from "./ErrorModal.module.css";

export interface IModalData {
  title: string;
  message: string;
}

const ErrorModal = ({
  modalData,
  hideModal,
}: {
  modalData: IModalData;
  hideModal: () => void;
}) => {
  const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    hideModal();
  };

  return (
    <div className={classes.errorModal} onClick={() => hideModal()}>
      <div onClick={() => {}}>
        <h2>{modalData.title}</h2>
        <p>{modalData.message}</p>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
