import classes from '../../../styles/pages/login/login.module.css';
import classes2 from '../../../styles/pages/login/signup.module.css';
import {useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {Mobile, PC} from "../../config/Responsive";

const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [error, setError] = useState(false);

  const generalIdInputHandler = (e) => {
    setIdInput(e.target.value);
  }
  const generalPassInputHandler = (e) => {
    setPassInput(e.target.value);
  }
  const generalOnSubmitHandler = (e) => {
    e.preventDefault();

  }



  const errorParam = '이메일과 비밀번호가 일치하지 않습니다.';

  const pcLoginForm = <form className={classes2.signupGeneralForm} onSubmit={generalOnSubmitHandler}>
                        <Input label='아이디(이메일)' onChange={generalIdInputHandler} input={{
                          type : 'text',
                          placeholder : 'example@email.com'
                        }} />
                        <Input label='비밀번호' onChange={generalPassInputHandler} input={{
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
                        <Input label='연락처' input={{
                          type : 'text',
                          placeholder : '010-1234-1234'
                        }} />
                        <Input label='주소' input={{
                          type : 'text',
                          placeholder : '서울특별시 논현로'
                        }} />
                        {error && <p className={classes.error}>{errorParam}</p>}
                        <Button btn={{
                          type : '',
                          value : '회원가입'
                        }} />

                      </form>;

  const mobileLoginForm = <form className={classes2.mobileSignupGeneralForm} onSubmit={generalOnSubmitHandler}>
                            <Input label='아이디(이메일)' onChange={generalIdInputHandler} input={{
                              type : 'text',
                              placeholder : 'example@email.com'
                            }} />
                            <Input label='비밀번호' onChange={generalPassInputHandler} input={{
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
                            <Input label='연락처' input={{
                              type : 'text',
                              placeholder : '010-1234-1234'
                            }} />
                            <Input label='주소' input={{
                              type : 'text',
                              placeholder : '서울특별시 논현로'
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
      </>
  );
}

export default Login;