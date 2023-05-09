import Layout from "../../blocks/Layout";
import {useState} from "react";


const HumanResources = () => {

  const [serverData, setServerData] = useState([]);


  const testApi = async () => {
    const response = await fetch('http://localhost:9090/user');

    if (!response.ok) { 
        throw new Error('SomeThing went wrong!');
    }

    const responseData = await response.json();

    setServerData(responseData);
  }


  return (
      <>
        <Layout >
          <p>인재 채용 페이지</p>
          <button onClick={testApi} >testAPI</button>
          {serverData.map((item, idx) => (
              <p key={item.customerNo}>{item.customerNo}</p>
          ))}
        </Layout>
      </>
  );
}

export default HumanResources;