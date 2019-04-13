import {
  ANSWERS_CHECK,
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  INITIALIZE_APPLICATION,
  SELECT_ANSWER_COMPLETE,
  SELECT_ANSWER_EVENT
} from '../actions/actionTypes';

const initialState = {
  isAnswerComplete: false,
  isCheckComplete: false,
  isLoading: false,
  checkResult: {},
  chunkMap: {},
  passageBox: [],
  questions: [],
  packType: '',
  userAnswer: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ANSWERS_CHECK:
      const checkResult = {};

      state.questions.forEach(question => {
        const result =
          question.correct_answer === state.userAnswer[question.id];
        checkResult[question.id] = {
          result,
          correctAnswer: question.correct_answer
        };
      });

      return Object.assign({}, state, {
        isCheckComplete: action.isCheckComplete,
        checkResult
      });

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

    case INITIALIZE_APPLICATION:
      return initialState;

    case SELECT_ANSWER_COMPLETE:
      return Object.assign({}, state, {
        isAnswerComplete: action.isAnswerComplete
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
