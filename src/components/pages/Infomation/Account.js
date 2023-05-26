import Applicant from "../../blocks/Applicant";
import MypageLayout from "../../blocks/MypageLayout";
import classes from '../../../styles/pages/layout/mypage.module.css';
import {Mobile, PC} from "../../config/Responsive";

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
      <Mobile>
        <div className={classes.mobile_account}>
          <p>Account</p>
        </div>
      </Mobile>

    </>
  );
}

export default Account;