import Layout from "../../blocks/Layout";
import {findUserJobInfo, test1, updateUserJobProfile} from "../../../common/api/ApiPostService";
import {useState} from "react";
import axios from "axios";
import s1 from "../../../asset/images/s1.webp";
import s2 from "../../../asset/images/s2.webp";
import s3 from "../../../asset/images/s3.webp";
import s4 from "../../../asset/images/s4.webp";
import s5 from "../../../asset/images/s5.webp";
import s6 from "../../../asset/images/s6.webp";
import s7 from "../../../asset/images/s7.webp";
import s8 from "../../../asset/images/s8.webp";
import d1 from "../../../asset/images/d1.webp";
import d2 from "../../../asset/images/d2.webp";
import d3 from "../../../asset/images/d3.webp";
import d4 from "../../../asset/images/d4.webp";
import d5 from "../../../asset/images/d5.webp";
import d6 from "../../../asset/images/d6.webp";
import d7 from "../../../asset/images/d7.webp";
import d8 from "../../../asset/images/d8.webp";
const Announcement = () => {
  const [mySkills, setMySkills] = useState(['Flutter', 'Kotlin']);

  const testM = () => {

    updateUserJobProfile('user04@naver.com', '김창수', '01042413928', '개발', '프론트 개발자', '3년 차', 'React native', '카카오 게임즈', '유니티 개발자', '3년 차', '홍익대학교', '졸업', '패션디자인과', 'Y').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })



  }

  return (
      <>
        <Layout >
          <p>채용 공고 페이지12121212</p>
          <button onClick={testM}>test111111111111111</button>
          <img src={s1} />
          <img src={s2} />
          <img src={s3} />
          <img src={s4} />
          <img src={s5} />
          <img src={s6} />
          <img src={s7} />
          <img src={s8} />
          <img src={d1} />
          <img src={d2} />
          <img src={d3} />
          <img src={d4} />
          <img src={d5} />
          <img src={d6} />
          <img src={d7} />
          <img src={d8} />
        </Layout>
      </>
  );
}

export default Announcement;