import Layout from "../../blocks/Layout";
import WelcomeInfo from "../../blocks/WelcomeInfo";
import CategorySection from "../../blocks/CategorySection";
import classes from "../../../styles/pages/layout/humanResources.module.css";
import FilterButton from "../../blocks/FilterButton";
import {useEffect, useState} from "react";
import {
  careerFilterCategory, humanResourcesDesignJob,
  humanResourcesDevJob, humanResourcesEtcJob, humanResourcesMarketingJob,
  humanResourcesPlannerJob,
  regionFilterCategory
} from "../../../common/Menus";
import FilteredItem from "../../blocks/FilteredItem";

const HumanResources = () => {
  const [category, setCategory] = useState('개발');
  const [filterJobList, setFilterJobList] = useState(humanResourcesDevJob);
  const [isDetailJobMenuShow, setIsDetailJobMenuShow] = useState(false);
  const [isDetailCareerMenuShow, setIsDetailCareerMenuShow] = useState(false);
  const [isDetailRegionMenuShow, setIsDetailRegionMenuShow] = useState(false);
  const [selectJobCategoryCount, setSelectJobCategoryCount] = useState(0);
  const [selectCareerCategoryCount, setSelectCareerCategoryCount] = useState(0);
  const [selectRegionCategoryCount, setSelectRegionCategoryCount] = useState(0);
  const [userSelectFilter, setUserSelectFilter] = useState([]);
  const [userJobFilter, setUserJobFilter] = useState([]);


  useEffect(() => {
    switch (category) {
      case '개발' :
        setFilterJobList(humanResourcesDevJob);
      break;
      case '기획' :
        setFilterJobList(humanResourcesPlannerJob);
      break;
      case '마케팅' :
        setFilterJobList(humanResourcesMarketingJob);
      break;
      case '디자인' :
        setFilterJobList(humanResourcesDesignJob);
      break;
      case '경영, 인사, 운영' :
        setFilterJobList(humanResourcesEtcJob);
      break;
    }

  }, [category])

  const detailMenuJobShow = () => {
    setIsDetailJobMenuShow(!isDetailJobMenuShow);
  }
  const detailMenuCareerShow = () => {
    setIsDetailCareerMenuShow(!isDetailCareerMenuShow);
  }

  const detailMenuRegionShow = () => {
    setIsDetailRegionMenuShow(!isDetailRegionMenuShow);
  }

  const checkBoxChangeHandler = (e) => {
    if (e.target.checked) {
      const newArray = [...userJobFilter, e.target.value];

      setSelectJobCategoryCount(selectJobCategoryCount + 1);
      setUserSelectFilter([...userSelectFilter]);

      setUserJobFilter(newArray);

    } else {
      setSelectJobCategoryCount(selectJobCategoryCount - 1);
    }


  }

  const checkBoxChangeCareerHandler = (e) => {
    if (e.target.checked) {
      setSelectCareerCategoryCount(selectCareerCategoryCount + 1);
    } else {
      setSelectCareerCategoryCount(selectCareerCategoryCount - 1);
    }
  }

  const checkBoxChangeRegionHandler = (e) => {
    if (e.target.checked) {
      setSelectRegionCategoryCount(selectRegionCategoryCount + 1);
    } else {
      setSelectRegionCategoryCount(selectRegionCategoryCount - 1);
    }
  }

  return (
      <>
        <Layout >
          <WelcomeInfo />
          <CategorySection setCategory={setCategory} />
          <section className={classes.filterSection}>
            <article className={classes.filterArticle}>
              <FilterButton userMemoryFilter={userJobFilter} onChange={checkBoxChangeHandler} onClick={detailMenuJobShow} isDetailMenuShow={isDetailJobMenuShow} menuHide={setIsDetailJobMenuShow} menuList={filterJobList} value="직무" count={selectJobCategoryCount}/>

              <FilterButton onChange={checkBoxChangeCareerHandler} onClick={detailMenuCareerShow} left="92px" isDetailMenuShow={isDetailCareerMenuShow} menuHide={setIsDetailCareerMenuShow} menuList={careerFilterCategory} value="경력" count={selectCareerCategoryCount}/>

              <FilterButton onChange={checkBoxChangeRegionHandler} onClick={detailMenuRegionShow} left="182px" isDetailMenuShow={isDetailRegionMenuShow} menuHide={setIsDetailRegionMenuShow} menuList={regionFilterCategory} value="지역" count={selectRegionCategoryCount}/>
            </article>
            <article>
              <FilteredItem />
            </article>
          </section>
        </Layout>
      </>
  );
}

export default HumanResources;