import { connect } from 'react-redux';
import Chunk from '../components/Chunk';
import {} from '../actions';

const mapStateToProps = state => {
  return {
    chunkMap: state.chunkMap
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chunk);
