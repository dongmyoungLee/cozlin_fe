import {apiClient} from "./ApiClient";

export const executeLoginAuthenticationTokenService = (token) => apiClient.get('/login/auth', {
    headers : {
      Authorization : token
    }}
)

export const testGetApi = () => apiClient.get('/user')


