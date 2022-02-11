import { Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';

// Pages
import Home from './routes/Home';
import Blog from './routes/blog/Blog';
import BlogPage from './routes/blog/BlogPage';
import NotFound from './routes/NotFound';

function App() {
    return (
        <>
            <Header title="React Projects" />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<BlogPage />} />

                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
