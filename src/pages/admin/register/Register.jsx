import { Button, Form, Input } from 'antd';

import devtryBlogApi from '../../../api/devtryBlogApi';
import AuthService from '../../../services/authService';
import './register.scss';

const Register = () => {
    const register = async (values) => {
        await devtryBlogApi
            .register(values)
            .then((res) => {
                console.log('login success');
                AuthService.setUser(res);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const onFinish = (values) => {
        // console.log('Success:', values);
        register(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="admin-login">
            <div className="container" style={{ padding: '20px 15px' }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Mobile"
                        name="mobile"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your mobile!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Register;
