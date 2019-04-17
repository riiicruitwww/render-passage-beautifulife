import reducer, { initialState } from './index';
import {
  CHECK_ANSWERS,
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  INITIALIZE_APPLICATION,
  SELECT_ANSWER_COMPLETE,
  SELECT_ANSWER_EVENT
} from '../actions/actionTypes';

describe('reducer validate', () => {
  it('initial state validate', () => {
    const state = initialState;
    const result = reducer(undefined, {});

    expect(result).toEqual(state);
  });

  describe('action type is', () => {
    it('CHECK_ANSWER', () => {
      const action = {
        type: CHECK_ANSWERS,
        isCheckComplete: true
      };
      const state = {
        questions: [
          {
            id: 'test',
            correct_answer: 'test'
          }
        ],
        userAnswer: {
          test: 'test'
        }
      };
      const result = reducer(state, action);

      expect(result.isCheckComplete).toBe(action.isCheckComplete);
      expect(result.checkResult.test).toEqual({
        isCorrect: true,
        correctAnswer: 'test'
      });
    });

    it('FETCH_TASK_ERROR', () => {
      const action = {
        type: FETCH_TASK_ERROR,
        isLoading: false
      };
      const state = initialState;
      const result = reducer(state, action);

      expect(result.isLoading).toBe(action.isLoading);
    });

    it('FETCH_TASK_REQUESTED', () => {
      const action = {
        type: FETCH_TASK_REQUESTED,
        isLoading: true
      };
      const state = initialState;
      const result = reducer(state, action);

      expect(result.isLoading).toBe(action.isLoading);
    });

    it('FETCH_TASK_SUCCESS', () => {
      const action = {
        type: FETCH_TASK_SUCCESS,
        isLoading: false,
        chunkMap: { test: 'test' },
        passageBox: { test: 'test' },
        questions: ['test'],
        packType: 'test'
      };
      const state = initialState;
      const result = reducer(state, action);

      expect(result.isLoading).toBe(action.isLoading);
      expect(result.chunkMap).toEqual(action.chunkMap);
      expect(result.passageBox).toEqual(action.passageBox);
      expect(result.questions).toEqual(action.questions);
      expect(result.packType).toBe(action.packType);
    });

    it('INITIALIZE_APPLICATION', () => {
      const action = {
        type: INITIALIZE_APPLICATION
      };
      const state = initialState;
      const result = reducer(state, action);

      expect(result).toBe(initialState);
    });

    it('SELECT_ANSWER_COMPLETE', () => {
      const action = {
        type: SELECT_ANSWER_COMPLETE,
        isAnswerComplete: true
      };
      const state = initialState;
      const result = reducer(state, action);

      expect(result.isAnswerComplete).toBe(action.isAnswerComplete);
    });

    it('SELECT_ANSWER_EVENT', () => {
      const action = {
        type: SELECT_ANSWER_EVENT,
        questionId: 'test',
        choiceNumber: 'test'
      };
      const state = initialState;
      const result = reducer(state, action);

      expect(result.userAnswer[action.questionId]).toBe(action.choiceNumber);
    });
  });
});
