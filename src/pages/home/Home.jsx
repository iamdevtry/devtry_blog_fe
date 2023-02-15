import { Col, Row } from 'antd';

import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/postcard/PostCard';
import WidgetList from '../../components/widget-list/WidgetList';

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
    return (
        <div className="home">
            <Breadcum
                title={'Microsoft Developer Blogs'}
                description={'The official blog for Microsoft developers.'}
                navigation={'Home > Blogs > Microsoft Developer Blogs'}
            />
            <div className="content__wrap container" style={{ padding: '20px 15px' }}>
                <Row gutter={24}>
                    <Col lg={17} md={17} xs={24}>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
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
