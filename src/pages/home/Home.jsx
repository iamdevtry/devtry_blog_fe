import { useEffect, useState } from 'react';
import { Col, Row, Spin } from 'antd';

import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/post-card/PostCard';
import WidgetList from '../../components/widget-list/WidgetList';

import devtryBlogApi from '../../api/devtryBlogApi';

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

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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

    useEffect(() => {
        getListPost();
    }, []);

    return (
        <div className="home">
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
                                    title: 'Categories',
                                    categories: categories,
                                },
                                {
                                    title: 'Categories',
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
