import classes from '../../styles/pages/layout/mypage.module.css';
import InputComponent from './InputComponent';
import InputBox from './InputBox';

const InputLayout = (props) =>{
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

         <InputComponent label="기본정보" inputTitle={{first : '이름', second : '연락처', third : '이메일'}} />
         <InputComponent label="희망직무" inputTitle={{first : '직군', second : '직무', third : '직무경력'}} />
         <InputComponent label="최종학력" inputTitle={{first : '학교명', second : '이수상태', third : '학과명'}} />
      
         <div className={classes.line}></div>
         
         <div style={{display : 'flex', justifyContent : 'space-between', padding:'30px'}}>
            <div>이력서</div>
            <div style={{width:'65%'}}> 
               <InputBox />
            </div>
         </div>
      </div>


   )
}

export default InputLayout;


