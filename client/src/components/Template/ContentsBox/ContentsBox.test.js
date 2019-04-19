import React from 'react';
import { shallow } from 'enzyme';
import ContentsBox from './ContentsBox';

describe('ContentsBox', () => {
  describe('about render', () => {
    const wrapper = shallow(<ContentsBox />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
