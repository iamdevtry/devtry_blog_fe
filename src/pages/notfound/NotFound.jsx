import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

const NotFound = () => (
    <div className="container" style={{ padding: '20px 15px' }}>
        <Helmet>
            <title>404 | Devtry Blog</title>
            <meta name="description" content="This page not found" />
            <meta name="keywords" content="Devtry.net Devry.net" />
        </Helmet>
        <Result
            style={{ marginTop: '2rem' }}
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary">
                    <Link to="/">Back Home</Link>
                </Button>
            }
        />
    </div>
);
export default NotFound;
