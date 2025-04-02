import React from 'react';
import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <h1>Social Media Analytics</h1>
      <TopUsers />
      <TrendingPosts />
      <Feed />
    </div>
  );
}

export default App;