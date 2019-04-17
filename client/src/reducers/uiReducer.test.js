import uiReducer, { initialState } from './uiReducer';
import {
  CHECK_ANSWERS,
  INITIALIZE_APPLICATION,
  SELECT_ANSWER_COMPLETE,
  SELECT_ANSWER_EVENT
} from '../actions/actionTypes';

describe('uiReducer validate', () => {
  it('initial state validate', () => {
    const state = initialState;
    const result = uiReducer(undefined, {});

    expect(result).toEqual(state);
  });

  describe('action type is', () => {
    it('CHECK_ANSWER', () => {
      const action = {
        type: CHECK_ANSWERS,
        questions: [
          {
            id: 'test',
            correct_answer: 'test'
          }
        ]
      };
      const state = {
        userAnswer: {
          test: 'test'
        }
      };
      const result = uiReducer(state, action);

      expect(result.isCheckComplete).toBe(true);
      expect(result.checkResult.test).toEqual({
        isCorrect: true,
        correctAnswer: 'test'
      });
    });

    it('INITIALIZE_APPLICATION', () => {
      const action = { type: INITIALIZE_APPLICATION };
      const state = initialState;
      const result = uiReducer(state, action);

      expect(result).toBe(initialState);
    });

    it('SELECT_ANSWER_COMPLETE', () => {
      const action = { type: SELECT_ANSWER_COMPLETE };
      const state = initialState;
      const result = uiReducer(state, action);

      expect(result.isAnswerComplete).toBe(true);
    });

    it('SELECT_ANSWER_EVENT', () => {
      const action = {
        type: SELECT_ANSWER_EVENT,
        questionId: 'test',
        choiceNumber: 'test'
      };
      const state = initialState;
      const result = uiReducer(state, action);

      expect(result.userAnswer[action.questionId]).toBe(action.choiceNumber);
    });
  });
});
