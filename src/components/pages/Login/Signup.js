import classes from '../../../styles/pages/login/login.module.css';
import classes2 from '../../../styles/pages/login/signup.module.css';
import {useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {Mobile, PC} from "../../config/Responsive";
import PostPopupDom from "../../blocks/PostPopupDom";
import PopupPostCode from "../../blocks/PopupPostCode";


const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [error, setError] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userPostData, setUserPostData] = useState('');
  const [idInputWidth, setIdInputWidth] = useState('100%');
  const [phoneInputWidth, setPhoneInputWidth] = useState('100%');
  const [isIdBtnShow, setIsIdBtnShow] = useState(false);
  const [isPhoneBtnShow, setIsPhoneBtnShow] = useState(false);


  const idInputHandler = (e) => {
    setIdInput(e.target.value);
    setIdInputWidth('80%');
    setIsIdBtnShow(true);
  }

  const idBlur = (e) => {

    if (idInput === '') {
      setIdInputWidth('100%');
      setIsIdBtnShow(false);
    }
  }

  const phoneBlur = (e) => {
    if (phoneInput === '') {
      setPhoneInputWidth('100%');
      setIsPhoneBtnShow(false);
    }
  }

  const passInputHandler = (e) => {
    setPassInput(e.target.value);
  }

  const phoneInputHandler = (e) => {
    setPhoneInput(e.target.value);
    setPhoneInputWidth('80%');
    setIsPhoneBtnShow(true);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  const openPostCode = () => {
    setIsPopupOpen(true);
  }

  const closePostCode = () => {
    setIsPopupOpen(false)
  }


  const errorParam = '이메일과 비밀번호가 일치하지 않습니다.';

  const pcLoginForm = <form className={classes2.signupGeneralForm} onSubmit={onSubmitHandler}>
                        <div className={classes2.flexOption}>
                          <Input label='아이디(이메일)' onBlur={idBlur} onChange={idInputHandler} input={{
                            type : 'text',
                            placeholder : 'example@email.com',
                            width : idInputWidth,
                          }} />
                          <button tabIndex='-1' style={{display : isIdBtnShow ? 'block' : 'none', transition : '0.5s'}} className={classes2.buttonOption}>인증</button>
                        </div>

                        <Input label='비밀번호' onChange={passInputHandler} input={{
                          type : 'password',
                          placeholder : '********',
                        }} />
                        <Input label='비밀번호 확인' input={{
                          type : 'password',
                          placeholder : '********',
                        }} />

                        <div className={classes2.flexOption}>
                          <Input label='연락처' onBlur={phoneBlur} onChange={phoneInputHandler}  input={{
                            type : 'text',
                            placeholder : '010-1234-5678',
                            width : phoneInputWidth,
                          }} />
                          <button tabIndex='-1' style={{display : isPhoneBtnShow ? 'block' : 'none', transition : '0.5s'}} className={classes2.buttonOption}>인증</button>
                        </div>

                        <Input label='생년월일' input={{
                          type : 'text',
                          placeholder : '1999-01-01',
                        }} />

                        <Input label='주소' onClick={openPostCode} input={{
                          type : 'text',
                          readOnly : 'readonly',
                          placeholder : '클릭해서 검색하기',
                          value : userPostData
                        }} />

                        {error && <p className={classes.error}>{errorParam}</p>}
                        <Button btn={{
                          type : '',
                          value : '회원가입'
                        }} />
                      </form>;

  const mobileLoginForm = <form className={classes2.mobileSignupGeneralForm} onSubmit={onSubmitHandler}>
                            <div className={classes2.flexOption}>
                              <Input label='아이디(이메일)' onBlur={idBlur} onChange={idInputHandler} input={{
                                type : 'text',
                                placeholder : 'example@email.com',
                                width : idInputWidth,
                              }} />
                              <button tabIndex='-1' style={{display : isIdBtnShow ? 'block' : 'none', transition : '0.5s'}} className={classes2.buttonOption}>인증</button>
                            </div>

                            <Input label='비밀번호' onChange={passInputHandler} input={{
                              type : 'password',
                              placeholder : '********',
                            }} />
                            <Input label='비밀번호 확인' input={{
                              type : 'password',
                              placeholder : '********',
                            }} />
                            <Input label='생년월일' input={{
                              type : 'text',
                              placeholder : '1999-01-01',
                            }} />
                            <div className={classes2.flexOption}>
                              <Input label='연락처' onBlur={phoneBlur} onChange={phoneInputHandler}  input={{
                                type : 'text',
                                placeholder : '010-1234-5678',
                                width : phoneInputWidth,
                              }} />
                              <button tabIndex='-1' style={{display : isPhoneBtnShow ? 'block' : 'none', transition : '0.5s'}} className={classes2.buttonOption}>인증</button>
                            </div>
                            <Input label='주소' onClick={openPostCode} input={{
                              type : 'text',
                              readOnly : 'readonly',
                              placeholder : '클릭해서 검색하기',
                              value : userPostData
                            }} />
                            {error && <p className={classes.error}>{errorParam}</p>}
                            <Button btn={{
                              type : '',
                              value : '회원가입'
                            }} />
                          </form>;
  return (
      <>
        <PC>
          <section className={classes.section}>
            <div className={classes.wrap}>
              <article className={classes.article}>
                <div className={classes2.formWrap}>
                  <div>
                    <div className={classes.formOption}>
                      {pcLoginForm}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </PC>
        <Mobile>
          <section className={classes.mobileSection}>
            <article className={classes.mobileArticle}>
              <div className={classes.mobileFormWrap}>
                <div>
                  <div className={classes.formOption}>
                    {mobileLoginForm}
                  </div>
                </div>
              </div>
            </article>
          </section>
        </Mobile>
        <div id='popupDom'>
         {isPopupOpen && (
              <PostPopupDom>
                <PopupPostCode onClose={closePostCode} setData={setUserPostData} />
              </PostPopupDom>
          )}
        </div>
      </>
  );
}

export default Login;