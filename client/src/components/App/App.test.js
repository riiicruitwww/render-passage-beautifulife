import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Loader from '../Loader/Loader';
import ContentsBox from '../ContentsBox/ContentsBox';

App.prototype.renderPassgeBox = jest.fn();
App.prototype.renderPassageTranslations = jest.fn();
App.prototype.renderQuestions = jest.fn();
App.prototype.renderVocabularies = jest.fn();

describe('App component', () => {
  const props = {
    location: {
      pathname: 'test'
    },
    onInit: jest.fn()
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App {...props} />);
  });

  describe('about render', () => {
    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('component rendered', () => {
      expect(wrapper.find('.App').length).toBe(1);
    });

    it('Loader component rendered when isLoading is true', () => {
      wrapper.setProps({ isLoading: true });
      expect(wrapper.find(Loader).length).toBe(1);
    });

    describe('when packType is exist', () => {
      it('two ContentsBox components rendered', () => {
        wrapper.setProps({ packType: 'test' });
        expect(wrapper.find(ContentsBox).length).toBe(2);
      });

      it('two ContentsBox components rendered when isCheckComplete true', () => {
        wrapper.setProps({ isCheckComplete: true });
        expect(wrapper.find(ContentsBox).length).toBe(2);
      });
    });
  });

  describe('about state', () => {
    it('initial state set', () => {
      expect(wrapper.state()).toEqual({});
    });
  });

  describe('about props', () => {
    const wrapper = mount(<App {...props} />);

    it('allows to set props', () => {
      expect(wrapper.props()).toEqual(props);
    });
  });

  describe('about lifecycle method', () => {
    it('ComponentDidMout called once', () => {
      const props = {
        location: {
          pathname: 'test'
        },
        onInit: jest.fn()
      };
      const wrapper = mount(<App {...props} />);

      expect(props.onInit).toHaveBeenCalledTimes(1);
    });
  });
});
