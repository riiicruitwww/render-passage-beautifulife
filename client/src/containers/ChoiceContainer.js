import { connect } from 'react-redux';
import { Choice } from 'Contents';
import { selectAnswerComplete, selectAnswerEvent } from 'actions';
import charCodeToNum from 'utils/charCodeToNum';

const mapStateToProps = (state, { choice, questionId }) => {
  const number = charCodeToNum(choice.number);
  const isSelected = state.ui.userAnswer[questionId] === number;
  let choiceType = isSelected ? 'selected' : '';

  if (state.ui.isCheckComplete) {
    if (state.ui.checkResult[questionId].correctAnswer === number) {
      choiceType = 'answer';
    } else if (isSelected) {
      choiceType = 'wrong';
    }
  }

  return {
    choiceType,
    number,
    questionsLength: state.content.questions.length,
    userAnswer: state.ui.userAnswer
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
