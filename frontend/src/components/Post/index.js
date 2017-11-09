import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { voteOnPost } from '../../actions/posts';

const Post = ({ post, voteOnPost }) => {
  const {
    id,
    title,
    body,
    timestamp,
    category,
    voteScore,
    commentCount,
    author,
  } = post;
  return (
    <div className="list-group-item list-group-item-action d-flex flex-row flex-nowrap">
      <div className="d-flex flex-row justify-content-center align-items-center align-self-start col-1">
        <div className="d-flex flex-column justify-content-center align-items-center align-content-center">
          <button onClick={() => voteOnPost(id, 'upVote')} type="button" className="btn btn-link p-0 m-0"><i className="fa fa-caret-up fa-2x"></i></button>
          <h5 className="mb-0">{voteScore}</h5>
          <button onClick={() => voteOnPost(id, 'downVote')} type="button" className="btn btn-link p-0 m-0"><i className="fa fa-caret-down fa-2x"></i></button>
        </div>
      </div>
      <div className="d-flex col-11">
        <div className="d-flex flex-column">
          <Link to={`/${category}/${id}`}><h4 className="mb-1">{title}</h4></Link>
          <p className="mb-1">{body}</p>
          <small>Category: <Link to={`/${category}`}>{category}</Link> | <Link to={`/${category}/${id}#comments`}><i className="fa fa-comment-o"></i> {commentCount}</Link></small>
        </div>
        <div className="d-flex align-self-start ml-auto">
          <small className="pull-right">Posted {moment(timestamp).fromNow()} by {author}</small>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  voteOnPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  voteOnPost: (id, option) => voteOnPost(id, option),
};

export default connect(null, mapDispatchToProps)(Post);
