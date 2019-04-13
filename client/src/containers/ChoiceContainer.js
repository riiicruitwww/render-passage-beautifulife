import { connect } from 'react-redux';
import Choice from '../components/Choice';
import { selectAnswerComplete, selectAnswerEvent } from '../actions';

const mapStateToProps = state => {
  return {
    checkResult: state.reducer.checkResult,
    isCheckComplete: state.reducer.isCheckComplete,
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
