const React = require('react');
const Navbar = require('./Navbar');
var FontAwesome = require('react-fontawesome');

const Footer = React.createClass({
  render () {
    return (
      <div className='footer'>
      	<div className='social-media-links'>
        <a className='footer-item' href='https://www.facebook.com/evan.lian.5' target='_blank'>
          <FontAwesome name='facebook' size='2x'/>
        </a>
        <a className='footer-item' href='https://twitter.com/EvanWill1ams' target='_blank'>
          <FontAwesome name='twitter' size='2x'/>
        </a>
        <a className='footer-item' href='https://soundcloud.com/evahnsan' target='_blank'>
            <FontAwesome name='soundcloud' size='2x'/>
        </a>
        <a className='footer-item' href='https://www.instagram.com/evahnsan' target='_blank'>
            <FontAwesome name='instagram' size='2x'/>
        </a>
        <a className='footer-item' href='https://www.youtube.com/channel/UCfUDlrptpDOd7qBZyVxNLzg' target='_blank'>
            <FontAwesome name='youtube' size='2x'/>
        </a>
        <a className='footer-item' href='http://www.evanlian.tumblr.com/' target='_blank'>
            <FontAwesome name='tumblr' size='2x'/>
        </a>
        </div>
        <Navbar classname='footer-nav' />
        <div className='footer-attributes'>
        <p className='footer-notes'>For booking inquires please contact <a className='email-link' href='mailto:evanlianmusic@gmail.com'> evanlianmusic@gmail.com</a></p>
        <p className='footer-notes'>Website Built & Maintained By @DefinitionOfDunne</p>
        </div>
      </div>
    )
  }
});

module.exports = Footer;
