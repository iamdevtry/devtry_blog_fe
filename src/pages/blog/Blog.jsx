import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/post-card/PostCard';

import { Helmet } from 'react-helmet';
const Blog = () => {
    return (
        <div className="blog">
            <Helmet>
                <title>Blog | Devtry Blog</title>
                <meta name="description" content="" />
                <meta name="keywords" content="Devtry.net Devry.net" />
            </Helmet>
            <Breadcum
                title={'Blog'}
                description={'The official blog for Microsoft developers.'}
                navigation={'Home > Blogs > blog'}
            />
            <div className="content__wrap" style={{ padding: '20px 15px' }}>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
};
export default Blog;
