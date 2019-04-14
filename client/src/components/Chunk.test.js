import React from 'react';
import { shallow } from 'enzyme';
import Chunk from './Chunk';

describe('Chunk', () => {
  describe('about render', () => {
    const props = {
      chunk: {
        chunk_id: 'testId',
        type: 'testType',
        children: []
      },
      chunkMap: {
        testId: {
          testType: 'testText'
        }
      }
    };
    const wrapper = shallow(<Chunk {...props} />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('component rendered', () => {
      expect(wrapper.find('.Chunk').length).toBe(1);
    });
  });
});
