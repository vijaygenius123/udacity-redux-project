import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment';

const Comments = ({ comments }) => {
  return (
    <section>
      <div className="list-group">
        {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
      </div>
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comments;
