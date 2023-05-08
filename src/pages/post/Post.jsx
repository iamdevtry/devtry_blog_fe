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
import { Helmet } from 'react-helmet';
import devtryBlogApi from '../../api/devtryBlogApi';
import './post.scss';
import NotFound from '../notfound/NotFound';
import { customTime } from '../../utils/customTime';
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
    const [relatedPost, setRelatedPost] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getPost = () => {
            setLoading(true);
            devtryBlogApi
                .getPostBySlug(slug)
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    setError(err);
                });
        };
        getPost();
    }, [slug]);

    useEffect(() => {
        const getRelatedPosts = () => {
            setLoading(true);
            devtryBlogApi
                .getRelatedPosts(data?.tags[0]?.id)
                .then((res) => {
                    //remove current post
                    const index = res.data.findIndex((item) => item.id === data.id);
                    res.data.splice(index, 1);
                    setRelatedPost(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                });
        };
        if (data.tags) {
            getRelatedPosts();
        }
    }, [data]);

    return error ? (
        <NotFound />
    ) : (
        <div className="post">
            <div className="container" style={{ padding: '20px 15px' }}>
                {loading ? (
                    <Spin style={{ marginTop: '2rem' }} tip="Loading">
                        <div className="content" />
                    </Spin>
                ) : (
                    <>
                        <Helmet>
                            <title>{data?.title} | Devtry Blog</title>
                            <meta name="description" content="" />
                            <meta name="keywords" content="Devtry.net Devry.net" />
                        </Helmet>
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
                                    <span>
                                        {data.created_at ? customTime(data.created_at) : 'unknown'}
                                    </span>
                                </div>
                                <div className="post__entry-meta--reaction">
                                    {/* <span>
                                        <BiLike /> 2
                                    </span>
                                    <span>
                                        <FaRegComments /> 2
                                    </span> */}
                                </div>
                            </div>
                            <div className="post__content">
                                <Content data={data?.content} />
                            </div>
                            <Divider />
                            <div className="post__tags">
                                <h3>Tags: </h3>
                                <ul className="post__tags-list">
                                    {data?.tags?.map((tag) => (
                                        <li key={tag.id} className="post__tags-item">
                                            <Link to={`/tags/${tag.slug}`}>{tag.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Row>
                        <h3>Related Posts</h3>
                        <Row gutter={24} className="post__related">
                            {relatedPost &&
                                relatedPost.map((post) => (
                                    <Col lg={12} md={12} sm={24} xs={24} key={post.id}>
                                        <PostRelatedCard post={post} />
                                    </Col>
                                ))}
                            {relatedPost.length === 0 && (
                                <Col lg={12} md={12} sm={24} xs={24}>
                                    <div className="post__related--empty">
                                        <h4>There is no related post</h4>
                                    </div>
                                </Col>
                            )}
                        </Row>
                        {/* <Row>
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
                        </Row> */}
                        <Row></Row>
                    </>
                )}
            </div>
        </div>
    );
};
export default Post;
