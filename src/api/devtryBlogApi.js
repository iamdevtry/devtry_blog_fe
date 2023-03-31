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
    getPosts: (page, limit) => {
        if (page === undefined) {
            page = 1;
        }
        if (limit === undefined) {
            limit = 10;
        }
        const url = `/posts?page=${page}&limit=${limit}`;
        return axiosClient.get(url);
    },
    getPost: (id) => {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    },
    getPostBySlug: (slug) => {
        const url = `/posts/slug/${slug}`;
        return axiosClient.get(url);
    },
    updatePost: (id, post) => {
        const url = `/posts/${id}`;
        return axiosClient.put(url, post, {
            headers: authHeader(),
        });
    },
    deletePost: (id) => {
        const url = `/posts/${id}`;
        return axiosClient.delete(url, {
            headers: authHeader(),
        });
    },
};
export default devtryBlogApi;
