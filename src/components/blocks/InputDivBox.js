import classes from '../../styles/pages/layout/mypage.module.css';

const InputBox = (props) =>{

   return(
         <div className={classes.profile}>
            <div className={classes.input}>
               <div  className={classes.name}>{props.inputTitle}</div>
               <div className={classes.div_style}>{props.value}</div>
            </div>
         </div>
      );
}
export default InputBox;