import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Row, Col, Avatar, Divider, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import PostRelatedCard from '../../components/post-related-card/PostRelatedCard';
import WidgetList from '../../components/widget-list/WidgetList';
import Content from '../../components/content/Content';

import { BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';

import devtryBlogApi from '../../api/devtryBlogApi';
import './post.scss';

const categories = [
    'All',
    'Azure',
    'C#',
    'C++',
    'Cloud',
    'Dynamics 365',
    'Education',
    'Events',
    'Gaming',
];

const Post = () => {
    let { slug } = useParams();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getPost = () => {
            setLoading(true);
            devtryBlogApi
                .getPostBySlug(slug)
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                });
        };
        getPost();
    }, [slug]);

    return (
        <div className="post">
            <div className="container" style={{ padding: '20px 15px' }}>
                {loading ? (
                    <Spin style={{ marginTop: '2rem' }} tip="Loading">
                        <div className="content" />
                    </Spin>
                ) : (
                    <>
                        <Row className="post__wrapper">
                            <div className="post__title">
                                <h1>{data?.title}</h1>
                            </div>
                            <div className="post__author">
                                <div className="post__author--avatar">
                                    <Avatar size="large" icon={<UserOutlined />} />
                                </div>
                                <div className="post__author--name">
                                    <h3>iamdevtry</h3>
                                </div>
                            </div>
                            <div className="post__entry-meta">
                                <div className="post__entry-meta--date">
                                    <span>{data?.created_at}</span>
                                </div>
                                <div className="post__entry-meta--reaction">
                                    <span>
                                        <BiLike /> 2
                                    </span>
                                    <span>
                                        <FaRegComments /> 2
                                    </span>
                                </div>
                            </div>
                            <div className="post__content">
                                <Content data={data?.content} />
                            </div>
                            <Divider />
                            <div className="post__tags">
                                <h3>Tags: </h3>
                                <ul className="post__tags-list">
                                    <li className="post__tags-item">
                                        <Link to="/tags/nuget">NuGet</Link>
                                    </li>
                                    <li className="post__tags-item">
                                        <Link to="/tags/nuget-org">NuGet.org</Link>
                                    </li>
                                    <li className="post__tags-item">
                                        <Link to="/tags/nuget-client">NuGet Client</Link>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                        <h3>Related Posts</h3>
                        <Row gutter={24} className="post__related">
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <PostRelatedCard />
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <PostRelatedCard />
                            </Col>
                        </Row>
                        <Row>
                            <WidgetList
                                vertical={true}
                                widgets={[
                                    {
                                        title: 'Categories',
                                        categories: categories,
                                    },
                                    {
                                        title: 'Categories',
                                        categories: categories,
                                    },
                                    {
                                        title: 'Categories',
                                        categories: categories,
                                    },
                                ]}
                            />
                        </Row>
                        <Row></Row>
                    </>
                )}
            </div>
        </div>
    );
};
export default Post;
