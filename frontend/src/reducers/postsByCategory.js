import {
  GET_POSTS_BY_CATEGORY_END,
  GET_POSTS_BY_CATEGORY_ERROR,
  GET_POSTS_BY_CATEGORY_START,
  VOTE_POST_START,
  VOTE_POST_END,
  VOTE_POST_ERROR,
} from '../actions/posts';

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_POSTS_BY_CATEGORY_END: {
      const { posts } = action;
      return {
        ...state,
        data: posts,
        isLoading: false,
      };
    }
    case GET_POSTS_BY_CATEGORY_ERROR: {
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error,
      };
    }
    case VOTE_POST_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case VOTE_POST_END: {
      const { post } = action;
      console.log(data);
      const data = state.data.map((oldPost) => (oldPost.id === post.id ? {...oldPost, voteScore: post.voteScore} : oldPost));
      console.log(data);
      return {
        ...state,
        data,
        isLoading: true,
      };
    }
    case VOTE_POST_ERROR: {
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error,
      };
    }
    default:
      return state;
  }
};
