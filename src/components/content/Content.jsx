import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
const Content = ({ data }) => {
    if (typeof data !== 'string') {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, something went wrong."
                extra={<Link to="/">Back Home</Link>}
            />
        );
    }
    return <div>{parse(data)}</div>;
};

export default Content;
