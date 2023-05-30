import classes from '../../styles/pages/layout/mypage.module.css';

const App = () =>{
   return(
      <div className={classes.account}>
         <div className={classes.management_box}>
            <div className={classes.dark}>
               <h2>프로필 관리</h2>
               <p>작성한 프로필로 입사지원을 할 수 있습니다.</p>
            </div>
            <button className={classes.box}>
               <a className={classes.edit} href="https://www.kurly.com/board/notice">수정하기</a>
            </button>
         </div>
         <div className={classes.line}></div>
      </div>
   )
}

export default App;


