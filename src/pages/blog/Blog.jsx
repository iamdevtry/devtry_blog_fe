import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/post-card/PostCard';

const Blog = () => {
    return (
        <div className="blog">
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
