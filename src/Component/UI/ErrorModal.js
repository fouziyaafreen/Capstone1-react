import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from './Card';

const ErrorModal = (props) => {
  return (
      <div>
    <div className={classes.backdrop} onClick={props.onconfirm}/>
    <Card className={classes.modal}>
       
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p className={classes.content}>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onconfirm}>OK</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
