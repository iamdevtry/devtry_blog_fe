import { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Select, Collapse, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Editor from '../../../components/editor/Editor';
import UploadImage from '../../../components/upload-image/UploadImage';
import generateSlug from '../../../utils/generate-slug';
import devtryBlogApi from '../../../api/devtryBlogApi';
import { useParams } from 'react-router-dom';

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

const EditPost = () => {
    const { id } = useParams();
    const [form] = Form.useForm();

    const [categories, setCategories] = useState([]);

    const [content, setContent] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [tags, setTags] = useState([]);
    const [deletedTags, setDeletedTags] = useState([]);
    const filterTagsExist = (allTags, existTags) => {
        let result = [];
        allTags.forEach((item) => {
            let isExist = existTags.find((tag) => tag.id === item.id);
            if (isExist) {
                result.push(isExist.title);
            }
        });
        return result;
    };

    useEffect(() => {
        const getPostDetail = async () => {
            devtryBlogApi
                .getPost(id)
                .then((res) => {
                    form.setFieldsValue({
                        title: res.data.title,
                        meta_title: res.data.meta_title,
                        slug: res.data.slug,
                        sumary: res.data.sumary,
                        category: res.data.category,
                        thumbnail: res.data.thumbnail,
                    });
                    setContent(res.data.content);
                    setThumbnail(res.data.thumbnail);
                    setTags(res.data.tags);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getPostDetail();

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
    }, [id]);

    useEffect(() => {
        const getTags = async () => {
            devtryBlogApi
                .getTags()
                .then((res) => {
                    form.setFieldsValue({
                        tags: filterTagsExist(res.data, tags),
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        getTags();
    }, [tags]);

    const update = async (values) => {
        await devtryBlogApi
            .updatePost(id, values)
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
        values.thumbnail = thumbnail;
        console.log('Received values of form: ', values);
        console.log(deletedTags);
        // update(values);
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

    const onUploadImageChange = (e) => {
        setThumbnail(e);
    };

    const handleDeselectTags = (value) => {
        console.log('deselect', value);
        setDeletedTags([...deletedTags, value]);
    };
    const handleTagsChange = (value) => {
        console.log(`selected ${value}`);
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
                        <Editor data={content} onContentChange={onContentChange} />
                    </Form.Item>
                </Col>
                <Col xl={8} lg={24} md={24} sm={24} xs={24}>
                    <Collapse size="small" defaultActiveKey={['1']}>
                        <Panel header="Options" key={1}>
                            <Form.Item name="thumbnail" label="Thumbnail">
                                <UploadImage
                                    defaultImage={thumbnail}
                                    onSuccess={onUploadImageChange}
                                />
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
                            {/* <Form.Item name="parent_id" label="Parent Post">
                                <Row>
                                    <Col span={18}>
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            options={parentPosts}
                                            onChange={handleParentPostChange}
                                            // onSearch={handleSearch}
                                            // onSelect={(value) => {
                                            //     console.log(value);
                                            // }}
                                            placeholder="Select a parent post"
                                        />
                                    </Col>
                                    <Col span={6}>
                                        <Button onClick={handleSearch} icon={<SearchOutlined />}>
                                            Search
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item> */}
                            <Form.Item name="tags" label="Tags">
                                <Select
                                    mode="tags"
                                    style={{
                                        width: '100%',
                                    }}
                                    onChange={handleTagsChange}
                                    tokenSeparators={[',']}
                                    options={tags}
                                    fieldNames={{ label: 'title', value: 'slug' }}
                                    onDeselect={(value) => handleDeselectTags(value)}
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
export default EditPost;
