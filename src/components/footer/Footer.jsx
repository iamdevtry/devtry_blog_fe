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
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Services</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="footer__social">
                    <ul>
                        <li>
                            <Link>
                                <AiFillFacebook /> Facebook
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <AiFillGithub /> Github
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <AiFillInstagram /> Instagram
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <AiFillLinkedin /> LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright container">
                <p>© 2021 All rights reserved</p>
                <p>“ Knowledge is power 💡 ”</p>
                <Link>
                    <AiFillHeart /> iamdevtry.net
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
