import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../pages/_layout/MainLayout';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Category from '../pages/category/Category';
import About from '../pages/about/About';

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteConfig;
