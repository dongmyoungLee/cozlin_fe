import MypageLayout from "../../blocks/MypageLayout";
import classes from '../../../styles/pages/layout/mypage.module.css';
import {useSelector} from "react-redux";
import Button from "../../atoms/Button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {
  humanResourcesCareer,
  humanResourcesCategory,
  humanResourcesDesignJob,
  humanResourcesDevJob,
  humanResourcesEtcJob,
  humanResourcesMarketingJob,
  humanResourcesPlannerJob,
  humanResourcesSchoolStatus
} from "../../../common/Menus";
import InputUpdateBox from "../../blocks/InputUpdateBox";
import InputSkillBox from "../../blocks/InputSkillBox";
import InputUpdateInputBox from "../../blocks/InputUpdateInputBox";

const ProfileUpdate = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const navigate = useNavigate();
  const [changeMenuList, setChangeMenuList] = useState([{menuName : '선택'}]);
  const [userCareerYn, setUserCareerYn] = useState(true);

  // profile저장용 변수
  const [userDesiredJobGroup, setUserDesiredJobGroup] = useState(isLogin.userDesiredJobGroup);
  const [userDesiredJob, setUserDesiredJob] = useState(isLogin.userDesiredJob);
  const [userDesiredJobGroupCareer, setUserDesiredJobGroupCareer] = useState(isLogin.userDesiredJobGroupCareer);
  const [userJobSkill, setUserJobSkill] = useState([]);
  const [userLastCompany, setUserLastCompany] = useState('');
  const [userLastJobGroup, setUserLastJobGroup] = useState('');
  const [userLastJobGroupCareer, setUserLastJobGroupCareer]= useState('');
  const [userLastSchoolName, setUserLastSchoolName] = useState('');
  const [userLastSchoolStatus, setUserLastSchoolStatus]= useState(isLogin.userLastSchoolStatus);
  const [userLastSchoolDept, setUserLastSchoolDept] = useState('');

  const settingCategoryHandler = (data) => {
    // data -> e.target.querySelector("li").innerText
    // 자식태그에서 드롭다운 메뉴 하나를 선택하면 실행되는 함수.

    switch (data.label) {
      case '직군' :
        setUserDesiredJobGroup(data.text);
      break;

      case '직무' :
        setUserDesiredJob(data.text);
      break;

      case '직무 경력' :
        setUserDesiredJobGroupCareer(data.text);
      break;

      case '이수 상태' :
        setUserLastSchoolStatus(data.text);
      break;
    }

    switch(data.text) {

      case '개발' :
        setChangeMenuList(humanResourcesDevJob);
      break;

      case '기획' :
        setChangeMenuList(humanResourcesPlannerJob);
      break;

      case '마케팅' :
        setChangeMenuList(humanResourcesMarketingJob);
      break;

      case '디자인' :
        setChangeMenuList(humanResourcesDesignJob);
      break;

      case '경영, 인사, 운영' :
        setChangeMenuList(humanResourcesEtcJob);
      break;

      // 모두 아닐시
      default :
      return;
    }
  }

  const settingSkills = (data) => {
    setUserJobSkill(data);
  }

  const userCareerYnBtnChange = () => {
    setUserCareerYn(true);
  }
  const userNotCareerYnBtnChange = () => {
    setUserCareerYn(false);
  }

  const companyNameHandler = (e) => {
    setUserLastCompany(e.target.value);
  }
  const careerJonHandler = (e) => {
    setUserLastJobGroup(e.target.value);
  }
  const careerYearHandler = (e) => {
    setUserLastJobGroupCareer(e.target.value);
  }
  const schoolNameHandler = (e) => {
    setUserLastSchoolName(e.target.value);
  }

  const deptNameHandler = (e) => {
    setUserLastSchoolDept(e.target.value);
  }

  const saveUserProfile = (e) => {
    console.log(userDesiredJobGroup);
    console.log(userDesiredJob);
    console.log(userDesiredJobGroupCareer);
    console.log(userJobSkill);
    console.log(userLastCompany);
    console.log(userLastJobGroup);
    console.log(userLastJobGroupCareer);
    console.log(userLastSchoolName);
    console.log(userLastSchoolStatus);
    console.log(userLastSchoolDept);
  }

   return(
    <MypageLayout remove_height="profile">
      <div className={classes.account}>
        <div className={classes.firstSection}>
          <div className={classes.leftInner}>
            <p className={classes.leftInnerTopText}>희망 직무</p>
            <p className={classes.leftInnerBotText}>지원할 직무와 관련 경력을 입력해 주세요.</p>
          </div>
          <div className={classes.rightInner}>
            <InputUpdateBox label="직군" menuList={humanResourcesCategory} settingCategory={settingCategoryHandler} />
            <InputUpdateBox label="직무" menuList={changeMenuList} settingCategory={settingCategoryHandler} />
            <InputUpdateBox label="직무 경력" menuList={humanResourcesCareer} settingCategory={settingCategoryHandler} />
            <InputSkillBox label="주요 스킬" settingSkills={settingSkills} />
            <p className={classes.infoText}>*선택 사항이며, 최대 3개까지 입력 가능합니다.</p>
          </div>
        </div>

        <div className={classes.line2}></div>

        <div className={classes.firstSection}>
          <div className={classes.leftInner}>
            <p className={classes.leftInnerTopText}>최종 경력</p>
          </div>
          <div className={classes.rightInner}>
            <div className={classes.selectSection}>
              <div className={classes.selectText}>
                <p>최종 경력</p>
              </div>
              <div className={classes.choiceBtn}>
                <div className={classes.choiceBtnWrap}>
                  <button style={{backgroundColor : userCareerYn ? '#0062df' : '#fff', color : userCareerYn ? '#fff' : '#5F666B', border : userCareerYn ? '1px solid #6E50FF' : '1px solid #E4EBF0'}} className={classes.leftBtn} onClick={userCareerYnBtnChange} >
                    <p>신입</p>
                  </button>
                  <button style={{backgroundColor : !userCareerYn ? '#0062df' : '#fff', color : !userCareerYn ? '#fff' : '#5F666B', border : !userCareerYn ? '1px solid #6E50FF' : '1px solid #E4EBF0'}} className={classes.rightBtn} onClick={userNotCareerYnBtnChange}>
                    <p>경력</p>
                  </button>
                </div>
              </div>
            </div>
            {!userCareerYn && <div className={classes.careerSection}>
              <InputUpdateInputBox onChange={companyNameHandler} label="회사명" />
              <InputUpdateInputBox onChange={careerJonHandler} label="직무" />
              <InputUpdateInputBox onChange={careerYearHandler} label="재직 기간" placeholder="예) 1년 2개월" />
            </div>}
          </div>
        </div>

        <div className={classes.line2}></div>

        <div className={classes.firstSection}>
          <div className={classes.leftInner}>
            <p className={classes.leftInnerTopText}>희망 직무</p>
          </div>
          <div className={classes.rightInner}>
            <InputUpdateInputBox onChange={schoolNameHandler} label="학교명" />
            <InputUpdateBox label="이수 상태" menuList={humanResourcesSchoolStatus} settingCategory={settingCategoryHandler} />
            <InputUpdateInputBox onChange={deptNameHandler} label="학과명" />
          </div>
        </div>

        <div className={classes.line2}></div>

        <div className={classes.firstSection}>
          <div className={classes.leftInner}>
            <p className={classes.leftInnerTopText}>이력서</p>
            <p className={classes.leftInnerBotText}>다른 사이트에서 작성한 이력서, 자유 이력서 모두 좋아요!</p>
          </div>
          <div className={classes.rightInner}>
            <InputUpdateInputBox onChange={companyNameHandler} />
          </div>
        </div>
      </div>
      <div className={classes.edit_profile}>
        <div className={classes.edit_profile_wrap}>
          <div className={classes.textArea}>
            <p className={classes.topText}>프로필 수정</p>
            <p className={classes.botText}>수정한 내용을 저장할까요?</p>
          </div>
          <div className={classes.btnArea}>
            <Button btn={{
              type : '',
              value : '저장하기',
              onClick : saveUserProfile
            }} />
            <div className={classes.cancelBtn}>
              <p>취소하기</p>
            </div>
          </div>
        </div>
      </div>
    </MypageLayout>
   );
}

export default ProfileUpdate;