import Layout from "../../blocks/Layout";
import {findUserJobInfo, updateUserJobProfile} from "../../../common/api/ApiPostService";
import {useState} from "react";

const Announcement = () => {
  const [mySkills, setMySkills] = useState(['Flutter', 'Kotlin']);

  const testM = () => {

    updateUserJobProfile('apple04@naver.com', '개발', '앱 개발자', '3년 차', mySkills.join(','), '', '', '', '', '', '')
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })

    // findUserJobInfo('apple02@naver.com').then((res) => {
    //   console.log(res);
    // })


  }

  return (
      <>
        <Layout >
          <p>채용 공고 페이지</p>
        </Layout>
      </>
  );
}

export default Announcement;