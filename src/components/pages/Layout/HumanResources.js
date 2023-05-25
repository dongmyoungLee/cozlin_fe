import Layout from "../../blocks/Layout";
import {testGetApi} from "../../../common/api/ApiGetService";


const HumanResources = () => {


  const testApiHandler = async () => {

    testGetApi().then((res) => {
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
        </Layout>
      </>
  );
}

export default HumanResources;