import classes from '../../../styles/pages/login/login.module.css'
import logo from '../../../asset/images/logo.png';
import RadioGroup from "../../atoms/RadioGroup";
import Radio from "../../atoms/Radio";
import {useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const Login = () => {
  const [isLoginType, setIsLoginType] = useState('general');

  const onChangeHandler = (e) => {
    setIsLoginType(e.target.value);
  }

  const generalLoginForm = <form className={classes.generalForm}>

                            <Input label='아이디(이메일)' input={{
                              type : 'text',
                              placeholder : 'example@email.com'
                            }} />

                            <Input label='비밀번호' input={{
                              type : 'password',
                              placeholder : '********'
                            }} />

                            <Button btn={{
                              type : '',
                              value : '로그인'
                            }} />

                            <div className={classes.signUpBox}>
                              <p>회원가입 하기 ></p>
                              <p>비밀번호 찾기 ></p>
                            </div>

                          </form>;

  const companyLoginForm = <form className={classes.companyForm}>

                            <Input label='기업 아이디(이메일)' input={{
                              type : 'text',
                              placeholder : 'example@email.com'
                            }} />

                            <Input label='비밀번호' input={{
                              type : 'password',
                              placeholder : '********'
                            }} />

                            <Button btn={{
                              type : '',
                              value : '로그인'
                            }} />

                            <div className={classes.signUpBox}>
                              <p>기업회원 신청하기 ></p>
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
                  <Radio name="contact" value="general" defaultChecked onChange={onChangeHandler}>
                    <p>일반회원</p>
                  </Radio>
                  <Radio name="contact" value="company" onChange={onChangeHandler}>
                    기업회원
                  </Radio>
                </RadioGroup>
                <div>
                  <div className={classes.formOption}>
                    {isLoginType === 'general' && generalLoginForm}
                    {isLoginType === 'company' && companyLoginForm}
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