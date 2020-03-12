const INITIAL_STATE = {
    posts: null,
    limit: 5,
  };

  const applySetPosts = (state, action) => ({
    ...state,
    posts: action.posts,
  });

  const applySetPostsLimit = (state, action) => ({
    ...state,
    limit: action.limit,
  });

  function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'POSTS_SET': {
        return applySetPosts(state, action);
      }
      case 'POSTS_LIMIT_SET': {
        return applySetPostsLimit(state, action);
      }
      default:
        return state;
    }
  }
  
  export default postReducer;