import classes from "../../styles/blocks/MypageToolTipMenu.module.css";



const MypageList = (props) => {

  return (
      <li className={classes.li_option} onClick={props.onClick}>
        <img src={props.imgPath} className={classes.img_option} alt='mypageMenu'/>
        <span>{props.menuTitle}</span>
      </li>
  );
}

export default MypageList;