import classes from '../../../styles/pages/login/login.module.css'
import logo from '../../../asset/images/logo.png';
import RadioGroup from "../../atoms/RadioGroup";
import Radio from "../../atoms/Radio";
import {useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

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

  const formClassName = isLoginType === 'general' ? classes.generalForm : classes.companyForm;
  const labelName = isLoginType === 'general' ? '아이디(이메일)' : '기업 아이디(이메일)';
  const signUpLink = isLoginType === 'general' ? '회원가입 하기 >' : '기업회원 신청하기 >';
  const submitEvt = isLoginType === 'general' ? generalOnSubmitHandler : companyOnSubmitHandler;
  const idChangeEvt = isLoginType === 'general' ? generalIdInputHandler : companyIdInputHandler;
  const passChangeEvt = isLoginType === 'general' ? generalPassInputHandler : companyPassInputHandler;
  const errorParam = '이메일과 비밀번호가 일치하지 않습니다.';

  const loginForm = <form className={formClassName} onSubmit={submitEvt}>
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
                              value : '로그인'
                            }} />
                            <div className={classes.signUpBox}>
                              <p>{signUpLink}</p>
                              <p>비밀번호 찾기 ></p>
                            </div>
                      </form>;

  return (
      <>
        <section className={classes.section}>
          <div className={classes.wrap}>
            <aside className={classes.aside}>
              <div className={classes.centerPosition}>
                <img className={classes.logo} src={logo} alt={logo} />
                <p className={classes.paramOption}>원하는 IT 인재 채용 플랫폼 Cozlin</p>
              </div>
            </aside>
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
                    {loginForm}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </>
  );
}

export default Login;