import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import {
    DesktopOutlined,
    TeamOutlined,
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    FileSearchOutlined,
    FileAddOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import { useState } from 'react';
import Logo from '../../../assets/images/go-logo.svg';
import AuthService from '../../../services/authService';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const handleLogout = () => {
    AuthService.removeUser();
    window.location.href = '/login';
};

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Post', 'sub1', <FileSearchOutlined />, [
        getItem(<Link to={`add-post`}>New post</Link>, '3', <FileAddOutlined />),
        getItem(<Link to={`list-post`}>All post</Link>, '4', <FileOutlined />),
    ]),
    getItem('Category', 'sub2', <FileSearchOutlined />, [
        getItem(<Link to={`add-cat`}>New Category</Link>, '5', <FileAddOutlined />),
        getItem(<Link to={`list-cat`}>All Categories</Link>, '6', <FileOutlined />),
    ]),
    getItem('Tag', 'sub3', <FileSearchOutlined />, [
        getItem(<Link to={`add-tag`}>New Tag</Link>, '7', <FileAddOutlined />),
        getItem(<Link to={`list-tag`}>All Tags</Link>, '8', <FileOutlined />),
    ]),
    getItem(<Button onClick={handleLogout}>Logout</Button>, '9'),
];
const App = () => {
    let { pathname } = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const token = localStorage.getItem('user');

    return !token ? (
        <Navigate to="/login" />
    ) : (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="admin_logo">
                    <img src={Logo} alt="iamdevtry.net" />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        {pathname.split('/').map((item, index) => {
                            if (item) {
                                return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
                            }
                        })}
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;
