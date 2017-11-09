import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post';

const Posts = ({ posts }) => {
  return (
    <section>
      <div className="list-group">
        {posts.map(post => <Post post={post} key={post.id} />)}
      </div>
    </section>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
