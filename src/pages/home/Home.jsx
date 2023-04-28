import { useEffect, useState } from 'react';
import { Col, Row, Spin } from 'antd';

import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/post-card/PostCard';
import WidgetList from '../../components/widget-list/WidgetList';

import devtryBlogApi from '../../api/devtryBlogApi';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const getListPost = () => {
        setLoading(true);
        devtryBlogApi
            .getPosts()
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    const getCategories = () => {
        setLoading(true);
        devtryBlogApi
            .getCategories()
            .then((res) => {
                setCategories(res.data);
                localStorage.removeItem('categories');
                localStorage.setItem('categories', JSON.stringify(res.data));
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    const getTags = () => {
        setLoading(true);
        devtryBlogApi
            .getTags()
            .then((res) => {
                setTags(res.data);
                localStorage.removeItem('tags');
                localStorage.setItem('tags', JSON.stringify(res.data));
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getListPost();

        getCategories();

        getTags();
    }, []);

    return (
        <div className="home">
            <Helmet>
                <title>Blog for devs | Devtry Blog</title>
                <meta name="description" content="" />
                <meta name="keywords" content="Devtry.net Devry.net" />
            </Helmet>
            <Breadcum
                title={`A Developer's Blog`}
                description={'The official blog for developers and coders.'}
                navigation={'Home'}
            />
            <div className="container" style={{ padding: '20px 15px' }}>
                <Row gutter={24}>
                    <Col lg={17} md={17} xs={24}>
                        {loading ? (
                            <Spin style={{ marginTop: '2rem' }} tip="Loading">
                                <div className="content" />
                            </Spin>
                        ) : (
                            data.map((item) => <PostCard key={item.id} post={item} />)
                        )}
                    </Col>
                    <Col lg={7} md={7} xs={24}>
                        <WidgetList
                            widgets={[
                                {
                                    title: 'Categories',
                                    categories: categories,
                                },
                                {
                                    title: 'Tags',
                                    categories: tags,
                                },
                                {
                                    title: 'Popular Posts',
                                    categories: categories,
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default Home;
