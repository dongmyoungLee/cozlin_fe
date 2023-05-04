import classes from "../../styles/blocks/MypageToolTipMenu.module.css";
import MypageList from "./MypageList";
import {mypageTooltipMenu} from "../../common/Menus";
import {loginCheckAction} from "../../ducks/loginCheck";
import {useDispatch} from "react-redux";

const MypageToolTipMenu = (props) => {
  const dispatch = useDispatch();

  const clickMethods = (flag) => {

    switch (flag) {
      case 'logout' :
        dispatch(loginCheckAction.isLogin(false));
      break;

      default :
      break;
    }

    props.hide();

  }


  return (
      <>
        <div className={classes.space1}></div>
        <div className={classes.mypageMenu}>
          <ul className={classes.flexOption}>
            {mypageTooltipMenu.map((item, idx) => (
                <MypageList key={item.menuName} menuTitle={item.menuName} imgPath={item.imgPath} onClick={() => {clickMethods(item.clickFlag)}} />
            ))}
          </ul>
        </div>
        <div className={classes.space2}></div>
      </>
  );
}

export default MypageToolTipMenu;