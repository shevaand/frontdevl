import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { AuthUserContext } from '../../Session';
import { withFirebase } from '../../Firebase';
import PostList from './PostList';

import st from './style.module.css' 

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      head: '',
      text: '',
      file: '',
      images: '',
      loading: false,
    };
  }

  componentDidMount() {
    if (!this.props.posts.length) {
      this.setState({ loading: true });
    }

    this.onListenForPosts();
  }

  componentDidUpdate(props) {
    if (props.limit !== this.props.limit) {
      this.onListenForPosts();
    }
  }

  onListenForPosts = () => {
    this.props.firebase
      .posts()
      .orderByChild('createdAt')
      .limitToLast(this.props.limit)
      .on('value', snapshot => {
        this.props.onSetPosts(snapshot.val());

        this.setState({ loading: false });
      });
  };

  componentWillUnmount() {
    this.props.firebase.posts().off();
  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };
  onChangeImage = event => {
        // this.setState({ image: event.target.value })
    event.preventDefault();

    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = () => {
      this.setState({
        file: file,
        images: reader.result,
      });
      // this.imageSrc = reader.result;
    }
    // this.image = file;
    reader.readAsDataURL(file);
  };
  onChangeHead = event => {
      this.setState({ head: event.target.value })
  };

  onCreatePost = (event, authUser) => {
    this.props.firebase.posts().push({
      head: this.state.head,
      images: this.state.images,
      text: this.state.text,
      userId: authUser.uid,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
    });

    this.setState({
      head: '' ,
      images: '',
      text: '',
      });

    event.preventDefault();
  };

  onEditPost = (post, head, images, text) => {
    this.props.firebase.post(post.uid).set({
      ...post,
      head,
      images,
      text,
      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    });
  };

  onRemovePost = uid => {
    this.props.firebase.post(uid).remove();
  };

  onNextPage = () => {
    this.props.onSetPostsLimit(this.props.limit + 5);
    // console.log(this.props)
  };
  
  render() {
    const { users, posts } = this.props;
    const { head, text, loading, images, image } = this.state;

    let $image = null;
    if (images) {
      $image = (<img src={images} value={image} onChange={this.onChangeImage}/>);
    } else {
      $image = (<div className="previewText">Please select an Image for Preview</div>);
    }
    
   
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            {!posts && <div>There are no posts ...</div>}
              <form
                onSubmit={event =>
                  this.onCreatePost(event, authUser)
                }
              >
                  <input 
                  type="text"
                  value={head}
                  onChange={this.onChangeHead}
                  />
                  <div className={st.previewComponent}>
                      <input className={st.fileInput} 
                        type="file" 
                        onChange={this.onChangeImage} />
                      <div className={st.imgPreview}>
                        {$image}
                      </div>
                  </div>
                  <input
                      type="text"
                      value={text}
                      onChange={this.onChangeText}
                  />
                  <button type="submit">Send</button>
              </form>


            

            {loading && <div>Loading ...</div>}

            {posts && (
              <PostList
                posts={posts.map(post => ({
                  ...post,
                  user: users
                    ? users[post.userId]
                    : { userId: post.userId },
                }))}
                onEditPost={this.onEditPost}
                onRemovePost={this.onRemovePost}
              />
            )}

            {!loading && posts && (
              <button type="button" onClick={this.onNextPage}>
                More
              </button>
            )}
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.postState.posts || {}).map(
    key => ({
      ...state.postState.posts[key],
      uid: key,
    }),
  ),
  limit: state.postState.limit,
});

const mapDispatchToProps = dispatch => ({
  onSetPosts: posts =>
    dispatch({ type: 'POSTS_SET', posts }),
  onSetPostsLimit: limit =>
    dispatch({ type: 'POSTS_LIMIT_SET', limit }),
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Posts);
