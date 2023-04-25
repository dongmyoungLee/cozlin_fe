import classes from '../../styles/blocks/Layout.module.css';

const Layout = (props) => {
  return <div className={classes.layoutCenter}>{props.children}</div>
}

export default Layout;