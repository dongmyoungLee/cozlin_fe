import classes from '../../styles/UI/Layout.module.css';

const Layout = (props) => {
  return <div className={classes.layoutCenter}>{props.children}</div>
}

export default Layout;