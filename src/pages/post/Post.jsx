import { Row, Col, Avatar, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import Breadcum from '../../components/breadcum/Breadcum';
import PostCard from '../../components/post-card/PostCard';
import PostRelatedCard from '../../components/post-related-card/PostRelatedCard';
import WidgetList from '../../components/widget-list/WidgetList';

import { BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';

import './post.scss';

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
const Post = () => {
    return (
        <div className="post">
            <div className="container" style={{ padding: '20px 15px' }}>
                <Row className="post__wrapper">
                    <div className="post__title">
                        <h1>Introducing Search By Target Framework on NuGet.org</h1>
                    </div>
                    <div className="post__author">
                        <div className="post__author--avatar">
                            <Avatar size="large" icon={<UserOutlined />} />
                        </div>
                        <div className="post__author--name">
                            <h3>iamdevtry</h3>
                        </div>
                    </div>
                    <div className="post__entry-meta">
                        <div className="post__entry-meta--date">
                            <span>May 20, 2021</span>
                        </div>
                        <div className="post__entry-meta--reaction">
                            <span>
                                <BiLike /> 2
                            </span>
                            <span>
                                <FaRegComments /> 2
                            </span>
                        </div>
                    </div>
                    <div className="post__content">
                        <p>
                            Last year, we brought a new feature to improve the way you assess{' '}
                            <a href="https://devblogs.microsoft.com/nuget/introducing-compatible-frameworks-on-nuget-org/">
                                target framework compatibility of a NuGet package through a new
                                &#8220;Frameworks&#8221; tab
                            </a>
                            .
                        </p>
                        <p>
                            Today, we are announcing a new feature that will allow you to search by
                            a target framework on <a href="https://www.nuget.org/">NuGet.org</a>.
                            Here’s how it looks:
                        </p>
                        <p>
                            <a href="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/FullExperience.png">
                                <img
                                    decoding="async"
                                    data-src="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/FullExperience-430x350.png"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABRAQMAAAAem5EJAAAAA1BMVEXW1taWrGEgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEklEQVQ4jWNgGAWjYBSMAnoAAARuAAFa1fzWAAAAAElFTkSuQmCC"
                                    alt="Image FullExperience"
                                    width="430"
                                    height="350"
                                    class="aligncenter size-medium wp-image-2658 lazyload"
                                    data-srcset="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/FullExperience-430x350.png 430w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/FullExperience-860x700.png 860w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/FullExperience-768x625.png 768w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/FullExperience.png 1160w"
                                    sizes="(max-width: 430px) 100vw, 430px"
                                />
                            </a>
                        </p>
                        <p>
                            The first thing you might notice is that there is a new “Frameworks”
                            filter on the left where you can select from a collection of .NET
                            frameworks you’re interested in a package providing assets for.
                        </p>
                        <p>
                            Selecting .NET in this example will match packages that are built for
                            modern .NET including <code>net5.0</code> through <code>net7.0</code>{' '}
                            and provides at least one of these versions with a framework asset
                            respectfully.
                        </p>
                        <p>
                            If you’d like to get more specific about the version, you can expand the
                            parent element and then select a combination of known target frameworks.
                        </p>
                        <p>
                            <a href="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/SingleSelection.png">
                                <img
                                    decoding="async"
                                    data-src="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/SingleSelection-430x350.png"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABRAQMAAAAem5EJAAAAA1BMVEXW1taWrGEgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEklEQVQ4jWNgGAWjYBSMAnoAAARuAAFa1fzWAAAAAElFTkSuQmCC"
                                    alt="Image SingleSelection"
                                    width="430"
                                    height="350"
                                    class="aligncenter size-medium wp-image-2659 lazyload"
                                    data-srcset="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/SingleSelection-430x350.png 430w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/SingleSelection-861x700.png 861w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/SingleSelection-768x624.png 768w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/SingleSelection.png 1161w"
                                    sizes="(max-width: 430px) 100vw, 430px"
                                />
                            </a>
                        </p>
                        <p>
                            One key design principle in the .NET framework is backwards
                            compatibility, which enables developers to upgrade their applications
                            and packages to newer versions of the framework without having to
                            completely rewrite their code.
                        </p>
                        <p>
                            Whether you are looking for compatible packages on the latest .NET
                            framework or packages still targeting the framework you are, this
                            feature is here to help.
                        </p>
                        <p>
                            Finally, you may have noticed some elements were moved on the search
                            page. We wanted to take this opportunity to put filters in a logical
                            place where they’re always available and we moved the sort options to a
                            more accessible location. In short:
                        </p>
                        <p>
                            <a href="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/Meme.png">
                                <img
                                    decoding="async"
                                    data-src="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/Meme-339x350.png"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABnAQMAAADMuHW5AAAAA1BMVEXW1taWrGEgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFElEQVQ4jWNgGAWjYBSMglEwOAEABaIAATd4QrEAAAAASUVORK5CYII="
                                    alt="Image Meme"
                                    width="339"
                                    height="350"
                                    class="aligncenter size-medium wp-image-2666 lazyload"
                                    data-srcset="https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/Meme-339x350.png 339w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/Meme-678x700.png 678w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/Meme-24x24.png 24w, https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/Meme.png 756w"
                                    sizes="(max-width: 339px) 100vw, 339px"
                                />
                            </a>
                        </p>
                        <h2 id="waitwhats-a-target-framework-again">
                            Wait&#8230;What&#8217;s a Target Framework Again?
                        </h2>
                        <p>
                            A{' '}
                            <a href="https://learn.microsoft.com/dotnet/standard/frameworks">
                                target framework
                            </a>{' '}
                            is a .NET framework that a NuGet package is built and designed to work
                            with. When a package is created, the developer specifies which target
                            framework(s) the package supports. The target framework is typically
                            specified using a specific .NET Framework, .NET Core, or .NET Standard
                            version.
                        </p>
                        <p>
                            For example, if a package specifies that it targets the .NET Framework
                            4.6 (<code>net46</code> for short), that means the package is built and
                            designed to work with applications that are built using the .NET
                            Framework 4.6 or higher.
                        </p>
                        <p>
                            If a developer upgrades their project’s target framework to .NET 4.7,
                            they may need to update the NuGet packages they use to maintain
                            compatibility and ensure their application continues to work as
                            expected.
                        </p>
                        <p>
                            If a package targets .NET Standard 2.0, it means that the package is
                            built and designed to work with any runtime that supports the .NET
                            Standard 2.0, including .NET Framework, .NET Core, and .NET.
                        </p>
                        <p>
                            When a developer installs a package in their project, they can specify
                            the target framework they are using, and NuGet will check that the
                            package is compatible with that framework. This ensures that developers
                            can use packages that are designed to work with the framework they are
                            using and can also ensure that packages do not have any versioning
                            conflicts.
                        </p>
                        <h2 id="whats-next">What&#8217;s Next?</h2>
                        <p>
                            The next step in this feature area is to bring this target framework
                            awareness to the NuGet protocol so that clients like Visual Studio and
                            CLI tooling can also provide rich experiences for filtering packages.
                        </p>
                        <p>
                            In addition,{' '}
                            <a href="https://dotnet.microsoft.com/">
                                .NET has been growing the number of platforms these target
                                frameworks support over the years
                            </a>{' '}
                            and we want to make it easier for you to find packages based on more
                            helpful factors such as platforms a target framework supports and their
                            respective platform versions.
                        </p>
                        <h2 id="feedback">Feedback</h2>
                        <p>
                            We are continuously working to improve NuGet and NuGet.org to better
                            meet the needs of the community. We would love to{' '}
                            <a href="https://github.com/NuGet/NuGetGallery/issues/new/choose">
                                hear your thoughts on this feature
                            </a>
                            , including any feedback you have on it, what would be most helpful to
                            you, and any potential challenges you run into. Your feedback is
                            essential in helping us ensure that we are building the right features
                            to meet your needs, and we thank you for taking the time in sharing your
                            thoughts with us.
                        </p>
                    </div>
                    <Divider />
                    <div className="post__tags">
                        <h3>Tags: </h3>
                        <ul className="post__tags-list">
                            <li className="post__tags-item">
                                <Link to="/tags/nuget">NuGet</Link>
                            </li>
                            <li className="post__tags-item">
                                <Link to="/tags/nuget-org">NuGet.org</Link>
                            </li>
                            <li className="post__tags-item">
                                <Link to="/tags/nuget-client">NuGet Client</Link>
                            </li>
                        </ul>
                    </div>
                </Row>
                <h3>Related Posts</h3>
                <Row gutter={24} className="post__related">
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <PostRelatedCard />
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <PostRelatedCard />
                    </Col>
                </Row>
                <Row>
                    <WidgetList
                        vertical={true}
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
                </Row>
                <Row></Row>
            </div>
        </div>
    );
};
export default Post;
