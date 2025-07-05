import './App.css';
import { GlobalProvider } from './context/GlobalContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import AddPost from './pages/AddPost.jsx';

function App() {

    return (
        <>
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <GlobalProvider>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/add" element={<AddPost/>}/>
                    </Routes>
                </GlobalProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
