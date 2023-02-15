import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/post-card/PostCard';

const Category = () => {
    return (
        <div className="category">
            <Breadcum
                title={'Category'}
                description={'The official blog for Microsoft developers.'}
                navigation={'Home > Blogs > Category'}
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
export default Category;
