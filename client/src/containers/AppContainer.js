import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import App from 'App';
import {
  checkAnswers,
  fetchTaskError,
  fetchTaskRequested,
  fetchTaskSuccess,
  initializeApplication
} from 'actions';

const mapStateToProps = state => {
  return {
    ...state.content,
    ...state.ui,
    ...state.router
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onInit: async path => {
      try {
        dispatch(fetchTaskRequested());

        let response = await fetch(`/api/v1${path}`, {
          mode: 'cors'
        });

        if (response.status !== 200) {
          throw new Error(`Responsed ${response.status}`);
        }

        response = await response.json();

        const { chunk_map, passage_box, questions, type } = response.task;

        dispatch(fetchTaskSuccess(chunk_map, passage_box, questions, type));
      } catch (err) {
        dispatch(fetchTaskError());
        console.error(err.message);
      }
    },
    onCheckClick: questionsFromContent => {
      dispatch(checkAnswers(questionsFromContent));
    },
    onNextClick: () => {
      dispatch(initializeApplication());
      history.push('/');
    },
    onHomeClick: () => {
      dispatch(initializeApplication());
      history.push('/');
    }
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onCheckClick: () => dispatchProps.onCheckClick(stateProps.questions)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(App)
);
