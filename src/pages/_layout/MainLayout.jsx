import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="main-layout">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
