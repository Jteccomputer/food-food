import axios from 'axios';

export const setLoadingInterceptor = ({ showLoading, hideLoading }) => {

    // let setup the Interceptor for the request that goes to the server
    axios.interceptors.request.use(
        req => {
            showLoading();
            return req;
        },
        error => {
            hideLoading();
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        res =>{
            hideLoading();
            return res;
        },
        error =>{
            hideLoading();
            return Promise.reject(error);
        }
    );
};

export default setLoadingInterceptor;