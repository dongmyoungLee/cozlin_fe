import Layout from "../../blocks/Layout";
import classes from '../../../styles/pages/layout/header.module.css';
import logo from '../../../asset/images/logo.png';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {pageNavigatorAction} from "../../../ducks/pageNavigator";

const Header = () => {
  const dispatch = useDispatch();
  const isCompany = useSelector(state => state.pageNavigator.isCompany);
  const navigate = useNavigate();

  const pageNavigationHandler = () => {

    dispatch(pageNavigatorAction.isCompany(!isCompany));

    if (isCompany) {
      navigate('/');
    } else {
      navigate('/company');
    }

  }

  const userType = isCompany ?  <p>일반 회원 바로가기</p> : <p>기업 서비스</p>;

  return (
      <header className={classes.header}>
        <Layout>
          <div className={classes.flexWrap}>
            <div className={classes.flexItem}>
              <div className={classes.logo}>
                <Link className={classes.blockOption} to='/'>
                  <img className={classes.img} src={logo} alt='cozlin_logo' />
                </Link>
              </div>
              <nav>
                <ul className={classes.flexItem}>
                  <li><Link to='/humanResources'>인재 채용</Link></li>
                  <li><Link to='/announcement'>채용 공고</Link></li>
                </ul>
              </nav>
            </div>
            <div className={classes.flexItem}>
              <Link className={classes.loginText} to='/login'>로그인 / 회원가입</Link>
              <div className={classes.verticalSpace}></div>
              <div className={classes.categoryBoxCss} onClick={pageNavigationHandler}>
                {userType}
              </div>
            </div>
          </div>
        </Layout>
      </header>
  );
}

export default Header;