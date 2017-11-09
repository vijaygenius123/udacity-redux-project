import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import '../css/bootstrap.min.css'
import { Button, Panel, Grid, Row, Col, Well, Badge } from 'react-bootstrap'
import formatTimestamp from '../utils/formatTimestamp'
import CommentCount from './CommentCount'

class Posts extends Component {

  navigate = post => {
    this.props.history.push(`/${post.category}/${post.id}`)
  }

  render () {
     return (
      <div>
        <h3>Number of posts {this.props.posts.length} </h3>
        <div>
        {this.props.posts.map(post => ( 
          <Panel header={post.title}>
            <Grid>
              <Row className="show-grid">
                <Col xs={7} md={7}> <Well>{post.body}</Well></Col>
              </Row>
              <Row className="show-grid">
                <Col xs={2} md={2}>Author: {post.author}</Col>
                <Col xs={2} md={2}>Date: {formatTimestamp(post.timestamp)}</Col>
                <Col xs={2} md={2}>Category: {post.category}</Col>
                <Col xs={2} md={2}>Score <Badge>{post.voteScore}</Badge></Col>
              </Row>
              <Row className="show-grid">
                <Col xs={3} md={3}><CommentCount postId={post.id}/></Col>
              </Row>  
              <Row className="show-grid">
                <Col xs={3} md={3}><Button bsStyle="primary" onClick={() => this.navigate(post)}>Edit Post</Button></Col>
              </Row>
            </Grid>           
          </Panel>  
          )
        )}
        </div>
       </div> 
    )
  }
}

const mapStateToProps = ({posts}) => ({posts})

export default withRouter(connect(mapStateToProps)(Posts))
