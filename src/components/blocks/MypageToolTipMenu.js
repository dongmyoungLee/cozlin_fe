import classes from "../../styles/blocks/MypageToolTipMenu.module.css";
import MypageList from "./MypageList";
import {mypageTooltipMenu} from "../../common/Menus";

const MypageToolTipMenu = (props) => {



  return (
      <>
        <div className={classes.space1}></div>
        <div className={classes.mypageMenu}>
          <ul className={classes.flexOption}>
            {mypageTooltipMenu.map((item, idx) => (
                <MypageList key={item.menuName} menuTitle={item.menuName} imgPath={item.imgPath} />
            ))}
          </ul>
        </div>
        <div className={classes.space2}></div>
      </>
  );
}

export default MypageToolTipMenu;