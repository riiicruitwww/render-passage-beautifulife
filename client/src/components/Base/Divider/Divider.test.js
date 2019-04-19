import React from 'react';
import { shallow } from 'enzyme';
import Divider from './Divider';

describe('Divider', () => {
  describe('about render', () => {
    const wrapper = shallow(<Divider />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
