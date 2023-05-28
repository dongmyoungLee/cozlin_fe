import classes from "../../styles/pages/layout/humanResources.module.css";
import arrow from "../../asset/images/arrowbottom.png";

const FilterButton = (props) => {

  return (
    <>
      <button className={classes.filterOption} onClick={props.onClick}>
        <div className={classes.marginfilter}>
          <span className={classes.filterText}>{props.value}</span>
          <span className={classes.filterNum}>{props.count}</span>
        </div>
        <div className={classes.displayFilter}>
          <img src={arrow} className={classes.filterImgOption} />
        </div>
      </button>
    </>
  );
}

export default FilterButton;