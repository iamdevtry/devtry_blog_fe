import { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Select, Collapse, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
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

const CreatePost = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState(null);

    useEffect(() => {
        const getCategories = async () => {
            devtryBlogApi
                .getCategories()
                .then((res) => {
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

    useEffect(() => {
        const getTags = async () => {
            devtryBlogApi
                .getTags()
                .then((res) => {
                    setTags(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        getTags();
    }, []);

    const addPost = async (values) => {
        await devtryBlogApi
            .addPost(values)
            .then((res) => {
                Modal.success({
                    title: 'Add post successfully',
                    content: res.data,
                });

                setTimeout(() => {
                    navigate('/admin/list-post');
                }, 2000);
            })
            .catch((err) => {
                console.log(err.response.data);
                Modal.error({
                    title: err.response.data.message,
                    content: err.response.data.log,
                });
            });
    };

    const addPostToCategory = async (values) => {
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
        values.content = content;
        // console.log('Received values of form: ', values);
        addPost(values);
    };

    const onContentChange = (e) => {
        // console.log(e);
        setContent(e);
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
                <Col xl={16} lg={24} md={24} sm={24} xs={24}>
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
                        <Editor onContentChange={onContentChange} />
                    </Form.Item>
                </Col>
                <Col xl={8} lg={24} md={24} sm={24} xs={24}>
                    <Collapse size="small" defaultActiveKey={['1']}>
                        <Panel header="Options" key={1}>
                            <Form.Item name="thumbnail" label="Thumbnail">
                                <UploadImage />
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
                            <Form.Item name="sumary" label="Sumary">
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item
                                name="category"
                                label="Cagetory"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select category!',
                                        type: 'array',
                                    },
                                ]}
                            >
                                <Select mode="multiple" placeholder="select your category">
                                    {categories.map((category) => (
                                        <Option key={category.id} value={category.id}>
                                            {category.title}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item name="tags" label="Tags">
                                <Select
                                    mode="tags"
                                    style={{
                                        width: '100%',
                                    }}
                                    onChange={handleChange}
                                    tokenSeparators={[',']}
                                    fieldNames={{ label: 'title', value: 'slug' }}
                                    options={tags}
                                />
                            </Form.Item>
                        </Panel>
                    </Collapse>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Add post
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
export default CreatePost;
