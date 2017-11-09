import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions'
import { Icon, Item, Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Message } from 'semantic-ui-react';


class App extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {

    if (this.props.hasErrored) {
      return (
        <p>Sorry! there is an error while loading the post</p>
      )
    };

    if (this.props.isLoading) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image
                size='mini'
                src='/logo.png'
                style={{ marginRight: '1.5em' }}
              />
              Project Name
        </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
        <Container text style={{ marginTop: '7em' }}>
          {this.props.posts.map((post) => (
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header as='a'>{post.title}</Item.Header>
                  <Item.Description>{post.body}</Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> {post.voteScore}
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          ))}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (url) => dispatch(postsFetchData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
