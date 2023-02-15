import { Divider } from 'antd';
import Widget from '../widget/Widget';

import './widget-list.scss';

const WidgetList = ({ widgets, vertical, styles }) => {
    return (
        <div className="widget-list">
            {widgets.map((widget, index) => (
                <div
                    className={`widget-list__item ${vertical ? 'widget-list-vertical' : ''}`}
                    style={{ ...styles }}
                    key={index}
                >
                    <Widget key={index} title={widget.title} categories={widget.categories} />
                    <Divider dashed />
                </div>
            ))}
        </div>
    );
};

export default WidgetList;
