import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {sortPosts} from '../actions/posts'
import '../css/bootstrap.min.css'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'

class Controls extends Component {
  addPost = () => {
    this.props.history.push('/new')
  }

  render () {

    return (
      <div>
        <h2>Actions</h2>
        <ListGroup> 
            <ListGroupItem key="Add" >
               <Button onClick={this.addPost}>Add post</Button>
            </ListGroupItem>
            <ListGroupItem key="Add" >
               <Button onClick={() => this.props.sortPosts('title','asc')}>Sort by title</Button>
            </ListGroupItem>
            <ListGroupItem key="Add" >
              <Button onClick={() => this.props.sortPosts('timestamp','desc')}>Sort by date (desc)</Button>
            </ListGroupItem>
            <ListGroupItem key="Add" >
              <Button onClick={() => this.props.sortPosts('timestamp','asc')}>Sort by date (asc)</Button>
            </ListGroupItem>
            <ListGroupItem key="Add" >
              <Button onClick={() => this.props.sortPosts('voteScore','asc')}>Sort by score (asc)</Button>
            </ListGroupItem>
            <ListGroupItem key="Add" >
              <Button onClick={() => this.props.sortPosts('voteScore','desc')}>Sort by score (desc)</Button>
            </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = ({categories, posts}) => ({categories, posts})
const mapDispatchToProps = {sortPosts}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Controls))