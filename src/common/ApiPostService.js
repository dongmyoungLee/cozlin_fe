import axios from "axios";

export const apiClient = axios.create(
    {
      baseURL : 'http://localhost:9090'
    }
);

export const emailValidService = (userId) => apiClient.post('/mail/confirm', {}, {
    params : {
      email: userId
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

