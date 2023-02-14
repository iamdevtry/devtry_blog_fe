import './breadcum.scss';

const Breadcum = ({ title, description, navigation }) => {
    return (
        <div className="breadcum">
            <div className="breadcum__container container">
                <div className="breadcum__container__title">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="breadcum__container__navigation">
                    <span>{navigation}</span>
                </div>
            </div>
        </div>
    );
};
export default Breadcum;
