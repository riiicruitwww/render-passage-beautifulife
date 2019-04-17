import { connect } from 'react-redux';
import Question from '../components/Question/Question';

const mapStateToProps = (state, { question }) => {
  const { checkResult, isCheckComplete } = state.reducer;
  const questionType = !isCheckComplete ? '' : 
    checkResult[question.id].isCorrect ? 'correct' : 'wrong';

  return {
    questionType
  };
};

export default connect(mapStateToProps)(Question);
