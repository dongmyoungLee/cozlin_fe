import classes from '../../styles/pages/layout/mypage.module.css';
import InputBox from './InputBox';

const InputComponent = (props) => {

   
   
   return(
      <div>
         <div className={classes.line}></div>
         <div style={{display : 'flex', justifyContent : 'space-between', padding:'30px'}}>
            <div>{props.label}</div>
            <div> 
               <InputBox inputTitle={props.inputTitle.first} color="red" widthSize={false} isReadOnly={true} />
               <InputBox inputTitle={props.inputTitle.second} color="blue" widthSize={true} isReadOnly={true} />
               <InputBox inputTitle={props.inputTitle.third} color="green" widthSize={false} isReadOnly={true} />
            </div>
         </div>
      </div>
      
   )
}

export default InputComponent;