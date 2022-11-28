import React, { Component }  from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank.js';
import DetailView from './pages/DetailView';
import Overview from './pages/Overview';

function App() {
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/detailView' element={<DetailView />} />
                    <Route path='/overview' element={<Overview />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/user' element={<Blank />} />
                    <Route path='/order' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
     
    );
}

export default App;