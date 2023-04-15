import { useEffect, useRef, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { FaBeer, FaChevronDown } from 'react-icons/fa';

import './header.scss';
import logo from '../../assets/images/go-logo.svg';

const headerNav = [
    {
        display: 'Trang chủ',
        path: '/',
    },
    // {
    //     display: 'Blog',
    //     path: '/blog',
    // },
    {
        display: 'Categories',
        path: '#',
        chilldren: [
            {
                display: 'Category 1',
                path: '1st-category',
            },
            {
                display: 'Category 2',
                path: '2st-category',
            },
            {
                display: 'Category 3',
                path: '3st-category',
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

    const ref = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const active = headerNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="header">
            <div className="header__wrap container">
                <div className="header__left">
                    <div className="header__left-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="header__left-menu" ref={ref}>
                        {headerNav.map((item, index) => (
                            <li key={index} className={`${index === active ? 'active' : ''}`}>
                                <Link
                                    to={item.path}
                                    style={{ alignItems: 'center', display: 'flex' }}
                                >
                                    {item.display}
                                    {item.chilldren && (
                                        <FaChevronDown
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                                            style={{
                                                cursor: 'pointer',
                                                marginLeft: '5px',
                                            }}
                                        />
                                    )}
                                </Link>
                                {item.chilldren && (
                                    <ul
                                        className={`header__left-menu--submenu ${
                                            isMenuOpen ? 'show' : ''
                                        }`}
                                    >
                                        {item.chilldren.map((child, index) => (
                                            <li key={index}>
                                                <Link to={`categories/${child.path}`}>
                                                    {child.display}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </div>
                </div>
                <div className="header__right">
                    <Link
                        to="https://www.buymeacoffee.com/devtry"
                        target="_blank"
                        style={{ height: '100%' }}
                    >
                        <img
                            className="header__right--buy-me-a-coffee"
                            src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
                            alt="Buy Me A Coffee"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
