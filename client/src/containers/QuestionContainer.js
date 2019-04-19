import { connect } from 'react-redux';
import { Question } from 'Contents';

const mapStateToProps = (state, { question }) => {
  const { checkResult, isCheckComplete } = state.ui;
  const questionType = !isCheckComplete ? '' : 
    checkResult[question.id].isCorrect ? 'correct' : 'wrong';

  return {
    questionType
  };
};

export default connect(mapStateToProps)(Question);
