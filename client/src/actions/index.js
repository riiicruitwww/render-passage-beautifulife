import {
  ANSWERS_CHECK,
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  INITIALIZE_APPLICATION,
  SELECT_ANSWER_COMPLETE,
  SELECT_ANSWER_EVENT
} from './actionTypes';

export const answersCheck = () => ({
  type: ANSWERS_CHECK,
  isCheckComplete: true
});

export const fetchTaskError = () => ({
  type: FETCH_TASK_ERROR,
  isLoading: false
});

export const fetchTaskRequested = () => ({
  type: FETCH_TASK_REQUESTED,
  isLoading: true
});

export const fetchTaskSuccess = (
  chunkMap,
  passageBox,
  questions,
  type
) => ({
  type: FETCH_TASK_SUCCESS,
  isLoading: false,
  chunkMap,
  passageBox,
  questions,
  packType: type
});

export const initializeApplication = () => ({
  type: INITIALIZE_APPLICATION
});

export const selectAnswerComplete = () => ({
  type: SELECT_ANSWER_COMPLETE,
  isAnswerComplete: true
});

export const selectAnswerEvent = (questionId, choiceNumber) => ({
  type: SELECT_ANSWER_EVENT,
  questionId,
  choiceNumber
});
