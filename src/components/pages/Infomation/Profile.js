import Applicant from "../../blocks/Applicant";
// import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import { useSelector } from "react-redux";
import classes from '../../../styles/pages/layout/mypage.module.css';
import InputComponent from "../../blocks/InputComponent";
import InputBox from "../../blocks/InputBox";
import Button from "../../atoms/Button";

const Profile = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);

  const currPwdHandler = (e) => {
    //
  }

  const changePwdHandler = (e) => {
    //
  }

  const changeCheckPwdHandler = (e) => {
    //
  }

  return (
    <MypageLayout>
      <Applicant />
      <div className={classes.account}>
         <div className={classes.management_box}>
            <div className={classes.dark}>
               <h2 className={classes.h2_option}>프로필 관리</h2>
               <p className={classes.p_option}>작성한 프로필로 입사지원을 할 수 있습니다.</p>
            </div>
            <div>

              <div style={{width : '137px'}}>
                <Button btn={{value : '수정하기'}} />
              </div>
            
            </div>
            {/* <button className={classes.box}>
               <a className={classes.edit} href="https://www.kurly.com/board/notice">수정하기</a>
            </button> */}
         </div>        

         <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}}  placeholder={{first : "test1", second : "test2", third : "test3"}} use="isReadOnly" label="기본정보" inputTitle={{first : '이름', second : '연락처', third : '이메일'}} />
         <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}} placeholder={{first : "test1", second : "test2", third : "test3"}} use="isReadOnly" label="희망직무" inputTitle={{first : '직군', second : '직무', third : '직무경력'}} />
         <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}} placeholder={{first : "test1", second : "test2", third : "test3"}}  use="isReadOnly" label="최종학력" inputTitle={{first : '학교명', second : '이수상태', third : '학과명'}} />

         <div className={classes.line}></div>
         
         <div className={classes.input_layout}>
            <div>이력서</div>
            <div> 
               <InputBox />
            </div>
         </div>
      </div>
    </MypageLayout>
  );
}

export default Profile;