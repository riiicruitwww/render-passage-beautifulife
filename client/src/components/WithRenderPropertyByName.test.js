import React from 'react';
import { shallow } from 'enzyme';
import WithRenderPropertyByName from './WithRenderPropertyByName';
import ChoiceContainer from '../containers/ChoiceContainer';
import Paragraph from './Paragraph';

describe('Header', () => {
  describe('about render', () => {
    it('compare with snapshot', () => {
      const props = {
        property: {
          name: 'choice'
        }
      };
      const wrapper = shallow(<WithRenderPropertyByName {...props} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('ChoiceContainer rendered when property.name is choice', () => {
      const props = {
        property: {
          name: 'choice'
        }
      };
      const wrapper = shallow(<WithRenderPropertyByName {...props} />);

      expect(wrapper.find(ChoiceContainer).length).toBe(1);
    });

    it('Paragraph rendered when property.name is paragraph', () => {
      const props = {
        property: {
          name: 'paragraph'
        }
      };
      const wrapper = shallow(<WithRenderPropertyByName {...props} />);

      expect(wrapper.find(Paragraph).length).toBe(1);
    });

    it('component rendered when property.name is root', () => {
      const props = {
        property: {
          name: 'root',
          children: [
            {
              name: 'paragraph'
            }
          ]
        }
      };
      const wrapper = shallow(<WithRenderPropertyByName {...props} />);

      expect(wrapper.find(Paragraph).length).toBe(1);
    });

    it('component rendered when property.name is choice_area', () => {
      const props = {
        property: {
          name: 'root',
          children: [
            {
              name: 'choice'
            }
          ]
        }
      };
      const wrapper = shallow(<WithRenderPropertyByName {...props} />);

      expect(wrapper.find(ChoiceContainer).length).toBe(1);
    });

    it('component rendered when property.name is question_area_area', () => {
      const props = {
        property: {
          name: 'root',
          children: [
            {
              name: 'paragraph'
            }
          ]
        }
      };
      const wrapper = shallow(<WithRenderPropertyByName {...props} />);

      expect(wrapper.find(Paragraph).length).toBe(1);
    });
  });
});
