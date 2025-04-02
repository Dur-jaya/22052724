import React, { useState , useEffect } from 'react';
const LatestPosts = () => {
    const [latestPosts, setLatestPosts] = useState([]);
    const API_URL = 'YOUR_API_ENDPOINT_FOR_TOP_USERS';
    useEffect(() => {
        fetch(`${API_URL}?type=popular&latest=5`)
        .then(response => response.json())
        .then(data => setLatestPosts(data))
        .catch(error => console.error('Error fetching latest posts:',error));
    },[]);
    return(
        <div>
            <h2>Latest Posts</h2>
            {latestPosts.length > 0? (
                <ul>
                    {latestPosts.map(post =>(
                        <li key={post.id}>
                            {post.title} -{post.commentCount} comments
                        </li>
                    ))}
                </ul>
            ): (
                <p>Loading latest posts... </p>
            )}
        </div>
    );
};
export default LatestPosts;