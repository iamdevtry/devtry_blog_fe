import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Breadcum from './components/breadcum/Breadcum';
import PostCard from './components/postcard/PostCard';
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
                <div className="content__wrap" style={{ padding: '20px 0' }}></div>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </BrowserRouter>
    );
}

export default App;
