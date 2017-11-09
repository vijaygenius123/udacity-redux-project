import {
  GET_COMMENTS_BY_POST_END,
  GET_COMMENTS_BY_POST_ERROR,
  GET_COMMENTS_BY_POST_START,
  VOTE_COMMENT_START,
  VOTE_COMMENT_END,
  VOTE_COMMENT_ERROR
} from '../actions/comments';

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_BY_POST_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_COMMENTS_BY_POST_END: {
      const { comments } = action;
      return {
        ...state,
        data: comments,
        isLoading: false,
      };
    }
    case GET_COMMENTS_BY_POST_ERROR: {
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error,
      };
    }
    case VOTE_COMMENT_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case VOTE_COMMENT_END: {
      const { comment } = action;
      const data = state.data.map((oldComment) => (oldComment.id === comment.id ? {...oldComment, voteScore: comment.voteScore} : oldComment));
      return {
        ...state,
        data,
        isLoading: true,
      };
    }
    case VOTE_COMMENT_ERROR: {
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
