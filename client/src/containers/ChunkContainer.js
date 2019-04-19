import { connect } from 'react-redux';
import { Chunk } from 'Contents';

const mapStateToProps = state => {
  return { chunkMap: state.content.chunkMap };
};

export default connect(mapStateToProps)(Chunk);
