import classes from '../../styles/atoms/radio.module.css';

const Radio = (props) => {
  return (
      <label className={classes.radioOption}>
        <input
            type='radio'
            value={props.value}
            name={props.name}
            defaultChecked={props.defaultChecked}
            disabled={props.disabled}
            className={classes.radioSize}
            onChange={props.onChange}
        />
        {props.children}
      </label>
  );
}

export default Radio;