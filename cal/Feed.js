import React, { useState, useEffect } from 'react';

function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/feed') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setFeed(data))
      .catch(error => console.error('Error fetching feed:', error));

    const intervalId = setInterval(() => {
      fetch('http://localhost:3000/feed') // Fetch updates regularly
        .then(response => response.json())
        .then(data => setFeed(data))
        .catch(error => console.error('Error fetching feed updates:', error));
    }, 5000); // Fetch updates every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h2>Feed</h2>
      <ul>
        {feed.map(post => (
          <li key={post.id}>
            {post.title}
            {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
