import { Link, useLocation } from 'react-router-dom';
import { FaBeer, FaChevronDown } from 'react-icons/fa';

import './header.scss';
import logo from '../../assets/images/go-logo.svg';

const headerNav = [
    {
        display: 'Trang chủ',
        path: '/',
    },
    {
        display: 'Blog',
        path: '/blog',
    },
    {
        display: 'Categories',
        path: '/categories',
        chilldren: [
            {
                display: 'Category 1',
                path: '/category-1',
            },
            {
                display: 'Category 2',
                path: '/category-2',
            },
            {
                display: 'Category 3',
                path: '/category-3',
            },
        ],
    },
    {
        display: 'About me',
        path: '/about',
    },
];
const Header = () => {
    const { pathname } = useLocation();

    const active = headerNav.findIndex((e) => e.path === pathname);

    const showSubMenu = () => {
        const subMenu = document.querySelector('.header__left-menu--submenu');
        subMenu.classList.toggle('show');
    };

    //remove submenu when click outside
    // window.addEventListener('click', (e) => {
    //     const subMenu = document.querySelector('.header__left-menu--submenu');
    //     console.log(e.target === subMenu);
    // });

    return (
        <div className="header">
            <div className="header__wrap container">
                <div className="header__left">
                    <div className="header__left-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="header__left-menu">
                        {headerNav.map((item, index) => (
                            <li key={index} className={`${index === active ? 'active' : ''}`}>
                                <Link to={item.path}>
                                    {item.display}
                                    {item.chilldren && (
                                        <FaChevronDown
                                            onClick={showSubMenu}
                                            style={{
                                                cursor: 'pointer',
                                                marginLeft: '5px',
                                            }}
                                        />
                                    )}
                                </Link>
                                {item.chilldren && (
                                    <ul className="header__left-menu--submenu">
                                        {item.chilldren.map((child, index) => (
                                            <li key={index}>
                                                <Link to={child.path}>{child.display}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </div>
                </div>
                <div className="header__right">
                    <h3>
                        Buys me a beer <FaBeer />?
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Header;
