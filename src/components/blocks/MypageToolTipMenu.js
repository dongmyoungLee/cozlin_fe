import classes from "../../styles/blocks/MypageToolTipMenu.module.css";
import MypageList from "./MypageList";
import {mypageFavMenu, mypageTooltipMenu} from "../../common/Menus";
import {loginCheckAction} from "../../ducks/loginCheck";
import {useDispatch, useSelector} from "react-redux";
import logout from '../../asset/images/logout.png';
import {pageNavigatorAction} from "../../ducks/pageNavigator";
import {useNavigate} from "react-router-dom";

const MypageToolTipMenu = (props) => {
  const dispatch = useDispatch();
  const isTooltipMenu = useSelector(state => state.pageNavigator.isMobileTooltipMenu);
  const navigate = useNavigate();
  const clickMethods = (flag) => {
    dispatch(pageNavigatorAction.isMobileTooltipMenu(!isTooltipMenu));
    navigate(`/applicant/${flag}`);
  }

  const logoutHandler =  () => {
    const logout = {
      isLogin : false,
      token : null,
      userId : null,
      loginEnteredTime : null,
    }
    dispatch(loginCheckAction.logout(logout));
    props.hide();
    navigate("/humanResources");
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