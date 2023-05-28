import Layout from "../../blocks/Layout";
import WelcomeInfo from "../../blocks/WelcomeInfo";
import CategorySection from "../../blocks/CategorySection";
import classes from "../../../styles/pages/layout/humanResources.module.css";
import FilterButton from "../../blocks/FilterButton";
import FilterDetailMenu from "../../blocks/FilterDetailMenu";
import {useEffect, useRef, useState} from "react";
import {humanResourcesDevJob} from "../../../common/Menus";

const HumanResources = () => {
  const [category, setCategory] = useState('개발');
  const [filterJobList, setFilterJobList] = useState(humanResourcesDevJob);
  const [isDetailMenuShow, setIsDetailMenuShow] = useState(false);


  const detailMenuShow = () => {
    setIsDetailMenuShow(!isDetailMenuShow);
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
            </article>
            <article></article>
          </section>
        </Layout>
      </>
  );
}

export default HumanResources;