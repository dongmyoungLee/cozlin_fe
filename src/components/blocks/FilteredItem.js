import classes from '../../styles/pages/layout/humanResources.module.css';
const FilteredItem = (props) => {

  return (
    <div className={classes.itemWrap}>
      {props.item.map((item, idx) => (
        <div key={idx} onClick={props.onClick} className={classes.filterItem}>
          <span value={item} className={classes.spanMr}>{item}</span>
          <span value={item} className={classes.spanSize}>×</span>
        </div>
      ))}
    </div>
  );
}

export default FilteredItem;