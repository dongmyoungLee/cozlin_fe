import Layout from "../../blocks/Layout";
import {testAuthenticate} from "../../../common/api/ApiPostService";
import {testGetApi} from "../../../common/api/ApiGetService";


const HumanResources = () => {


  const testApiHandler = async () => {

    testGetApi().then((res) => {

    }).catch((error) => {

    })
  }

  const testApiHandler2 = async () => {
    testAuthenticate('in28minutes', 'dummy')
        .then((res) => {

        })
        .catch((err) => {

        })
  }


  return (
      <>
        <Layout >
          <p>인재 채용 페이지</p>
          <button onClick={testApiHandler} >testAPI</button>
          <button onClick={testApiHandler2} >testJWTAPI</button>
        </Layout>
      </>
  );
}

export default HumanResources;