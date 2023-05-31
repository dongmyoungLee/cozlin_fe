import classes from '../../styles/pages/layout/humanResources.module.css';
const FilteredItem = (props) => {
  return (
    <div className={classes.itemWrap}>
      <div className={classes.filterItem}>
        <span className={classes.spanMr}>프론트엔드 개발자</span>
        <span className={classes.spanSize}>×</span>
      </div>
    </div>
  );
}

export default FilteredItem;