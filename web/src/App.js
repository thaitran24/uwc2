import React from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank.js';
import DetailView from './pages/DetailView';
import SetVehicle from './pages/SetVehicle';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/detailView' element={<DetailView />} />
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/user' element={<SetVehicle />} />
                    <Route path='/order' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
     
    );
}

export default App;