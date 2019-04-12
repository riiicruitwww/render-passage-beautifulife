import {
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  SELECT_ANSWER_EVENT
} from './actionTypes';

export const fetchTaskError = () => ({
  type: FETCH_TASK_ERROR,
  isLoading: false
});

export const fetchTaskRequested = () => ({
  type: FETCH_TASK_REQUESTED,
  isLoading: true
});

export const fetchTaskSuccess = (chunkMap, passageBox, questions, type) => ({
  type: FETCH_TASK_SUCCESS,
  isLoading: false,
  chunkMap,
  passageBox,
  questions,
  packType: type
});

export const selectAnswerEvent = (questionId, choiceNumber) => ({
  type: SELECT_ANSWER_EVENT,
  questionId,
  choiceNumber
})
