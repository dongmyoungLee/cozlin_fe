import Applicant from "../../blocks/Applicant";
// import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import InputLayout from "../../blocks/InputLayout";
import { useSelector } from "react-redux";
const Profile = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);

  return (
    <MypageLayout>
      <Applicant />
      <InputLayout/>
    </MypageLayout>
  );
}

export default Profile;