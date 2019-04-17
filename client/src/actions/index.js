import {
  CHECK_ANSWERS,
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  INITIALIZE_APPLICATION,
  SELECT_ANSWER_COMPLETE,
  SELECT_ANSWER_EVENT
} from './actionTypes';

export const checkAnswers = questions => ({
  type: CHECK_ANSWERS,
  questions
});

export const fetchTaskError = () => ({
  type: FETCH_TASK_ERROR
});

export const fetchTaskRequested = () => ({
  type: FETCH_TASK_REQUESTED
});

export const fetchTaskSuccess = (chunkMap, passageBox, questions, type) => ({
  type: FETCH_TASK_SUCCESS,
  chunkMap,
  passageBox,
  questions,
  packType: type
});

export const initializeApplication = () => ({
  type: INITIALIZE_APPLICATION
});

export const selectAnswerComplete = () => ({
  type: SELECT_ANSWER_COMPLETE
});

export const selectAnswerEvent = (questionId, choiceNumber) => ({
  type: SELECT_ANSWER_EVENT,
  questionId,
  choiceNumber
});
