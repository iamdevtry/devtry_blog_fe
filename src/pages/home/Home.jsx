import { Col, Row } from 'antd';

import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/postcard/PostCard';

const Home = () => {
    return (
        <div className="home">
            <Breadcum
                title={'Microsoft Developer Blogs'}
                description={'The official blog for Microsoft developers.'}
                navigation={'Home > Blogs > Microsoft Developer Blogs'}
            />
            <div className="content__wrap container" style={{ padding: '20px 15px' }}>
                <Row>
                    <Col lg={17} md={17} xs={24}>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default Home;
