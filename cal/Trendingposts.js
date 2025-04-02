import React, { useState, useEffect } from 'react';

function TrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/trending-posts') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setTrendingPosts(data))
      .catch(error => console.error('Error fetching trending posts:', error));
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      <ul>
        {trendingPosts.map(post => (
          <li key={post.id}>
            {post.title} - {post.commentCount} comments
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingPosts;