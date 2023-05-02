import classes from '../../styles/atoms/button.module.css';

const Button = (props) => {

  return (
      <button type={props.btn.type} onClick={props.btn.onClick} >{props.btn.value}</button>
  );
}

export default Button;