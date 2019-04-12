import {
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  SELECT_ANSWER_EVENT
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  chunkMap: {},
  passageBox: [],
  questions: [],
  packType: '',
  userAnswer: {},
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
        chunkMap: action.chunkMap,
        passageBox: action.passageBox,
        questions: action.questions,
        packType: action.packType
      });

    case SELECT_ANSWER_EVENT:
      return Object.assign({}, state, {
        userAnswer: {
          ...state.userAnswer,
          [action.questionId]: action.choiceNumber
        }
      });

    default:
      return state;
  }
};

export default reducer;
