import Layout from "../../blocks/Layout";
import {testGetApi} from "../../../common/api/ApiGetService";
import {findUserJobInfo} from "../../../common/api/ApiPostService";


const HumanResources = () => {


  const testApiHandler = async () => {

    testGetApi().then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })
  }

  const testApiHandler2 = async () => {

    findUserJobInfo('pajang1515@daum.net').then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })
  }


  return (
      <>
        <Layout >
          <p>인재 채용 페이지</p>
          <button onClick={testApiHandler} >testAPI</button>
          <button onClick={testApiHandler2} >testJOBAPI</button>
        </Layout>
      </>
  );
}

export default HumanResources;