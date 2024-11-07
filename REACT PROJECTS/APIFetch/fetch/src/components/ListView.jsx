import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListView.css'; // Import CSS for custom card styles

const ListView = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div className="list-view">
            <h2>Posts</h2>
            <div className="card-container">
                {posts.map((post) => (
                    <Link to={`/detail/${post.id}`} key={post.id} className="card">
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 100)}...</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ListView;
