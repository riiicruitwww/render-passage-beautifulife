import React from 'react';
import { shallow } from 'enzyme';
import Vocabulary from './Vocabulary';

describe('Vocabulary', () => {
  describe('about render', () => {
    const props = {
      vocabulary: {
        word: 'test',
        meaning: 'test'
      }
    };
    const wrapper = shallow(<Vocabulary {...props} />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('component rendered', () => {
      expect(wrapper.find('.Vocabulary').length).toBe(1);
    });
  });
});
