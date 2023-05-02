import classes from '../../../styles/pages/login/login.module.css';
import classes2 from '../../../styles/pages/login/signup.module.css';
import RadioGroup from "../../atoms/RadioGroup";
import Radio from "../../atoms/Radio";
import {useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {Mobile, PC} from "../../config/Responsive";

const Login = () => {
  const [isLoginType, setIsLoginType] = useState('general');
  const [idInput, setIdInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [error, setError] = useState(false);

  const radioChangeHandler = (e) => {
    setIsLoginType(e.target.value);
  }
  const generalIdInputHandler = (e) => {
    setIdInput(e.target.value);
  }
  const generalPassInputHandler = (e) => {
    setPassInput(e.target.value);
  }
  const generalOnSubmitHandler = (e) => {
    e.preventDefault();

    // 일반회원 로그인 후 에러처리하자

  }

  const companyIdInputHandler = (e) => {
    setIdInput(e.target.value);
  }
  const companyPassInputHandler = (e) => {
    setPassInput(e.target.value);
  }
  const companyOnSubmitHandler = (e) => {
    e.preventDefault();

    // 기업회원 로그인 후 에러처리 하자
  }

  const labelName = isLoginType === 'general' ? '아이디(이메일)' : '기업 아이디(이메일)';
  const submitEvt = isLoginType === 'general' ? generalOnSubmitHandler : companyOnSubmitHandler;
  const idChangeEvt = isLoginType === 'general' ? generalIdInputHandler : companyIdInputHandler;
  const passChangeEvt = isLoginType === 'general' ? generalPassInputHandler : companyPassInputHandler;
  const errorParam = '이메일과 비밀번호가 일치하지 않습니다.';


  const pcLoginForm = <form className={classes2.signupGeneralForm} onSubmit={submitEvt}>
                        <Input label={labelName} onChange={idChangeEvt} input={{
                          type : 'text',
                          placeholder : 'example@email.com'
                        }} />
                        <Input label='비밀번호' onChange={passChangeEvt} input={{
                          type : 'password',
                          placeholder : '********',
                        }} />
                        <Input label={labelName} onChange={idChangeEvt} input={{
                          type : 'text',
                          placeholder : 'example@email.com'
                        }} />
                        <Input label={labelName} onChange={idChangeEvt} input={{
                          type : 'text',
                          placeholder : 'example@email.com'
                        }} />
                        {error && <p className={classes.error}>{errorParam}</p>}
                        <Button btn={{
                          type : '',
                          value : '회원가입'
                        }} />
                      </form>;

  const mobileLoginForm = <form className={classes2.mobileSignupGeneralForm} onSubmit={submitEvt}>
                            <Input label={labelName} onChange={idChangeEvt} input={{
                              type : 'text',
                              placeholder : 'example@email.com'
                            }} />
                            <Input label='비밀번호' onChange={passChangeEvt} input={{
                              type : 'password',
                              placeholder : '********',
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