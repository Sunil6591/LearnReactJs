import React from 'react';
import MyFirstComponent from './MyFirstComponent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MyFirstComponent onClose={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders small header', () => {
  const tree = renderer.create(
    <MyFirstComponent onClose={() => {}} showSmallHeader={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders hide small header', () => {
  const tree = renderer.create(
    <MyFirstComponent onClose={() => {}} showSmallHeader={false} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
