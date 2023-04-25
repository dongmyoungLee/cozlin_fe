import classes from '../../../styles/pages/layout/MobileHeader.module.css';
import logo from '../../../asset/images/logo.png';
import menu from '../../../asset/images/mobilemenu.png';
import { useState } from "react";
import MobileMenuList from "../../blocks/MobileMenuList";


const MobileHeader = () => {
  const [isMobileMenuPage, setIsMobileMenuPage] = useState(false);

  const mobileMenuPageHandler = () => {
    setIsMobileMenuPage(!isMobileMenuPage);
  }

  const mobileMenuPageHideHandler = () => {
    setIsMobileMenuPage(false);
  }



  const mobilePageMenu = <main className={classes.mobileMenuWrap}>
                           <section className={classes.section}>
                             <MobileMenuList endPoint='/humanResources' onClick={mobileMenuPageHideHandler} >인재 채용</MobileMenuList>
                             <MobileMenuList endPoint='/announcement' onClick={mobileMenuPageHideHandler}>채용 공고</MobileMenuList>
                           </section>
                           <section className={classes.section}>
                             <MobileMenuList endPoint='/company' onClick={mobileMenuPageHideHandler}>기업 서비스</MobileMenuList>
                           </section>
                           <section className={classes.section}>
                              <MobileMenuList endPoint='/login' onClick={mobileMenuPageHideHandler}>로그인 / 회원가입</MobileMenuList>
                           </section>
                         </main>

  return (
      <>
        <header className={classes.header}>
          <div className={classes.mobileHeaderWrapper}>
            <img src={logo} className={classes.img} />
            <img src={menu} className={classes.menuImg} onClick={mobileMenuPageHandler} />
          </div>
        </header>
        {isMobileMenuPage && mobilePageMenu}
      </>
  );
}

export default MobileHeader;