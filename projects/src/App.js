import { Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';

// Pages
import Home from './routes/Home';
import Blog from './routes/blog/Blog';
import BlogPage from './routes/blog/BlogPage';
import NotFound from './routes/NotFound';
import Slideshow from './routes/slideshow/Slideshow';
import BudgetApp from './routes/budget/BudgetApp';
import CRUDtable from './routes/crud-table/CRUDtable';
import CRUDtableJSON from './routes/crud-table/CRUDtableJSON';

const App = () => {
    return (
        <>
            <Header title="React Projects" />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<BlogPage />} />

                    <Route path="slideshow" element={<Slideshow />} />

                    <Route path="budget" element={<BudgetApp /> } />

                    <Route path="crud-table" element={<CRUDtable /> } />
                    <Route path="crud-table-json" element={<CRUDtableJSON /> } />

                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
};

export default App;
