import {
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK_ERROR:
    case FETCH_TASK_REQUESTED:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    case FETCH_TASK_SUCCESS:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        packType: action.packType,
        questions: action.questions,
        passageBox: action.passageBox,
        chunkMap: action.chunkMap
      });
    default:
      return state;
  }
};

export default reducer;
