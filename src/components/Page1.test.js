import React from 'react';
import Page1 from './Page1';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';
expect.addSnapshotSerializer(serializer);

it('renders correctly', () => {
  const wrapper = shallow(
    <Page1 location={{}} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders modal children correctly', () => {
  const wrapper = shallow(
    <Page1 location={{ state: { modal: true } }}>
      <h1>Test</h1>
    </Page1>
  );
  expect(wrapper).toMatchSnapshot();
});
