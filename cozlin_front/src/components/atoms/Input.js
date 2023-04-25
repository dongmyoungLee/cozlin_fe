import classes from '../../styles/atoms/input.module.css';

const Input = (props) => {

  return (
      <div className={classes.inputWrap}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} onChange={props.onChange} />
      </div>
  );
}

export default Input;