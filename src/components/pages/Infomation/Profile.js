import Applicant from "../../blocks/Applicant";
import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import App from "../../blocks/App"

const Profile = () => {
  return (
    <MypageLayout>
      <Applicant />
      <App/>
      {/* <Input></Input> */}
    </MypageLayout>
  );
}

export default Profile;