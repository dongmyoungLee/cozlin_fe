import classes from "../../styles/blocks/MypageToolTipMenu.module.css";
import MypageList from "./MypageList";
import {mypageFavMenu, mypageTooltipMenu} from "../../common/Menus";
import {loginCheckAction} from "../../ducks/loginCheck";
import {useDispatch} from "react-redux";
import logout from '../../asset/images/logout.png';
import MobileMenuList from "./MobileMenuList";

const MypageToolTipMenu = (props) => {
  const dispatch = useDispatch();

  const clickMethods = (flag) => {


    props.hide();

  }

  const logoutHandler =  () => {
    dispatch(loginCheckAction.isLogin(false));
    props.hide();
  }


  return (
      <>
        <div className={classes.space1}></div>
        <div className={classes.mypageMenu}>
          <ul className={classes.flexOption}>
            {mypageFavMenu.map((item, idx) => (
                <MypageList key={item.menuName} menuTitle={item.menuName} imgPath={item.imgPath} onClick={() => {clickMethods(item.clickFlag)}} />
            ))}
            {mypageTooltipMenu.map((item, idx) => (
                <MypageList key={item.menuName} menuTitle={item.menuName} imgPath={item.imgPath} onClick={() => {clickMethods(item.clickFlag)}} />
            ))}
            <MypageList menuTitle='로그아웃' imgPath={logout} onClick={() => {logoutHandler()}} />
          </ul>
        </div>
        <div className={classes.space2}></div>
      </>
  );
}

export default MypageToolTipMenu;