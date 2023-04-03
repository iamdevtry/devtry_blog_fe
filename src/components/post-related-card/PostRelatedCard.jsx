import { Link } from 'react-router-dom';
import { FaRegComments } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import './postRelatedCard.scss';

const PostRelatedCard = ({ post }) => {
    return (
        <div className="post-related-card">
            <div className="post-related-card__title">
                <Link to={`/${post.slug}`}>{post.title}</Link>
            </div>
            <div className="post-related-card__description">{post.sumary}</div>
            <div className="post-related-card__author">
                <span>iamdevtry</span>
            </div>
            <div className="post-related-card__reaction">
                <span>
                    <FaRegComments /> 2 comments
                </span>
                <span>
                    <BiLike /> 2 likes
                </span>
            </div>
        </div>
    );
};

export default PostRelatedCard;
