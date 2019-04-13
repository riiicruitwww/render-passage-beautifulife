import { connect } from 'react-redux';
import Question from '../components/Question';

const mapStateToProps = (state, { question }) => {
  const { checkResult, isCheckComplete } = state.reducer;
  let questionType;

  if (isCheckComplete) {
    if (checkResult[question.id].result) {
      questionType = 'correct';
    } else {
      questionType = 'wrong';
    }
  } else {
    questionType = '';
  }

  return {
    questionType
  };
};

export default connect(
  mapStateToProps,
  null
)(Question);
