import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {
  const snippet = post.markdownContent
    .replace(/[#*`]/g, '') // A simple regex to remove common markdown characters
    .substring(0, 150) + '...';

  return (
    <Link to={`/post/${post._id}`} className="post-link">
    <article className="post-list-item">
      <h2>{post.title}</h2>
      <div className="post-meta">
        <span>by {post.author}</span>
        {/* We format the ISO date string into a more readable local date format. */}
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <p>{snippet}</p>
    </article>
    </Link>
  );
};

export default PostListItem;