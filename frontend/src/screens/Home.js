import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Posts from '../components/Posts';
import OrderingButton from '../components/OrderingButton';
import { getAllPosts } from '../actions/posts';
import { getAllCategories } from '../actions/categories';

class Home extends Component {
  componentDidMount = () => {
    this.initialQuery();
  }

  initialQuery = async () => {
    await this.props.getAllPosts();
    await this.props.getAllCategories();
  }

  render() {
    const { posts, categories } = this.props;
    return (
      <div>
        <div className="d-flex flex-row justify-content-between">
          <div>
            <h2>All Posts</h2>
          </div>
          <OrderingButton />
        </div>
        <Posts posts={posts} />
        <div className="d-flex flex-row justify-content-end mt-2">
          <div>
            <Link to="/add" className="btn btn-primary"><i className="fa fa-plus"></i>Add new post</Link>
          </div>
        </div>
        <div>
          <h3>All Categories</h3>
          <ul>
            {categories.map(category => <Link key={`${category.path}key`} to={`/${category.path}`}><li>{category.name}</li></Link>)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.data,
  categories: state.categories.data,
});

const mapDispatchToProps = {
  getAllPosts,
  getAllCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
