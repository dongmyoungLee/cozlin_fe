import classes from "../../styles/pages/layout/mypage.module.css";

const MypageLayout = (props) => {
  return <div className={classes.wrap}>
          <div className={classes.layout}>{props.children}</div>
         </div>
}

export default MypageLayout;
