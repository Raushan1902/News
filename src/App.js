// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
