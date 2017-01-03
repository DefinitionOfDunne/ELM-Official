import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import Header from '../components/Header';

it('renders without crashing', () => {
  shallow(<Layout />);
});

it('renders title', () => {
  const wrapper = shallow(<Landing />);
  const welcome = <Header title='Evan Lian Music' />;
  expect(wrapper.contains(welcome)).toEqual(true);
});