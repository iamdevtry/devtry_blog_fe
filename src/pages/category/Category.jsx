import { useEffect, useState } from 'react';
import { Col, Row, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/post-card/PostCard';

import devtryBlogApi from '../../api/devtryBlogApi';
import { Helmet } from 'react-helmet';
const Category = () => {
    let { slug } = useParams();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getListPost = () => {
        setLoading(true);
        devtryBlogApi
            .getPostByCategorySlug(slug)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getListPost();
    }, [slug]);

    return (
        <div className="category">
            <Helmet>
                <title>Category | Devtry Blog</title>
                <meta name="description" content="" />
                <meta name="keywords" content="Devtry.net Devry.net" />
            </Helmet>
            <Breadcum
                title={'Category'}
                description={'The official blog for developers and coders.'}
                navigation={'Home > Category'}
            />
            <div className="container" style={{ padding: '20px 15px' }}>
                <Row gutter={24}>
                    <Col lg={24} md={24} xs={24}>
                        {loading ? (
                            <Spin style={{ marginTop: '2rem' }} tip="Loading">
                                <div className="content" />
                            </Spin>
                        ) : (
                            data.map((item) => <PostCard key={item.id} post={item} />)
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default Category;
