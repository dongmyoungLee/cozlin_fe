import Applicant from "../../blocks/Applicant";
import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import Background from "../../blocks/Background"

const Profile = () => {
  return (
    <MypageLayout>
      <Applicant />
      <Background/>
    </MypageLayout>
  );
}

export default Profile;