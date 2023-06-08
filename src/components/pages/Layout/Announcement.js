import Layout from "../../blocks/Layout";
import {findUserJobInfo, test1, updateUserJobProfile} from "../../../common/api/ApiPostService";
import {useState} from "react";
import axios from "axios";

const Announcement = () => {
  const [mySkills, setMySkills] = useState(['Flutter', 'Kotlin']);

  const testM = () => {

    updateUserJobProfile('test41@naver.com', '김창식', '01022453928', '개발', '앱 개발자', '3년 차', 'React native', '카카오 게임즈', '유니티 개발자', '3년 차', '홍익대학교', '졸업', '패션디자인과', 'Y').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })



  }

  return (
      <>
        <Layout >
          <p>채용 공고 페이지</p>
          <button onClick={testM}>test</button>
        </Layout>
      </>
  );
}

export default Announcement;