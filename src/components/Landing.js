const React = require('react');
const Header = require('./Header');
import '../component-stylesheets/style.css';
import SubscribeForm from './SubscribeForm';
import AlbumInfo from './AlbumInfo';

const Landing = () => (
  <div className='landing-div'>
    <Header title='Evan Lian Music' />
    <AlbumInfo />
    <SubscribeForm />
  </div>
 );

module.exports = Landing;
