import MypageLayout from "../../blocks/MypageLayout";
import classes from '../../../styles/pages/layout/mypage.module.css';
import { useSelector } from "react-redux";
import InputComponent from "../../blocks/InputComponent";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
   const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const navigate = useNavigate();

  const currPwdHandler = (e) => {
    //
  }

  const changePwdHandler = (e) => {
    //
  }

  const changeCheckPwdHandler = (e) => {
    //
  }

   return(
      <MypageLayout>
      <div className={classes.account}>
        <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}} placeholder={{first : "********", second : "********", third : "********"}} use="isNotReadOnly" type="password" label="비밀번호" inputTitle={{first : '현재 비밀번호', second : '변경할 비밀번호', third : '비밀번호 확인'}}  />
        <div className={classes.line}></div>
      </div>
      <div className={classes.edit_profile}>
         <div className={classes.title_container}>
            <div className={classes.title_h2}>프로필수정</div>
            <div className={classes.title_p}>수정한 내용을 저장할까요?</div>
         </div>
         <div className={classes.button_container}>
            <button className={classes.save_btn}></button>
            <button className={classes.cancel_btn}></button>
         </div>
      </div>
    </MypageLayout>
   );
}

export default ProfileUpdate;