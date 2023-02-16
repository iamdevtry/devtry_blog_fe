import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../pages/_layout/MainLayout';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Category from '../pages/category/Category';
import About from '../pages/about/About';
import Post from '../pages/post/Post';

import AdminLayout from '../pages/admin/_layout/AdminLayout';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import CreatePost from '../pages/admin/post/CreatePost';

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="categories" element={<Category />} />
                    <Route path="about" element={<About />} />
                    <Route path="post" element={<Post />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="add-post" element={<CreatePost />} />
                    {/* <Route path="home" element={<Home />} />
                    <Route path="categories" element={<Category />} />
                    <Route path="about" element={<About />} />
                    <Route path="post" element={<Post />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteConfig;
