import {
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  INITIALIZE_APPLICATION
} from 'actions/actionTypes';

export const initialState = {
  isLoading: false,
  chunkMap: {},
  passageBox: [],
  questions: [],
  packType: ''
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK_ERROR:
      return {
        ...state,
        isLoading: false
      };

    case FETCH_TASK_REQUESTED:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chunkMap: action.chunkMap,
        passageBox: action.passageBox,
        questions: action.questions,
        packType: action.packType
      };

    case INITIALIZE_APPLICATION:
      return initialState;

    default:
      return state;
  }
};

export default contentReducer;
