import Layout from "../UI/Layout";
import classes from '../../styles/Layout/header.module.css';
import logo from '../../asset/images/logo.png';

const Header = () => {
  return (
      <header className={classes.header}>
        <Layout>
          <div className={classes.flexWrap}>
            <div className={classes.flexItem}>
              <div className={classes.logo}>
                <a className={classes.blockOption} href='/'>
                  <img className={classes.img} src={logo} alt='cozlin_logo' />
                </a>
              </div>
              <nav>
                <ul className={classes.flexItem}>
                  <li><a href='/t1'>인재 채용</a></li>
                  <li><a href='/t2'>채용 공고</a></li>
                </ul>
              </nav>
            </div>
            <div className={classes.flexItem}>
              <a className={classes.loginText} href='/login'>로그인 / 회원가입</a>
              <div className={classes.verticalSpace}></div>
              <div className={classes.categoryBoxCss}>
                <a href='/company'>기업 서비스</a>
              </div>
            </div>
          </div>
        </Layout>
      </header>
  );
}

export default Header;