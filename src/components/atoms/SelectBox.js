import { useState } from "react";
import classes from "../../styles/atoms/selectBox.module.css";


const SelectBox = (props) => {
   // 왼쪽 = 변수 오른쪽 = 함수 
   // 오른쪽에 있는 함수를 써야 왼쪽에 있는 변수를 바꿀수있음
   // 맨오른쪽 초기값
   const [isOpenDropDown, setIsOpenDropDown] = useState(false);
   const [btnCategoryText, setBtnCategoryText] = useState('선택');

   const btnClickDropDown = () => {
      setIsOpenDropDown(!isOpenDropDown);
   }

   const btnSelectMenu = (e) => {
      // 내가 누른 메뉴의 텍스트가 버튼의 텍스트로 가야함.
      // e.target -> 내 이벤트가 발생한 지점의 타겟
      setBtnCategoryText(e.target.querySelector("li").innerText);

      // 부모 컴포넌트에 있는 settingCategory 를 실행함 e.target.querySelector("li").innerText 이걸 가지고
      props.settingCategory(e.target.querySelector("li").innerText);

      // 메뉴 닫아줌..
      setIsOpenDropDown(false);
   }
   /**
    * 
    * 1 단계 무조건 일단 UI를 먼저만듬
    * 
    * 2 단계 뭘 누르면 뭐가 나오고 또 누르면 뭐가 들어가고 이러한 기능들을 모두 판단해야 함
    * 
    * - 버튼을 누르면 하단의 메뉴가 나왔다 사라졌다 함.
    * - 하단의 메뉴를 누르면 메뉴에 노출된 텍스트가 버튼의 텍스트로 변경되야함
    * - 하단의 메뉴 박스 외의 다른곳을 클릭해도 메뉴가 사라져야함
    * - 현재 선택되고 있는 메뉴가 하단메뉴를 열었을때 고정되야 함.
    * 
    * 
    * 3 단계 기능테스트 후 마무리
    * 
    * 
    * 
    * 
    * - 일단 UI 완성
    * - v표시부터 다 없앰
    * - 하단 드롭다운메뉴를 없앰
    * - 버튼을 클릭하면 드롭다운메뉴가 생겼다 사라졌다 하게 함
   *    (useState를 기본값을 false 로 선언하고 버튼을 클릭할때 왔다갔다하게 해줌)
    * - useState 로 스위치를 만들어서 눌르면 나오고 눌르면 들어가게 만들었음.
    * 
    * 
    * menu.js 에서 카테고리를 먼저 가져오고 그 개수만큼 하단 드롭다운메뉴를 만들었음
    * 드롭다운 메뉴를 누르면 하단 메뉴가 닫혀야함
    * 
    * 
    * 
    * 
    */
   return (
      <>
         <div className={classes.btnWrap} onClick={btnClickDropDown}>
            <button className={classes.btnOption}>{btnCategoryText}</button>
            <div>{isOpenDropDown ?  "♂" : "♀" }</div>
         </div>
         {isOpenDropDown && <div className={classes.dropDownMenu}>
            <ul className={classes.dropDownMenu_ul}>

               {props.menuList.map((item, idx) => (
                  <div key={idx} className={classes.dropDownMenuFlex} onClick={btnSelectMenu}>
                        {false && <span>√</span>}
                        <li key={idx} className={classes.dropDownMenu_li}>{item.menuName}</li>
                  </div> 
               ))}

            </ul>
         </div>}
         
      </>
   );
}

export default SelectBox;