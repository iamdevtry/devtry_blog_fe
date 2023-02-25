import { useState } from 'react';
import { Button, Col, Form, Input, Row, Select, AutoComplete, Collapse, Modal } from 'antd';

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

const CreatePost = () => {
    const [form] = Form.useForm();
    const [content, setContent] = useState(null);

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onParentPostChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((post) => `${value}${post}`));
        }
    };
    const parentPostOptions = autoCompleteResult.map((post) => ({
        label: post,
        value: post,
    }));

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
        values.content = content;
        // console.log('Received values of form: ', values);
        addPost(values);
    };

    const onContentChange = (e) => {
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
                    <Collapse size="small">
                        <Panel header="Options">
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
                                    <Option value="0">Male</Option>
                                    <Option value="1">Female</Option>
                                    <Option value="2">Other</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="parent_id" label="Parent Post">
                                <AutoComplete
                                    options={parentPostOptions}
                                    onChange={onParentPostChange}
                                    placeholder="parent post"
                                >
                                    <Input />
                                </AutoComplete>
                            </Form.Item>
                        </Panel>
                    </Collapse>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
export default CreatePost;
