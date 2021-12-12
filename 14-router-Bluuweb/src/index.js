import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import App from './App';
import Inicio from './routes/Inicio';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Inicio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacto" element={<Contacto />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
