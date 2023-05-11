import classes from '../../../styles/pages/login/login.module.css'
import RadioGroup from "../../atoms/RadioGroup";
import Radio from "../../atoms/Radio";
import {useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {Mobile, PC} from "../../config/Responsive";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {apiClient, executeLoginAuthenticationService} from "../../../common/ApiGetService";


const Login = () => {
  const [isLoginType, setIsLoginType] = useState('general');
  const [idInput, setIdInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const radioChangeHandler = (e) => {
    setIsLoginType(e.target.value);
  }
  const idInputHandler = (e) => {
    setIdInput(e.target.value);
  }
  const passInputHandler = (e) => {
    setPassInput(e.target.value);
  }
  const loginSubmitHandler = (token) => {

    // isLoginType 분기하자 나중에..

    const basicAuthToken = 'Basic ' + window.btoa(idInput + ":" + passInput);

    executeLoginAuthenticationService(basicAuthToken)
    .then((res) => {

    })
    .catch((error) => {

    })

    // 일반회원 로그인 후 에러처리하자
    //dispatch(loginCheckAction.isLogin(true));
    //navigate('/');
  }


  const labelName = isLoginType === 'general' ? '아이디(이메일)' : '기업 아이디(이메일)';
  const errorParam = '이메일과 비밀번호가 일치하지 않습니다.';


  const pcLoginForm = <form className={classes.generalForm}>
                            <Input label={labelName} onChange={idInputHandler} input={{
                              type : 'text',
                              placeholder : 'example@email.com'
                            }} />
                            <Input label='비밀번호' onChange={passInputHandler} input={{
                              type : 'password',
                              placeholder : '********',
                            }} />
                            {error && <p className={classes.error}>{errorParam}</p>}
                            <Button btn={{
                              type : 'button',
                              value : '로그인',
                              onClick : loginSubmitHandler
                            }} />
                            <div className={classes.signUpBox}>
                              {isLoginType === 'general' ? <p><Link to='/signup'>회원가입 하기 ＞</Link></p> : <p><Link to='/'>기업회원 신청하기 ＞</Link></p>}
                              <p>비밀번호 찾기 ></p>
                            </div>
                      </form>;

  const mobileLoginForm = <form className={classes.mobileGeneralForm}>
                            <Input label={labelName} onChange={idInputHandler} input={{
                              type : 'text',
                              placeholder : 'example@email.com'
                            }} />
                            <Input label='비밀번호' onChange={passInputHandler} input={{
                              type : 'password',
                              placeholder : '********',
                            }} />
                            {error && <p className={classes.error}>{errorParam}</p>}
                            <Button btn={{
                              type : 'button',
                              value : '로그인',
                              onClick : loginSubmitHandler
                            }} />
                            <div className={classes.signUpBox}>
                              {isLoginType === 'general' ? <p><Link to='/signup'>회원가입 하기 ＞</Link></p> : <p><Link to='/'>기업회원 신청하기 ＞</Link></p>}
                              <p>비밀번호 찾기 ></p>
                            </div>
                          </form>;
  return (
      <>
        <PC>
          <section className={classes.section}>
            <div className={classes.wrap}>
              <article className={classes.article}>
                <div className={classes.formWrap}>
                  <RadioGroup>
                    <Radio name="contact" value="general" defaultChecked onChange={radioChangeHandler}>
                      <p>일반회원</p>
                    </Radio>
                    <Radio name="contact" value="company" onChange={radioChangeHandler}>
                      기업회원
                    </Radio>
                  </RadioGroup>
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
                <RadioGroup>
                  <Radio name="contact" value="general" defaultChecked onChange={radioChangeHandler}>
                    <p>일반회원</p>
                  </Radio>
                  <Radio name="contact" value="company" onChange={radioChangeHandler}>
                    기업회원
                  </Radio>
                </RadioGroup>
                <div>
                  <div className={classes.formOption}>
                    {mobileLoginForm}
                  </div>
                </div>
              </div>
            </article>
          </section>
        </Mobile>
      </>
  );
}

export default Login;