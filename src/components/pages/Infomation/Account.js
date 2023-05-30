import Applicant from "../../blocks/Applicant";
import MypageLayout from "../../blocks/MypageLayout";
import classes from '../../../styles/pages/layout/mypage.module.css';
import {Mobile, PC} from "../../config/Responsive";
import { useSelector } from "react-redux";
import { findUserJobInfo } from "../../../common/api/ApiPostService";
import axios from "axios";
import App from "../../blocks/App"

const Account = () => {

  // redux 에서 데이터를 꺼내오는 행위
  const userId = useSelector(state => state.loginCheck.loginInfo.userId);

  

  const testMethod = () => {

    // 받기만한다
    // 서버에 있는 값을 모두받아온다
    // http://cozlin.com/user
    
    axios.get("http://cozlin.com/user").then((response)=>{
      console.log(response)
    }).catch((err)=>{
      console.log(err)
    })

  }


  const testMethod2 = () => {
    //  주고받고한다
    //  서버에있는 값중에 내가 원하는 값만 가져온다 
    //  첫번째 중괄호 = body
    //  두번째 중괄호 = params
    // http://cozlin.com/user/job
    axios.post("http://cozlin.com/user/job", {} , {
      params:{
        id : userId
      }
    }).then((response)=>{
      console.log(response)
    }).catch((err)=>{
      console.log(err)
    })

  }




  return (
    <>
      <PC>
        <MypageLayout>
          <Applicant />
      
          <div className={classes.account}>
            <p>Account</p>
            <div>
              <button style={{display : 'block'}} onClick={testMethod}>GET 으로 요청 하기</button>
              <button onClick={testMethod2}>POST 로 요청하기</button>
            </div>
          </div>
        </MypageLayout>
      </PC>
      <Mobile>
        <div className={classes.mobile_account}>
          <div className={classes.mobile_top_info}>
            <h2 className={classes.mobile_h2}>계정 정보</h2>
            <p className={classes.mobile_param}>로그인 정보를 변경할 수 있습니다.</p>
            <div className={classes.line}></div>
          </div>
          <div className={classes.mobile_bot_info}>
            <div className={classes.bottom_info}>
              <p>아이디</p>
              <p className={classes.indent}>your ID</p>
            </div>
            <div className={classes.bottom_info}>
              <p>비밀번호</p>
              <p className={classes.indentClick}>비밀번호 변경하기</p>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
}

export default Account;