import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
  describe('about render', () => {
    const props = {
      paragraph: {
        children: []
      }
    };
    const wrapper = shallow(<Paragraph {...props} />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('component rendered', () => {
      expect(wrapper.find('.Paragraph').length).toBe(1);
    });
  });
});
