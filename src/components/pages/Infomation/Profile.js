import Applicant from "../../blocks/Applicant";
import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";

const Profile = () => {
  return (
    <MypageLayout>
      <Applicant />
      <div className={classes.account}>
        <p>Profile</p>
      </div>
    </MypageLayout>
  );
}

export default Profile;