import {executeJwtAuthenticationTokenService} from "./api/ApiPostService";
import {apiClient} from "./api/ApiClient";

export const login = async (userId, userPwd) => {

  //const basicAuthToken = 'Basic ' + window.btoa(userId + ":" + userPwd);
  //const basicAuthToken = 'Basic ' + window.btoa('in28minutes' + ":" + 'dummy');


  const res = {
    isLogin : false,
    token : null,
    userId : null,
    loginEnteredTime : Date.now(),
  }

  try {

    const response = await executeJwtAuthenticationTokenService(userId, userPwd);

    if (response.status === 200) {
      const jwtToken = 'Bearer ' + response.data.token;

      res.isLogin = true;
      res.token = jwtToken;
      res.userId = userId;

      // 토큰 인증 성공시 모든 API에 기본 토큰 설정..
      apiClient.interceptors.request.use((config) => {
        config.headers.Authorization = jwtToken;
        return config;
      });

      return res;
    } else {

      return res;
    }

  } catch (error) {
    return res;
  }
}

