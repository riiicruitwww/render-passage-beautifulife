import React from 'react';
import { shallow } from 'enzyme';
import WithRenderPropertyByName from './WithRenderPropertyByName';
import ChoiceContainer from 'containers/ChoiceContainer';
import { Paragraph } from 'Contents';

describe('Header', () => {
  const props = {
    property: {
      name: 'choice'
    }
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<WithRenderPropertyByName {...props} />);
  });

  describe('about render', () => {
    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Paragraph rendered when property.name is paragraph', () => {
      wrapper.setProps({ property: { name: 'paragraph' } });
      expect(wrapper.find(Paragraph).length).toBe(1);
    });

    it('component rendered when property.name is root', () => {
      wrapper.setProps({
        property: {
          name: 'root',
          children: [
            {
              name: 'paragraph'
            }
          ]
        }
      });
      expect(wrapper.find(Paragraph).length).toBe(1);
    });

    it('component rendered when property.name is choice_area', () => {
      wrapper.setProps({
        property: {
          name: 'choice_area',
          children: [
            {
              name: 'choice'
            }
          ]
        }
      });
      expect(wrapper.find(ChoiceContainer).length).toBe(1);
    });

    it('component rendered when property.name is question_area_area', () => {
      wrapper.setProps({
        property: {
          name: 'question_area',
          children: [
            {
              name: 'paragraph'
            }
          ]
        }
      });
      expect(wrapper.find(Paragraph).length).toBe(1);
    });
  });
});
