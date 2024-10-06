import axios from "axios";
const BASE_URL = "http://localhost:6868/api/"


const IMAGE_DEFAULT = 'http://localhost:3001/img/default.jpg'
const IMAGE_LINK = 'http://localhost:3001/img'
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken;
const TADA_SHOP = "tadaShop"
export{
  TADA_SHOP
}
const TOKEN_KEY = 'token_web';
export {
  IMAGE_DEFAULT,
  IMAGE_LINK,
  TOKEN_KEY,
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: {token: `Bearer ${TOKEN}`}
// })

const callAPIToken = () => {

    const getToken = () => {
        return localStorage.getItem(TOKEN_KEY)
      };
    
      // Creating axios instance with dynamic token
      const instance = axios.create({
        baseURL: BASE_URL,
        headers: { 'token': `Bearer ${getToken()}` }
      });
    
      // Interceptor to update the token before each request
      instance.interceptors.request.use((config) => {
        config.headers.token = `Bearer ${getToken()}`;
        return config;
      });
    
      return instance;
};


  export const userRequest = callAPIToken()