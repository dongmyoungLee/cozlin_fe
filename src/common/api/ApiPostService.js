import {apiClient} from "./ApiClient";


export const emailValidService = (userId, flag) => apiClient.post('/mail/confirm', {}, {
    params : {
      email: userId,
      flag: 'signup',
    }}
)

export const findPwdService = (userId, flag) => apiClient.post('/mail/confirm', {}, {
    params : {
      email: userId,
      flag: 'find',
    }}
)


export const signUp = (id, pwd, phone, birthBefore, birthAfter , addr, name) => apiClient.post('/user', {}, {
    params : {
      userId: id,
      userPassword: pwd,
      userPhone: phone,
      userBirth: `${birthBefore + birthAfter}`,
      userAddr: addr,
      userName: name,
    }}
)

export const testAuthenticate = (userId, userPwd) => apiClient.post('authenticate', {
  username : userId,
  password : userPwd
})

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/authenticate', {username, password})



