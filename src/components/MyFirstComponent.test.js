import React from 'react';
import MyFirstComponent from './MyFirstComponent';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

expect.addSnapshotSerializer(serializer);

it('renders correctly', () => {
  const wrapper = shallow(
    <MyFirstComponent onClose={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders small header', () => {
  const wrapper = shallow(
    <MyFirstComponent onClose={() => {}} showSmallHeader={true} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders hide small header', () => {
  const wrapper = shallow(
    <MyFirstComponent onClose={() => {}} showSmallHeader={false} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders counter', () => {
  const wrapper = shallow(
    <MyFirstComponent onClose={() => {}} showSmallHeader={false} />
  );
  wrapper.setState({ counter: 10 });
  expect(wrapper).toMatchSnapshot();
});

it('should increment counter', () => {
  const wrapper = shallow(
    <MyFirstComponent onClose={() => {}} showSmallHeader={false} />
  );
  wrapper.find('button.counter').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
