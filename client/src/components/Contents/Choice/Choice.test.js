import React from 'react';
import { shallow } from 'enzyme';
import ChoiceContainer from 'containers/ChoiceContainer';
import Choice from './Choice';

describe('Choice', () => {
  describe('about render', () => {
    const props = {
      choice: {
        children: []
      }
    };
    const wrapper = shallow(<Choice {...props} />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('component rendered', () => {
      expect(wrapper.find('.Choice').length).toBe(1);
    });
  });
});
