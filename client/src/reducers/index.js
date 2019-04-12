import {
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  chunkMap: {},
  passageBox: [],
  questions: []
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
        chunkMap: action.chunkMap,
        passageBox: action.passageBox,
        questions: action.questions
      });
    default:
      return state;
  }
};

export default reducer;
