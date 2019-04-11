import {
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS
} from './actionTypes';

export const fetchTaskError = () => ({
  type: FETCH_TASK_ERROR,
  isLoading: false
});

export const fetchTaskRequested = () => ({
  type: FETCH_TASK_REQUESTED,
  isLoading: true
});

export const fetchTaskSuccess = (
  type,
  questions,
  passageBox,
  chunkMap
) => ({
  type: FETCH_TASK_SUCCESS,
  isLoading: false,
  packType: type,
  questions,
  passageBox,
  chunkMap
});
