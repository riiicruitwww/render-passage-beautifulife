import React from 'react';
import { shallow } from 'enzyme';
import Passage from './Passage';

describe('Passage', () => {
  describe('about render', () => {
    const props = {
      passage: {
        view_tree: []
      }
    };
    const wrapper = shallow(<Passage {...props} />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
