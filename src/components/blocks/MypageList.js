import classes from "../../styles/blocks/MypageToolTipMenu.module.css";
import {useState} from "react";



const MypageList = (props) => {


  return (
      <li className={classes.li_option} onClick={props.onClick} style={{borderRadius : props.borderRaPx, marginBottom : props.marginBot}}>
        <img src={props.imgPath} className={classes.img_option} alt='mypageMenu'/>
        <span>{props.menuTitle}</span>
      </li>
  );
}

export default MypageList;