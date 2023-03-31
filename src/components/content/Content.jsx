import parse from 'html-react-parser';
const Content = ({ data }) => {
    return <div>{parse(data)}</div>;
};

export default Content;
