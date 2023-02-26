import axiosClient from './axiosClient';
import authHeader from '../services/authHeader';

const devtryBlogApi = {
    login: async (params) => {
        const url = '/login';
        return axiosClient.post(url, params);
    },
    addPost: (post) => {
        const url = '/posts';
        return axiosClient.post(url, post, {
            headers: authHeader(),
        });
    },
};
export default devtryBlogApi;
