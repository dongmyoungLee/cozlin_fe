import classes from '../../../styles/pages/layout/mobileHeader.module.css';
import logo from '../../../asset/images/logo.png';
import menu from '../../../asset/images/mobilemenu.png';
import { useState } from "react";
import MobileMenuList from "../../blocks/MobileMenuList";
import {useDispatch, useSelector} from "react-redux";
import {loginCheckAction} from "../../../ducks/loginCheck";
import {headerMenu, mypageTooltipMenu} from "../../../common/Menus";


const MobileHeader = () => {
  const [isMobileMenuPage, setIsMobileMenuPage] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.loginCheck.isLogin);

  const mobileMenuPageHandler = () => {
    setIsMobileMenuPage(!isMobileMenuPage);
  }

  const mobileMenuPageHideHandler = () => {
    setIsMobileMenuPage(false);
  }

  const mobileLogOutHandler = () => {
    dispatch(loginCheckAction.isLogin(false));
    setIsMobileMenuPage(false);
  }

  const loginMenu = <>
                      <section className={classes.section}>
                        {mypageTooltipMenu.map((item, idx) => (
                            <MobileMenuList key={item.menuName} endPoint={item.path} onClick={mobileMenuPageHideHandler} menuName={item.menuName} />
                        ))}
                      </section>
                      <section className={classes.section}>
                        <MobileMenuList endPoint='/' onClick={mobileLogOutHandler} menuName='로그아웃' />
                      </section>
                    </>;

  const notLoginMenu = <section className={classes.section}>
                        <MobileMenuList endPoint='/login' onClick={mobileMenuPageHideHandler} menuName='로그인 / 회원가입' />
                      </section>;


  const mobilePageMenu = <main className={classes.mobileMenuWrap}>
                           <section className={classes.section}>
                             {headerMenu.map((item, idx) => (
                                 <MobileMenuList key={item.menuName} endPoint={item.menuLink} onClick={mobileMenuPageHideHandler} menuName={item.menuName} />
                             ))}
                           </section>
                           <section className={classes.section}>
                             <MobileMenuList endPoint='/company' menuName='기업 서비스' onClick={mobileMenuPageHideHandler} />
                           </section>
                           {!isLogin && notLoginMenu}
                           {isLogin && loginMenu}
                         </main>

  return (
      <>
        <header className={classes.header}>
          <div className={classes.mobileHeaderWrapper}>
            <img src={logo} className={classes.img} alt='cozlin_logo' />
            <img src={menu} className={classes.menuImg} onClick={mobileMenuPageHandler} alt='menu_logo' />
          </div>
        </header>
        {isMobileMenuPage && mobilePageMenu}
      </>
  );
}

export default MobileHeader;