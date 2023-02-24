// import axios from 'axios';
// import baseUrl from './backendUrl';

// const devtryBlogApi = {
//     addPost: async (post) => {
//         var data = JSON.stringify(data);
//         var config = {
//             method: 'post',
//             url: `${baseUrl}/posts`,
//             headers: {
//                 // Authorization: 'Bearer ' + localStorage.getItem('token'),
//                 Authorization:
//                     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjExLCJyb2xlIjoidXNlciJ9LCJleHAiOjE2Nzc4NTI3NjUsImlhdCI6MTY3NzI0Nzk2NX0.9b3OvwjGkjBrDUpkdLJm-RqOBUIM70rEfQT7Muua81g',
//             },
//             data: post,
//         };
//         axios(config)
//             .then(function (response) {
//                 console.log(JSON.stringify(response.data));
//             })
//             .catch(function (error) {
//                 console.log(error.response.data);
//             });
//     },
// };

// export default devtryBlogApi;

import axiosClient from './axiosClient';

const devtryBlogApi = {
    addPost: (post) => {
        const url = '/posts';
        return axiosClient.post(url, post, {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjExLCJyb2xlIjoidXNlciJ9LCJleHAiOjE2Nzc4NTI3NjUsImlhdCI6MTY3NzI0Nzk2NX0.9b3OvwjGkjBrDUpkdLJm-RqOBUIM70rEfQT7Muua81g',
            },
        });
    },
};
export default devtryBlogApi;
