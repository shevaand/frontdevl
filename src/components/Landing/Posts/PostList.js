import React from 'react';

import PostItem from './PostItem';

const PostList = ({
  posts,
  onEditPost,
  onRemovePost,
}) => (
  <ul>
    {posts.reverse().map(post => (  
      <PostItem
        key={post.uid}
        post={post}
        onEditPost={onEditPost}
        onRemovePost={onRemovePost}
      />
    ))}
  </ul>
);

export default PostList;
