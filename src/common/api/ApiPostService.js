import {apiClient} from "./ApiClient";


export const emailValidService = (userId, flag) => apiClient.post('/mail/confirm', {}, {
    params : {
      email: userId,
      flag: flag,
    }}
)

export const findPwdService = (userId, flag) => apiClient.post('/user/update-pw', {}, {
    params : {
      email: userId,
      flag: flag,
    }}
)

export const findIdService = (userPhone) => apiClient.post('/user/findByUserId', {}, {
    params : {
      phone : userPhone
    }
})


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

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/authenticate', {username, password})

export const findUserJobInfo = (userId) => apiClient.post('/user/job', {}, {
  params : {
    id : userId
  }
})

export const testA = (id, currPwd, changePwd) => apiClient.post('/user/update-pw-pagein', {}, {
  params : {
    id : id,
    currPwd : currPwd,
    changePwd : changePwd,
  }}
) 



