import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  describe('about render', () => {
    const wrapper = shallow(<NotFound />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('component rendered', () => {
      expect(wrapper.find('.NotFound').length).toBe(1);
    });
  });
});
