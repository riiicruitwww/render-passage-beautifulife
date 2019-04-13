import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import App from '../components/App';
import {
  answersCheck,
  fetchTaskError,
  fetchTaskRequested,
  fetchTaskSuccess,
  initializeApplication
} from '../actions';

const mapStateToProps = state => {
  return {
    ...state.reducer,
    ...state.router
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onInit: async path => {
      try {
        dispatch(fetchTaskRequested());

        let response = await fetch(`http://localhost:80/api/v1${path}`, {
          mode: 'cors'
        });

        if (response.status !== 200) {
          throw new Error(`Responsed ${response.status}`);
        }

        response = await response.json();

        dispatch(
          fetchTaskSuccess(
            response.task.chunk_map,
            response.task.passage_box,
            response.task.questions,
            response.task.type
          )
        );
      } catch (err) {
        dispatch(fetchTaskError());
        console.error(err.message);
      }
    },
    onCheckClick: () => {
      dispatch(answersCheck());
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
