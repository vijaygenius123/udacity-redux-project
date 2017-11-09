import { VOTE_POST_END, VOTE_POST_ERROR, VOTE_POST_START } from '../actions/posts';

const initialState = {
  isLoading: false,
  hasError: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VOTE_POST_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case VOTE_POST_END: {
      return {
        ...state,
        isLoading: false,
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
