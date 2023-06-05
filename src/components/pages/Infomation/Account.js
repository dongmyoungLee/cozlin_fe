import Applicant from "../../blocks/Applicant";
import MypageLayout from "../../blocks/MypageLayout";
import classes from '../../../styles/pages/layout/mypage.module.css';
import {Mobile, PC, Tablet} from "../../config/Responsive";

const Account = () => {

  return (
    <>
      <PC>
        <MypageLayout>
          <Applicant />
          <div className={classes.account}>
            <p>Account</p>
          </div>
        </MypageLayout>
      </PC>
      <Tablet>
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
      </Tablet>
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