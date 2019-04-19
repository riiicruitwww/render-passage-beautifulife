import contentReducer, { initialState } from './contentReducer';
import {
  FETCH_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  INITIALIZE_APPLICATION
} from 'actions/actionTypes';

describe('contentReducer validate', () => {
  it('initial state validate', () => {
    const state = initialState;
    const result = contentReducer(undefined, {});

    expect(result).toEqual(state);
  });

  describe('action type is', () => {
    it('FETCH_TASK_ERROR', () => {
      const action = { type: FETCH_TASK_ERROR };
      const state = initialState;
      const result = contentReducer(state, action);

      expect(result.isLoading).toBe(false);
    });

    it('FETCH_TASK_REQUESTED', () => {
      const action = { type: FETCH_TASK_REQUESTED };
      const state = initialState;
      const result = contentReducer(state, action);

      expect(result.isLoading).toBe(true);
    });

    it('FETCH_TASK_SUCCESS', () => {
      const action = {
        type: FETCH_TASK_SUCCESS,
        chunkMap: { test: 'test' },
        passageBox: { test: 'test' },
        questions: ['test'],
        packType: 'test'
      };
      const state = initialState;
      const result = contentReducer(state, action);

      expect(result.isLoading).toBe(false);
      expect(result.chunkMap).toEqual(action.chunkMap);
      expect(result.passageBox).toEqual(action.passageBox);
      expect(result.questions).toEqual(action.questions);
      expect(result.packType).toBe(action.packType);
    });

    it('INITIALIZE_APPLICATION', () => {
      const action = { type: INITIALIZE_APPLICATION };
      const state = initialState;
      const result = contentReducer(state, action);

      expect(result).toBe(initialState);
    });
  });
});
