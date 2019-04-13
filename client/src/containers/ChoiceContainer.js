import { connect } from 'react-redux';
import Choice from '../components/Choice';
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
    onClickChoice: (questionId, choiceNumber, questionsLength, userAnswer) => {
      dispatch(selectAnswerEvent(questionId, choiceNumber));

      if (
        questionsLength === Object.keys(userAnswer).length + 1 &&
        !userAnswer[questionId]
      ) {
        dispatch(selectAnswerComplete());
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
