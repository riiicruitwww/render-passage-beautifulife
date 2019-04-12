import { connect } from 'react-redux';
import App from '../components/App';
import {
  fetchTaskError,
  fetchTaskRequested,
  fetchTaskSuccess
} from '../actions';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onInit: async () => {
      try {
        dispatch(fetchTaskRequested());

        let response = await fetch(
          'http://localhost:80/api/v1/santa/toeic-part6',
          { mode: 'cors' }
        );

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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
