import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ArticlesPage from './Components/ArticlesPage';
import ArticleDetail from './Components/ArticleDetail';
import Topbar from './Components/Topbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/*" element={<ArticlesPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
