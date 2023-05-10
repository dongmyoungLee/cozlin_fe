import classes from '../../styles/blocks/MsgPopup.module.css';
import {useState} from "react";

const MsgPopup = (props) => {

  const [userValidColor, setUserValidColor] = useState('rgb(215, 224, 230)');

  const userEmailValid = (e) => {
    props.userEnteredCodeData(e.target.value);
    if (props.userCode !== e.target.value) {
      setUserValidColor('#ff0000');
      return ;
    }

    setUserValidColor('#0062df');
  }



  return (
      <>
        <div className={classes.wrap}>
          <div className={classes.contents}>
            <div className={classes.exit} onClick={() => {props.onClick('exit')}}>×</div>
            <div className={classes.areaMsgTop}>
              <p className={classes.paramMsgOption}>{props.msg}</p>
              <input style={{borderColor : userValidColor}} onChange={userEmailValid} className={classes.inputOption} placeholder="인증코드를 입력해주세요." />
            </div>
            <div className={classes.areaBot}>
              <button className={classes.btnOption} onClick={props.onClick}>확인</button>
            </div>

          </div>
        </div>
      </>
  );
}

export default MsgPopup;