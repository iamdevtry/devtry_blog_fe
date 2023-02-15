import { Divider } from 'antd';
import Widget from '../widget/Widget';

import './widget-list.scss';

const WidgetList = ({ widgets }) => {
    return (
        <div className="widget-list">
            {widgets.map((widget, index) => (
                <>
                    <Widget key={index} title={widget.title} categories={widget.categories} />
                    <Divider dashed />
                </>
            ))}
        </div>
    );
};

export default WidgetList;
