import { Link } from 'react-router-dom';
import { Col, Row, Divider } from 'antd';
import { FaRegComments } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import './postCard.scss';
const tags = ['Windows', 'Mac', 'Linux', 'Android', 'iOS', 'Windows Phone'];
const PostCard = () => {
    return (
        <Row className="post-card container">
            <Col span={8} className="post-card__image">
                <img src="https://picsum.photos/800/400" alt="post image" />
            </Col>
            <Col span={16} className="post-card__content">
                <h3 className="post-card__title">
                    <Link>Why are the Windows chassis hardware button hotkeys so strange?</Link>
                </h3>
                <span>February 14, 2023</span>
                <br />
                <span>Raymond Chen</span>
                <p className="post-card__description">
                    Operating within the constraints of the system.
                </p>
            </Col>
            <Divider dashed />
            <Col span={24} className="post-card__footer">
                <div className="post-card__more">
                    {/* show tag */}
                    <span className="post-card__tags">
                        {tags.map((tag, index) => (
                            <div className="post-card__tag">
                                <Link key={index} to={`/tag/${tag}`}>
                                    {tag}
                                </Link>
                            </div>
                        ))}
                    </span>
                    {/* show comment */}
                    <div className="post-card__actions">
                        <span className="post-card__comment">
                            <FaRegComments /> 2 comments
                        </span>
                        {/* show like */}
                        <span className="post-card__like">
                            <BiLike /> 2 likes
                        </span>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default PostCard;
