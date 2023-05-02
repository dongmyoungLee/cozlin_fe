import classes from '../../styles/atoms/input.module.css';
import {Mobile, PC} from "../config/Responsive";

const Input = (props) => {

  return (
      <>
        <PC>
          <div className={classes.inputWrap}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input className={classes.input} {...props.input} onChange={props.onChange} />
          </div>
        </PC>
        <Mobile>
          <div className={classes.inputWrap}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input className={classes.input} {...props.input} onChange={props.onChange} />
          </div>
        </Mobile>
      </>

  );
}

export default Input;