import classes from "../../styles/blocks/MobileMenuList.module.css";
import {Link} from "react-router-dom";

const MobileMenuList = (props) => {

  return (
      <div>
        <Link to={props.endPoint} className={classes.mobileMenuListWrap} onClick={props.onClick}>
          <p className={classes.param}>{props.children}</p>
          <p className={classes.param}>＞</p>
        </Link>
      </div>
  );
}

export default MobileMenuList;