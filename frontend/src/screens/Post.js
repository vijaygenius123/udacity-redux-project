import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Post from '../components/Post';
import Comments from '../components/Comments';

import { getPost } from '../actions/posts';
import { getComments } from '../actions/comments';

class PostScreen extends Component {
  componentDidMount = async () => {
    await this.props.getPost(this.props.match.params.postId);
    await this.props.getComments(this.props.post.id);
  }

  render() {
    const { post, comments } = this.props;
    return (
      <section>
        <Post post={post} />
        <section id="#comments" className="ml-2 mr-2 mt-2">
          <h3>Comments ({post.commentCount}):</h3>
          <div className="ml-2 mr-2">
            <Comments comments={comments} />
          </div>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post.data,
  comments: state.commentsByPost.data,
});

const mapDispatchToProps = {
  getPost: (id) => getPost(id),
  getComments: (id) => getComments(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
