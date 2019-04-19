import {
  CHECK_ANSWERS,
  INITIALIZE_APPLICATION,
  SELECT_ANSWER_COMPLETE,
  SELECT_ANSWER_EVENT
} from 'actions/actionTypes';

export const initialState = {
  isAnswerComplete: false,
  isCheckComplete: false,
  checkResult: {},
  userAnswer: {}
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_ANSWERS:
      const checkResult = {};

      action.questions.forEach(question => {
        const isCorrect =
          question.correct_answer === state.userAnswer[question.id];
        checkResult[question.id] = {
          isCorrect,
          correctAnswer: question.correct_answer
        };
      });

      return {
        ...state,
        isCheckComplete: true,
        checkResult
      };

    case INITIALIZE_APPLICATION:
      return initialState;

    case SELECT_ANSWER_COMPLETE:
      return {
        ...state,
        isAnswerComplete: true
      };

    case SELECT_ANSWER_EVENT:
      return {
        ...state,
        userAnswer: {
          ...state.userAnswer,
          [action.questionId]: action.choiceNumber
        }
      };

    default:
      return state;
  }
};

export default uiReducer;
