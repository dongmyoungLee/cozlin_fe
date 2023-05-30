import Layout from "../../blocks/Layout";
import WelcomeInfo from "../../blocks/WelcomeInfo";
import CategorySection from "../../blocks/CategorySection";
import classes from "../../../styles/pages/layout/humanResources.module.css";
import FilterButton from "../../blocks/FilterButton";
import {useState} from "react";
import {humanResourcesDevJob} from "../../../common/Menus";

const HumanResources = () => {
  const [category, setCategory] = useState('개발');
  const [filterJobList, setFilterJobList] = useState(humanResourcesDevJob);
  const [isDetailMenuShow, setIsDetailMenuShow] = useState(false);
  const [selectCategoryCount, setSelectCategoryCount] = useState(0);

  const detailMenuShow = () => {
    setIsDetailMenuShow(!isDetailMenuShow);
  }

  const checkBoxChangeHandler = (e) => {
    if (e.target.checked) {
      setSelectCategoryCount(selectCategoryCount + 1);
    } else {
      setSelectCategoryCount(selectCategoryCount - 1);
    }

  }

  return (
      <>
        <Layout >
          <WelcomeInfo />
          <CategorySection setCategory={setCategory} />
          <section className={classes.filterSection}>
            <article className={classes.filterArticle}>
              <FilterButton onChange={checkBoxChangeHandler} onClick={detailMenuShow} isDetailJobMenuShow={isDetailMenuShow} menuHide={setIsDetailMenuShow} menuList={filterJobList} value="직무" count={selectCategoryCount}/>
            </article>
            <article></article>
          </section>
        </Layout>
      </>
  );
}

export default HumanResources;