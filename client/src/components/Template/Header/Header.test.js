import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  describe('about render', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Header />);
    });

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('utility-btn active when isAnserComplete is true', () => {
      wrapper.setProps({ isAnswerComplete: true });
      expect(wrapper.find('.Header__utility-btn.active').length).toBe(1);
    });

    it('utility-btn active when isCheckComplete is true', () => {
      wrapper.setProps({ isCheckComplete: true });
      expect(wrapper.find('.Header__utility-btn.active').length).toBe(1);
    });
  });

  describe('about props', () => {
    const props = { testProps: 'test' };
    const wrapper = mount(<Header {...props} />);

    it('allows to set props', () => {
      expect(wrapper.props()).toEqual(props);
    });
  });

  describe('about event handlers', () => {
    const props = {
      onCheckClick: jest.fn(),
      onHomeClick: jest.fn(),
      onNextClick: jest.fn()
    };
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Header {...props} />);
    });

    it('handleLogoClick works when title clicked', () => {
      wrapper.find('.Header__title > h1').simulate('click');
      expect(props.onHomeClick).toHaveBeenCalledTimes(1);
    });

    it('handleCheckClick works when title clicked', () => {
      wrapper.setProps({ isAnswerComplete: true });
      wrapper.find('.Header__utility-btn.active').simulate('click');
      expect(props.onCheckClick).toHaveBeenCalledTimes(1);
    });

    it('handleNextClick works when title clicked', () => {
      wrapper.setProps({ isCheckComplete: true });
      wrapper.find('.Header__utility-btn.active').simulate('click');
      expect(props.onNextClick).toHaveBeenCalledTimes(1);
    });
  });
});
