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
  const [userJobFilter, setUserJobFilter] = useState([]);
  const [userCareerFilter, setUserCareerFilter] = useState([]);
  const [userRegionFilter, setUserRegionFilter] = useState([]);
  const [filterBlock, setFilterBlock] = useState([]);

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
      // 직무필터 item tmp 배열..
      const jobArray = [...userJobFilter, e.target.value];

      // 필터 카운트 추가..
      setSelectJobCategoryCount(selectJobCategoryCount + 1);

      // 직무필터 useState 넣기..
      setUserJobFilter(jobArray);

      // 필터내용 기억해서 블록 만들려고 전달..
      const tmp = [...filterBlock, e.target.value];
      setFilterBlock(tmp);
    } else {

      // 체크 해제시 배열에서 뺀다..
      setUserJobFilter((prevItems) => prevItems.filter((item) => item !== e.target.value));
      setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.value));

      // 필터 카운트 감소
      setSelectJobCategoryCount(selectJobCategoryCount - 1);
    }

  }

  const checkBoxChangeCareerHandler = (e) => {
    if (e.target.checked) {
      const careerArray = [...userCareerFilter, e.target.value];

      setSelectCareerCategoryCount(selectCareerCategoryCount + 1);

      setUserCareerFilter(careerArray);

      const tmp = [...filterBlock, e.target.value];
      setFilterBlock(tmp);
    } else {

      setUserCareerFilter((prevItems) => prevItems.filter((item) => item !== e.target.value));
      setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.value));

      setSelectCareerCategoryCount(selectCareerCategoryCount - 1);
    }
  }

  const checkBoxChangeRegionHandler = (e) => {
    if (e.target.checked) {
      const regionArray = [...userRegionFilter, e.target.value];

      setSelectRegionCategoryCount(selectRegionCategoryCount + 1);

      setUserRegionFilter(regionArray);

      const tmp = [...filterBlock, e.target.value];
      setFilterBlock(tmp);
    } else {
      setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.value));
      setSelectRegionCategoryCount(selectRegionCategoryCount - 1);
    }
  }

  const filterRemoveBlock = (e) => {

    setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.getAttribute('value')));

    if (userJobFilter.includes(e.target.getAttribute('value'))) {
      // 필터 카운트 감소..
      setSelectJobCategoryCount(selectJobCategoryCount - 1);
    }

    if (userCareerFilter.includes(e.target.getAttribute('value'))) {
      setSelectCareerCategoryCount(selectCareerCategoryCount - 1);
    }

    if (userRegionFilter.includes(e.target.getAttribute('value'))) {
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

              <FilterButton userMemoryFilter={userCareerFilter} onChange={checkBoxChangeCareerHandler} onClick={detailMenuCareerShow} left="92px" isDetailMenuShow={isDetailCareerMenuShow} menuHide={setIsDetailCareerMenuShow} menuList={careerFilterCategory} value="경력" count={selectCareerCategoryCount}/>

              <FilterButton userMemoryFilter={userRegionFilter} onChange={checkBoxChangeRegionHandler} onClick={detailMenuRegionShow} left="182px" isDetailMenuShow={isDetailRegionMenuShow} menuHide={setIsDetailRegionMenuShow} menuList={regionFilterCategory} value="지역" count={selectRegionCategoryCount}/>
            </article>
            <article>
              <FilteredItem item={filterBlock} onClick={filterRemoveBlock} />
            </article>
          </section>
        </Layout>
      </>
  );
}

export default HumanResources;