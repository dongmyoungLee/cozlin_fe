import Layout from "../../blocks/Layout";
import WelcomeInfo from "../../blocks/WelcomeInfo";
import CategorySection from "../../blocks/CategorySection";
import classes from "../../../styles/pages/layout/humanResources.module.css";
import FilterButton from "../../blocks/FilterButton";
import FilterDetailMenu from "../../blocks/FilterDetailMenu";
import {useEffect, useRef, useState} from "react";
import {humanResourcesDevJob} from "../../../common/Menus";
import axios from "axios";
import {testGetApi} from "../../../common/api/ApiGetService";

const HumanResources = () => {
  const [category, setCategory] = useState('개발');
  const [filterJobList, setFilterJobList] = useState(humanResourcesDevJob);
  const [isDetailMenuShow, setIsDetailMenuShow] = useState(false);


  const detailMenuShow = () => {
    setIsDetailMenuShow(!isDetailMenuShow);
  }

  const testMethods = () => {
    testGetApi().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  }

  const testMethods2 = () => {
    axios.post('http://localhost:9090/user/update-pw-pagein', {}, {
      params : {
        id : 'pajang1515@daum.net',
        currPwd : '12345678a!!!',
        changePwd : '12345678a!'
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
      <>
        <Layout >
          <WelcomeInfo />
          <CategorySection setCategory={setCategory} />
          <section className={classes.filterSection}>
            <article className={classes.filterArticle}>
              <FilterButton value="직무" count={0} onClick={detailMenuShow} btnDupCondition={!isDetailMenuShow} />
              {isDetailMenuShow && <FilterDetailMenu menuList={filterJobList} />}
              <button onClick={testMethods2}>test</button>
            </article>
            <article></article>
          </section>
        </Layout>
      </>
  );
}

export default HumanResources;