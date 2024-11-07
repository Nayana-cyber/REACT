import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailView = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error('Error fetching post details:', error);
            });
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="detail-view">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default DetailView;
