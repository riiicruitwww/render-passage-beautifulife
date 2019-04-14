import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  describe('about render', () => {
    const wrapper = shallow(<Loader />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('component rendered', () => {
      expect(wrapper.find('.Loader').length).toBe(1);
    });
  });
});
