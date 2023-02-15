import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="main-layout">
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
