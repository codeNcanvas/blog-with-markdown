
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import '../markdown-styles.css';
import { Helmet } from 'react-helmet-async';

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        console.error("Error fetching post:", err);
        if (err.response && err.response.status === 404) {
          setError('Post not found.');
        } else {
          setError('Failed to load the post. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost(); 

  }, [id]);

   const createMetaDescription = (markdown) => {
    if (!markdown) return '';
    // Remove Markdown formatting and trim to a suitable length (e.g., 155 chars).
    const plainText = markdown
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Keep link text
      .replace(/[`*#_~]/g, '') // Remove markdown characters
      .replace(/\s+/g, ' '); // Normalize whitespace
    
    return plainText.substring(0, 155).trim() + '...';
  };

  if (loading) {
    return <div>Loading post...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }



  return (
    <article className="post-full">
      <Helmet>
        <title>{`${post.title} | My Awesome Blog`}</title>
        <meta 
          name="description" 
          content={createMetaDescription(post.markdownContent)} 
        />
      </Helmet>
      <h1>{post.title}</h1>
      <div className="post-full-meta">
        <span>by {post.author}</span>
        <span>Published on {new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="post-full-content">
        <ReactMarkdown>{post.markdownContent}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostPage;