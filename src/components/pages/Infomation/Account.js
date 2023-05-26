import Applicant from "../../blocks/Applicant";
import MypageLayout from "../../blocks/MypageLayout";
import classes from '../../../styles/pages/layout/mypage.module.css';
import {useParams} from "react-router-dom";
const Account = () => {

  return (
    <>
      <MypageLayout>
        <Applicant />
        <div className={classes.account}>
          <p>Account</p>
        </div>
      </MypageLayout>
    </>
  );
}

export default Account;