import { Col, Row, Card, Descriptions, Timeline, Image, Divider } from 'antd';
import {
    MailOutlined,
    GithubOutlined,
    FacebookOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';
import Breadcum from '../../components/breadcum/Breadcum';

import profileImage from '../../assets/images/profile_image.webp';
import aboutImage1 from '../../assets/images/about_image_1.webp';
import aboutImage2 from '../../assets/images/about_image_2.webp';

import './about.scss';

import { Helmet } from 'react-helmet';
const About = () => {
    const calculateAge = () => {
        const birthDate = new Date('2001-03-03');
        const currentDate = new Date();
        return currentDate.getFullYear() - birthDate.getFullYear();
    };
    return (
        <div className="about">
            <Helmet>
                <title>About | Devtry Blog</title>
            </Helmet>
            <Breadcum
                title={'About'}
                description={'Something about my blog and me.'}
                navigation={'Home > About'}
            />
            <div className="container" style={{ padding: '20px 15px' }}>
                <Row gutter={24}>
                    <Col lg={17} md={17} xs={24}>
                        <Card>
                            <Descriptions title="About blog">
                                <Descriptions.Item>
                                    Welcome to my blog, where I share my passion for technology and
                                    development. This blog is dedicated to providing useful
                                    resources, tips, and insights to help you navigate the
                                    ever-changing world of technology and software development. As a
                                    developer myself, I understand the challenges and opportunities
                                    that come with building new applications, websites, and
                                    software. Through this blog, I aim to provide valuable
                                    information and guidance to fellow developers and tech
                                    enthusiasts, from beginner to expert. My goal is to make
                                    technology accessible to everyone, regardless of their level of
                                    experience. Whether you're just starting out or looking to level
                                    up your skills, this blog has something for you. From tutorials
                                    and how-to guides to in-depth analysis of the latest trends and
                                    technologies, you'll find a wealth of knowledge here. Above all,
                                    I believe in the power of community and collaboration. I welcome
                                    your feedback, questions, and suggestions, and I look forward to
                                    building a community of like-minded individuals who share my
                                    passion for technology and development. Thank you for visiting
                                    my blog, and I hope you find it helpful and informative.
                                </Descriptions.Item>
                            </Descriptions>
                            <Descriptions title="About me">
                                <Descriptions.Item>
                                    My name is Phong. I'm a Vietnamese 🇻🇳. I recently graduated from
                                    Ho Chi Minh University of Technology with a degree in System
                                    analysis and design. I am passionate about backend development
                                    and have experience working with Go, NodeJs... I am excited to
                                    learn more about backend development and interested in studying
                                    low-level languages and systems. I also have a passion for
                                    writing and sharing knowledge, so I built this blog. Here, I
                                    only share my experience according to my personal knowledge and
                                    the data I searched for, so it would be inevitable to avoid
                                    misinformation. I am grateful if you help me and understand me.
                                    Thank you all so much!
                                </Descriptions.Item>
                            </Descriptions>
                            <Descriptions title="Hobbies and  I don't know what I'm talking about">
                                <Descriptions.Item>
                                    I’m glad you took the time to read this part. By the way, you
                                    can understand a little more about my preferences. I like
                                    learning new technology and programming languages in my free
                                    time.  I also solve problems on Leetcode; it's very useful for
                                    me. I’m also a very sporting person, I often play football with
                                    my college friends. Sport is really helpful, it helps relieve
                                    stress and refresh the mind. Aside from that, I am also
                                    interested in in photography, listening to music, and reading,
                                    especially when learning a foreign language. I wanna make
                                    friends with people. all around the world. I can learn from them
                                    about their culture, traditional...
                                    <br />
                                    In the final section, I just thought I'd put some pictures here
                                    for no reason. 
                                </Descriptions.Item>
                            </Descriptions>
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) =>
                                        console.log(
                                            `current index: ${current}, prev index: ${prev}`
                                        ),
                                }}
                            >
                                <Image
                                    width={'100%'}
                                    src={aboutImage1}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <Image
                                    width={'100%'}
                                    src={aboutImage2}
                                    style={{ marginBottom: '1rem' }}
                                />
                            </Image.PreviewGroup>
                        </Card>
                    </Col>
                    <Col lg={7} md={7} xs={24}>
                        <Card className='ant-card-cover__mobile' hoverable cover={<img alt="devtry.net" src={profileImage} />}>
                            <Descriptions title="Personal Info" column={1}>
                                <Descriptions.Item label="Full name">
                                    Phong Binh Tran
                                </Descriptions.Item>
                                <Descriptions.Item label="Age">{calculateAge()} </Descriptions.Item>
                                <Descriptions.Item label="Country">🇻🇳 Vietnam</Descriptions.Item>
                                <Descriptions.Item label="Role">
                                    Full-stack Developer
                                </Descriptions.Item>
                            </Descriptions>
                            <div>
                                <label htmlFor="Socials" style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
                                    Socials:
                                </label>
                                <Timeline
                                    style={{ marginLeft: '4px', marginTop: '16px' }}
                                    mode="left"
                                    items={[
                                        {
                                            dot: <MailOutlined />,
                                            children: 'me@devtry.net',
                                        },
                                        {
                                            dot: <GithubOutlined />,
                                            children: 'github.com/iamdevtry',
                                        },
                                        {
                                            dot: <LinkedinOutlined />,
                                            children: 'linkedin.com/in/iamdevtry',
                                        },
                                    ]}
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default About;
