import React, { useState,useEffect }from 'react';
const TopUsers = () => {
    const [topUsers,setTopUsers] = useState([]);
    const API_URL = 'YOUR_API_ENDPOINT_FOR_TOP_USERS';
    useEffect(() =>{
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setTopUsers(data))
        .catch(error => console.error('Error fetching top users:',error));
    },[]);
    return(
        <div>
            <h2>Top Users</h2>
            { topUsers.length > 0?(
                <ul>
                    { topUsers.map(user =>(
                        <li key={user.id}>
                            {user.username} -{user.postCount}posts
                            </li>
                    ))}
                    
                </ul>
                ) : (
                    <p>Loading top users ...</p>
                )}
                </div>
            );
            };
            export default TopUsers;