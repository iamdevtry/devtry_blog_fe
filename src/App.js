import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Breadcum from './components/breadcum/Breadcum';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Breadcum
                    title={'Microsoft Developer Blogs'}
                    description={'The official blog for Microsoft developers.'}
                    navigation={'Home > Blogs > Microsoft Developer Blogs'}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
