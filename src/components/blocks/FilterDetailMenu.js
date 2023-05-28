import classes from "../../styles/pages/layout/humanResources.module.css";

const FilterDetailMenu = (props) => {


  return (
    <>
      <div className={classes.detailMenu}>
        <ul>
          {props.menuList.map((item, idx) => (
            <div className={classes.filterFlex} key={idx}>
              <div className={classes.flexCommon}>
                <input id={'filter' + idx} className={classes.checkBoxInput} type="checkbox" />
                <label htmlFor={'filter' + idx} className={classes.labelOption}>{item.menuName}</label>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FilterDetailMenu;