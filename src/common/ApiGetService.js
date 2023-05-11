import axios from "axios";

export const apiClient = axios.create(
    {
      baseURL : 'http://localhost:9090'
    }
);

export const executeLoginAuthenticationService = (token) => apiClient.get('/login/auth', {
    headers : {
      Authorization : token
    }}
)

