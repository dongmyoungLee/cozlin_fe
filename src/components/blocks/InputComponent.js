import { useState } from 'react';
import classes from '../../styles/pages/layout/mypage.module.css';
import InputBox from './InputBox';

const InputComponent = (props) => {
   const use = props.use === 'isReadOnly' ? true : false;
   const lastInput = props.label === '희망 직무' ? true : false;

   
   return(
      <div>
         {/* <div className={classes.line}></div> */}
         <div className={classes.input_layout}>
            <div>{props.label}</div>
            <div> 
               <InputBox value={props.value.first} onChange={props.onChange.first} type={props.type} inputTitle={props.inputTitle.first}  placeholder={props.placeholder.first} isReadOnly={use} />
               <InputBox value={props.value.second} onChange={props.onChange.second} type={props.type} inputTitle={props.inputTitle.second} placeholder={props.placeholder.second} isReadOnly={use}  />
               <InputBox value={props.value.third} onChange={props.onChange.third} type={props.type} inputTitle={props.inputTitle.third} placeholder={props.placeholder.third} isReadOnly={use} />

               
               {lastInput && <InputBox value={props.value.fourth} onChange={props.onChange.fourth} type={props.type} inputTitle={props.inputTitle.fourth} placeholder={props.placeholder.fourth} isReadOnly={use} />}

            </div>
         </div>
      </div>
      
   )
}

export default InputComponent;