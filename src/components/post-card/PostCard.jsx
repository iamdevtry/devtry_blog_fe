import { Link } from 'react-router-dom';
import { Col, Row, Divider } from 'antd';
import { FaRegComments } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';

import { customTime } from '../../utils/customTime';

import './postCard.scss';
import noImage from '../../assets/images/svg/image-outline-icon.svg';

const PostCard = ({ post }) => {
    return (
        <Row className="post-card">
            <Col lg={8} md={8} xs={0} className="post-card__image">
                {/* <img src={`${post.thumbnail ? post.thumbnail.url : noImage}`} alt="post" /> */}
                <div
                    style={{
                        backgroundImage: `url(${post.thumbnail ? post.thumbnail.url : noImage})`,
                    }}
                ></div>
            </Col>
            <Col lg={16} md={16} xs={24} className="post-card__content">
                <h3 className="post-card__title">
                    <Link to={`/post/${post.slug}`}>{post.title}</Link>
                </h3>
                <span>{post.created_at ? customTime(post.created_at) : 'unknown'}</span>
                <br />
                {/* <span>Raymond Chen</span> */}
                <p className="post-card__description">{post.sumary}</p>
            </Col>
            <Divider dashed />
            <Col span={24} className="post-card__footer">
                <div className="post-card__more">
                    <span className="post-card__tags">
                        {post?.tags?.map((tag, index) => (
                            <div className="post-card__tag" key={index}>
                                <Link key={index} to={`/tags/${tag.slug}/${tag.id}`}>
                                    {tag.title}
                                </Link>
                            </div>
                        ))}
                    </span>
                    <div className="post-card__actions">
                        <span className="post-card__comment">
                            <FaRegComments /> 2 comments
                        </span>
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
