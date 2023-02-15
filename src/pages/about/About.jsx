import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/postcard/PostCard';

const About = () => {
    return (
        <div className="about">
            <Breadcum
                title={'About'}
                description={'The official blog for Microsoft developers.'}
                navigation={'Home > Blogs > About'}
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
export default About;
