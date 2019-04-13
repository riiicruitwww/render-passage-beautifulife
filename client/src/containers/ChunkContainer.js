import { connect } from 'react-redux';
import Chunk from '../components/Chunk';

const mapStateToProps = state => {
  return { chunkMap: state.reducer.chunkMap };
};

export default connect(
  mapStateToProps,
  null
)(Chunk);
