import React from 'react';
import { shallow } from 'enzyme';

import { RubricBuilder } from '../src/RubricBuilder';

describe('RubricBuilder', () => {
  it('should render correctly', () => {
    const component = shallow(<RubricBuilder />);
    expect(component).toMatchSnapshot();
  });
});
