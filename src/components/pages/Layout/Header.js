import Layout from "../../blocks/Layout";
import classes from '../../../styles/pages/layout/header.module.css';
import logo from '../../../asset/images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pageNavigatorAction } from "../../../ducks/pageNavigator";
import mypageIcon from '../../../asset/images/mypage.png';
import MypageToolTipMenu from "../../blocks/MypageToolTipMenu";
import HeaderItem from "../../blocks/HeaderItem";
import { headerMenu } from "../../../common/Menus";
import {useState} from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isCompany = useSelector(state => state.pageNavigator.isCompany);
  const isLogin = useSelector(state => state.loginCheck.loginInfo.isLogin);

  const navigate = useNavigate();
  const [isMypageShow, setIsMypageShow] = useState(false);

  const pageNavigationHandler = () => {
    dispatch(pageNavigatorAction.isCompany(!isCompany));

    if (isCompany) {
      navigate('/');
    } else {
      navigate('/company');
    }
  }

  const mypageMenuShow = () => {
    setIsMypageShow(!isMypageShow);
  }




  const userType = isCompany ?  <p>일반 회원 바로가기</p> : <p>기업 서비스</p>;

  const notLoginMenu = <div className={classes.flexItem}>
                        <Link className={classes.loginText} to='/login'>로그인 / 회원가입</Link>
                        <div className={classes.verticalSpace}></div>
                        <div className={classes.categoryBoxCss} onClick={pageNavigationHandler}>
                          {userType}
                        </div>
                      </div>;

  const loginedMenu = <div><img className={classes.mypageLogo} src={mypageIcon} onClick={mypageMenuShow} alt='loginMenu' /></div>

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
                  {headerMenu.map((item, idx) => (
                      <HeaderItem key={item.menuName} menuName={item.menuName} menuLink={item.menuLink} />
                  ))}
                </ul>
              </nav>
            </div>
            {isLogin && loginedMenu}
            {!isLogin && notLoginMenu}
            {isMypageShow && <MypageToolTipMenu hide={mypageMenuShow} />}
          </div>
        </Layout>
      </header>
  );
}

export default Header;