import { Link } from 'react-router-dom';
import { FaRegComments } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import './postRelatedCard.scss';

const PostRelatedCard = () => {
    return (
        <div className="post-related-card">
            <div className="post-related-card__title">
                <Link>Announcing NuGet 6.4 – Signed, Central, Delivered</Link>
            </div>
            <div className="post-related-card__description">
                NuGet 6.4 is included in Visual Studio 2022 and .NET 7.0 out of the box. You can
                also download NuGet 6.4 for Windows, macOS, and Linux as a standalone executable.
                NuGet ...
            </div>
            <div className="post-related-card__author">
                <span>Raymond Chen</span>
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
