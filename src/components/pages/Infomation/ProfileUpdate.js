import MypageLayout from "../../blocks/MypageLayout";
import classes from '../../../styles/pages/layout/mypage.module.css';
import { useSelector } from "react-redux";
import InputComponent from "../../blocks/InputComponent";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import SelectBox from "../../atoms/SelectBox";
import { useState } from "react";
import { humanResourcesDevJob, humanResourcesCategory, humanResourcesPlannerJob, humanResourcesMarketingJob, humanResourcesDesignJob, humanResourcesEtcJob } from "../../../common/Menus";

const ProfileUpdate = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const navigate = useNavigate();
  const [changeMenuList, setChangeMenuList] = useState([{menuName : '선택'}]);


  const currPwdHandler = (e) => {
    //
  }

  const changePwdHandler = (e) => {
    //
  }

  const changeCheckPwdHandler = (e) => {
    //
  }

  const settingCategoryHandler = (data) => {
    // data -> e.target.querySelector("li").innerText
    // 자식태그에서 드롭다운 메뉴 하나를 선택하면 실행되는 함수.
    
    switch(data) {

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

   return(
    <MypageLayout>
      <div className={classes.account}>
        <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}} value={{first : '' , second :'', third : '', fourth : ''}} placeholder={{first : "********", second : "********", third : "********"}} use="isNotReadOnly" type="password" label="비밀번호" inputTitle={{first : '현재 비밀번호', second : '변경할 비밀번호', third : '비밀번호 확인'}}  />
        <div className={classes.line}></div>

        {/* 자식 컴포넌트에서 드롭다운 메뉴를 고를때 나오는 값을 여기(부모컴포넌트)로 보내줘야함 */}
        {/* props 넘겨줄때 값이면 보통 부모에서 자식으로 주고 넘겨줄때 함수면 보통 자식에서 부모로 뭔가 보내주고 있는거임 (값 = 파란색, 함수 = 노란색) */}
        <SelectBox menuList={humanResourcesCategory} settingCategory={settingCategoryHandler} />
        <SelectBox menuList={changeMenuList} settingCategory={settingCategoryHandler} />

      </div>
      <div className={classes.edit_profile}>
         <div className={classes.title_container}>
            <div className={classes.title_h2}>프로필수정</div>
            <div className={classes.title_p}>수정한 내용을 저장할까요?</div>
         </div>
         <div className={classes.button_container}>
            <button className={classes.save_btn}></button>
            <button className={classes.cancel_btn}></button>
         </div>
      </div>
    </MypageLayout>
   );
}

export default ProfileUpdate;