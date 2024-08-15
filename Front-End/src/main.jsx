import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LoginForm from './components/Login.jsx';
import Home from './components/Home.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<LoginForm />} />
          <Route path="explore" element={<LoginForm />} />
          <Route path="profile" element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
