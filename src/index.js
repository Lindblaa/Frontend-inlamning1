import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeView from './views/HomeView';
import RegisterForm from './components/RegisterForm';
import CaseForm from './views/CaseForm';
import CaseDetail from './components/CaseDetail';
import CaseView from './views/CaseView';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/create" element={<CaseForm/>}/>
        <Route path='/caseview' element={<CaseView/>}/>
        <Route path="/casedetail/:id" element={<CaseDetail/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
