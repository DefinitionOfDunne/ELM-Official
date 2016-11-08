const React = require('react');
const Header = require('./Header');
import '../component-stylesheets/style.css';
import SubscribeForm from './SubscribeForm';

const Landing = () => (
  <div className='landing-div'>
    <Header title='Evan Lian Music' />
    <SubscribeForm />
  </div>
 );

module.exports = Landing;
