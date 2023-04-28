import { Link } from 'react-router-dom';
import {
    AiFillFacebook,
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillHeart,
} from 'react-icons/ai';

import './footer.scss';

import Logo from '../../assets/images/go-logo.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info container">
                <div className="footer__links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/policy">Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="footer__social">
                    <ul>
                        <li>
                            <Link to="https://www.facebook.com/phongtrollisdabest/">
                                <AiFillFacebook /> Facebook
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/iamdevtry">
                                <AiFillGithub /> Github
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/phongtroll">
                                <AiFillInstagram /> Instagram
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/iamdevtry/">
                                <AiFillLinkedin /> LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright container">
                <p>© 2023 All rights reserved</p>
                <Link>
                    <AiFillHeart /> devtry.net
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
