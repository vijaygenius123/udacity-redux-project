import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { voteOnComment } from '../../actions/comments';

const Comment = ({ comment, voteOnComment }) => {
  const {
    id,
    title,
    body,
    timestamp,
    voteScore,
    author,
  } = comment;
  return (
    <div className="list-group-item list-group-item-action d-flex flex-row flex-nowrap">
      <div className="d-flex flex-row justify-content-center align-items-center align-self-start col-1">
        <div className="d-flex flex-column justify-content-center align-items-center align-content-center">
          <button onClick={() => voteOnComment(id, 'upVote')} type="button" className="btn btn-link p-0 m-0"><i className="fa fa-caret-up fa-2x"></i></button>
          <h5 className="mb-0">{voteScore}</h5>
          <button onClick={() => voteOnComment(id, 'downVote')} type="button" className="btn btn-link p-0 m-0"><i className="fa fa-caret-down fa-2x"></i></button>
        </div>
      </div>
      <div className="d-flex col-11">
        <div className="d-flex flex-column">
          <h4>{title}</h4>
          <p className="mb-1">{body}</p>
        </div>
        <div className="d-flex align-self-start ml-auto">
          <small className="pull-right">Posted {moment(timestamp).fromNow()} by {author}</small>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  voteOnComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  voteOnComment: (id, option) => voteOnComment(id, option),
};

export default connect(null, mapDispatchToProps)(Comment);