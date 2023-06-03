import classes from '../../styles/pages/layout/mypage.module.css';

const InputBox = (props) =>{


   return(
         <div className={classes.profile}>
            <div className={classes.input}>
               <div style={{color : props.color}} className={classes.name}>{props.inputTitle}</div>
               <input readOnly={props.isReadOnly} className={props.widthSize  ? classes.input_style : classes.input_style2}></input>
            </div>
         </div>
         
   )
}

export default InputBox;