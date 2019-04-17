import { connect } from 'react-redux';
import Choice from '../components/Choice/Choice';
import { selectAnswerComplete, selectAnswerEvent } from '../actions';

const mapStateToProps = (state, { choice, questionId }) => {
  const number = String.fromCharCode(97 + choice.number);
  const isSelected = state.reducer.userAnswer[questionId] === number;
  let choiceType = isSelected ? 'selected' : '';

  if (state.reducer.isCheckComplete) {
    if (state.reducer.checkResult[questionId].correctAnswer === number) {
      choiceType = 'answer';
    } else if (isSelected) {
      choiceType = 'wrong';
    }
  }

  return {
    choiceType,
    number,
    questionsLength: state.reducer.questions.length,
    userAnswer: state.reducer.userAnswer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onComplete: () => {
      dispatch(selectAnswerComplete());
    },
    onSelect: (questionId, choiceNumber) => {
      dispatch(selectAnswerEvent(questionId, choiceNumber));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
