import { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Select, Collapse, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Editor from '../../../components/editor/Editor';
import UploadImage from '../../../components/upload-image/UploadImage';
import generateSlug from '../../../utils/generate-slug';
import devtryBlogApi from '../../../api/devtryBlogApi';

const { Option } = Select;
const { Panel } = Collapse;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 18,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

// const handleParentPostChange = (value) => {
//     console.log(`selected ${value}`);
// };

// const parentPostExample = [
//     {
//         label: 'https://www.google.com',
//         value: 'id1',
//     },
//     {
//         label: 'https://www.google.org',
//         value: 'id2',
//     },
//     {
//         label: 'https://www.google.net',
//         value: 'id3',
//     },
// ];

const CreateTag = () => {
    const [form] = Form.useForm();

    const [categories, setCategories] = useState([]);

    // const [parentPosts, setParentPosts] = useState([]);
    // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    // const onParentPostChange = (value) => {
    //     if (!value) {
    //         setAutoCompleteResult([]);
    //     } else {
    //         const postParents = parentPosts.filter((post) => post.label.includes(value));
    //         setAutoCompleteResult(postParents.map((post) => `${post.label}`));
    //     }
    // };
    // const parentPostOptions = autoCompleteResult.map((post) => ({
    //     label: post,
    //     value: post,
    // }));

    // const handleSearch = (value) => {
    //     console.log(value);
    //     setParentPosts(parentPostExample);
    // };

    useEffect(() => {
        const getCategories = async () => {
            devtryBlogApi
                .getCategories()
                .then((res) => {
                    console.log('call api');
                    setCategories(res.data);
                    localStorage.setItem('categories', JSON.stringify(res.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        const categoriesLocal = localStorage.getItem('categories');
        if (categoriesLocal) {
            setCategories(JSON.parse(categoriesLocal));
        } else {
            getCategories();
        }
    }, []);

    const addPost = async (values) => {
        await devtryBlogApi
            .addPost(values)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data);
                Modal.error({
                    title: err.response.data.message,
                    content: err.response.data.log,
                });
            });
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        // addPost(values);
    };

    const handleTitleChange = (e) => {
        let title = e.target.value;
        form.setFieldsValue({
            slug: generateSlug(title),
        });
    };
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
                maxWidth: '100%',
            }}
            scrollToFirstError
        >
            <Row gutter={16}>
                <Col xl={16} lg={16} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Title!',
                            },
                        ]}
                    >
                        <Input.TextArea onChange={handleTitleChange} showCount maxLength={75} />
                    </Form.Item>
                    <Form.Item name="meta_title" label="Meta Title">
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>

                    <Form.Item name="content" label="Content">
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>

                    <Form.Item name="parent_id" label="Parent Category">
                        <Select placeholder="select your parent category">
                            {categories?.map((cat) => (
                                <Option key={cat.id} value={cat.id}>
                                    {cat.title}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="slug"
                        label="Slug"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Slug!',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Add Category
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
export default CreateTag;
