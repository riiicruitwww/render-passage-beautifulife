import { connect } from 'react-redux';
import Choice from '../components/Choice';
import { selectAnswerEvent } from '../actions';

const mapStateToProps = state => {
  return { userAnswer: state.userAnswer };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickChoice: (questionId, choiceNumber) => {
      dispatch(selectAnswerEvent(questionId, choiceNumber));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
