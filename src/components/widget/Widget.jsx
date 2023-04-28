import { Link } from 'react-router-dom';
import './widget.scss';

const Widget = ({ title, categories }) => {
    return (
        <div className="widget">
            <div className="widget__title">
                <h3>{title}</h3>
            </div>
            <div className="widget__content">
                <ul className="widget__categories">
                    {categories.map((category, index) => (
                        <li key={index} className="widget__category">
                            <Link>{category.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Widget;
