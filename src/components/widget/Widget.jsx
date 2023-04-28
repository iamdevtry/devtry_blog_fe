import { Link } from 'react-router-dom';
import './widget.scss';
import { useEffect, useState } from 'react';

const Widget = ({ title, categories }) => {
    const [prefix, setPrefix] = useState('');
    useEffect(() => {
        switch (title) {
            case 'Categories':
                setPrefix('categories');
                break;
            case 'Tags':
                setPrefix('tags');
                break;
            case 'Popular Posts':
                setPrefix('post');
                break;
            default:
                setPrefix('');
                break;
        }
    }, [title]);

    return (
        <div className="widget">
            <div className="widget__title">
                <h3>{title}</h3>
            </div>
            <div className="widget__content">
                <ul className="widget__categories">
                    {categories.map((category, index) => (
                        <li key={index} className="widget__category">
                            <Link
                                to={`${prefix}/${category.slug}/${
                                    prefix == 'tags' ? category.id : ''
                                }`}
                            >
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Widget;
