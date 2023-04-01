import { useEffect, useState } from 'react';
import { Col, Row, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/post-card/PostCard';

import devtryBlogApi from '../../api/devtryBlogApi';

const Category = () => {
    let { slug } = useParams();

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
    }, [slug]);

    return (
        <div className="category">
            <Breadcum
                title={'Category'}
                description={'The official blog for Microsoft developers.'}
                navigation={'Home > Blogs > Category'}
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
