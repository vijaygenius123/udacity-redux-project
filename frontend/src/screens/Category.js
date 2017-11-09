import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Posts from '../components/Posts';
import OrderingButton from '../components/OrderingButton';
import { getAllPostsByCategory } from '../actions/posts';
import { getAllCategories } from '../actions/categories';

class Category extends Component {
  componentDidMount = async () => {
    await this.props.getAllPostsByCategory(this.props.match.params.category);
  }

  renderEmpty = () => <h1>Please select a category</h1>;

  render() {
    const { categories, match } = this.props;
    return (
      <section>
        {match.params.category ?
        <div>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h2>All posts in {match.params.category}</h2>
            </div>
            <OrderingButton />
          </div>
            <Posts posts={this.props.posts} />
          <div className="d-flex flex-row justify-content-end mt-2">
            <div>
              <Link to="/add" className="btn btn-primary"><i className="fa fa-plus"></i>Add new post</Link>
            </div>
          </div>
        </div>
        :
        this.renderEmpty()}
      <div>
        <h3>All Categories</h3>
        <ul>
          {categories.map(category => <Link key={`${category.path}key`} to={`/${category.path}`}><li>{category.name}</li></Link>)}
        </ul>
      </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postsByCategory.data,
  categories: state.categories.data,
});

const mapDispatchToProps = {
  getAllPostsByCategory,
  getAllCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
