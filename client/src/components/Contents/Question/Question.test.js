import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';

describe('Question', () => {
  describe('about render', () => {
    const props = {
      question: {
        order: 0
      }
    };
    const wrapper = shallow(<Question {...props} />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
