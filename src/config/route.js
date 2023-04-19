import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../pages/_layout/MainLayout';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Category from '../pages/category/Category';
import Tag from '../pages/tag/Tag';
import About from '../pages/about/About';
import Post from '../pages/post/Post';

import AdminLayout from '../pages/admin/_layout/AdminLayout';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import CreatePost from '../pages/admin/post/CreatePost';
import EditPost from '../pages/admin/post/EditPost';
import LoginAdmin from '../pages/admin/login/LoginAdmin';
import ListPost from '../pages/admin/post/ListPost';
import ListCategory from '../pages/admin/category/ListCategory';
import CreateCategory from '../pages/admin/category/CreateCategory';
import ListTag from '../pages/admin/tag/ListTag';
import CreateTag from '../pages/admin/tag/CreateTag';

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    {/* <Route path="blog" element={<Blog />} /> */}
                    <Route path="categories/:slug" element={<Category />} />
                    <Route path="tags/:slug/:id" element={<Tag />} />
                    <Route path="about" element={<About />} />
                    {/* <Route path="posts" element={<Post />} /> */}
                    <Route path="/:slug" element={<Post />} />
                    <Route path="login" element={<LoginAdmin />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="add-post" element={<CreatePost />} />
                    <Route path="edit-post/:id" element={<EditPost />} />
                    <Route path="list-post" element={<ListPost />} />
                    <Route path="list-cat" element={<ListCategory />} />
                    <Route path="add-cat" element={<CreateCategory />} />
                    <Route path="list-tag" element={<ListTag />} />
                    <Route path="add-tag" element={<CreateTag />} />
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
