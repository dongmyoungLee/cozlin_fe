import {useEffect, useRef, useState} from "react";
import classes from "../../styles/atoms/selectBox.module.css";
import arrowBot from "../../asset/images/arrowbottom.png";
import arrowTop from "../../asset/images/arrowtop.png";
import {useSelector} from "react-redux";


const SelectBox = (props) => {
   const myMenuRef = useRef(null);
   const myMenuRef2 = useRef(null);
   const [isOpenDropDown, setIsOpenDropDown] = useState(false);
   const [btnCategoryText, setBtnCategoryText] = useState('선택');

   const isLogin = useSelector(state => state.loginCheck.loginInfo);

   useEffect(() => {

      switch (props.label) {
         case '직군' :
            setBtnCategoryText(isLogin.userDesiredJobGroup);
            break;
         case '직무' :
            setBtnCategoryText(isLogin.userDesiredJob);
            break;
         case '직무 경력' :
            setBtnCategoryText(isLogin.userDesiredJobGroupCareer);
            break;
         case '주요 스킬' :
            setBtnCategoryText(isLogin.userDesiredJobGroup);
            break;
         case '이수 상태' :
            setBtnCategoryText(isLogin.userLastSchoolStatus);
            break;
      }
      const handleClickOutside = (e) => {

         if (myMenuRef.current && !myMenuRef.current.contains(e.target) && !myMenuRef2.current.contains(e.target)) {
            setIsOpenDropDown(false);
         }

      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside``);
      };
   }, [myMenuRef]);

   const btnClickDropDown = () => {
      setIsOpenDropDown(!isOpenDropDown);
   }

   const btnSelectMenu = (e) => {
      // 내가 누른 메뉴의 텍스트가 버튼의 텍스트로 가야함.
      // e.target -> 내 이벤트가 발생한 지점의 타겟
      setBtnCategoryText(e.target.querySelector("li").innerText);

      // 부모 컴포넌트에 있는 settingCategory 를 실행함 e.target.querySelector("li").innerText 이걸 가지고
      const sendData = {
         text : e.target.querySelector("li").innerText,
         label : props.label
      }

      props.settingCategory(sendData);

      // 메뉴 닫아줌..
      setIsOpenDropDown(false);
   }
   return (
      <div className={classes.sbWrap}>
         <div className={classes.btnWrap} onClick={btnClickDropDown} ref={myMenuRef2}>
            <button className={classes.btnOption}>{btnCategoryText}</button>
            <div>{isOpenDropDown ?  <img className={classes.arrowSize} src={arrowTop} /> : <img className={classes.arrowSize} src={arrowBot} /> }</div>
         </div>
         {isOpenDropDown && <div ref={myMenuRef} className={classes.dropDownMenu}>
            <ul className={classes.dropDownMenu_ul}>

               {props.menuList.map((item, idx) => (
                  <div key={idx} className={classes.dropDownMenuFlex} onClick={btnSelectMenu}>
                        <li key={idx} className={classes.dropDownMenu_li}>{item.menuName}</li>
                  </div> 
               ))}

            </ul>
         </div>}
         
      </div>
   );
}

export default SelectBox;