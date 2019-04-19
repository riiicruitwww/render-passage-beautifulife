import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { Divider, Loader } from 'Base';
import { Paragraph, Passage, Vocabulary } from 'Contents';
import { ContentsBox } from 'Template';
import QuestionContainer from 'containers/QuestionContainer';

describe('App component', () => {
  const props = {
    passageBox: {
      view_tree: {
        children: ['test']
      },
      passages: ['test'],
      passage_translations: ['test'],
      vocabularies: ['test']
    },
    questions: ['test'],
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

    it('Loader component rendered when isLoading is true', () => {
      wrapper.setProps({ isLoading: true });
      expect(wrapper.find(Loader).length).toBe(1);
    });

    describe('when packType is exist', () => {
      it('two ContentsBox components rendered', () => {
        wrapper.setProps({ packType: 'test' });
        expect(wrapper.find(ContentsBox).length).toBe(2);
      });

      it('Paragraph and Passage and Question Component rendered', () => {
        expect(wrapper.exists(Paragraph)).toBe(true);
        expect(wrapper.exists(Passage)).toBe(true);
        expect(wrapper.exists(QuestionContainer)).toBe(true);
      });

      it('two ContentsBox components rendered when isCheckComplete true', () => {
        wrapper.setProps({ isCheckComplete: true });
        expect(wrapper.find(ContentsBox).length).toBe(2);
      });

      it('Passage and Vocabulary and Divider Component rendered', () => {
        expect(wrapper.exists(Passage)).toBe(true);
        expect(wrapper.exists(Vocabulary)).toBe(true);
        expect(wrapper.find(Divider).length).toBe(2);
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
      const wrapper = shallow(<App {...props} />);

      expect(props.onInit).toHaveBeenCalledTimes(1);
    });
  });
});
