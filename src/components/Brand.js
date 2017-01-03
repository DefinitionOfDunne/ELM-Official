const React = require('react');
import BrandLogo from '../images/evan-brand.png'

const Brand = React.createClass({
  render () {
    return (
      <div className='brand-logo'>
      <div className='brand-left'>
      	<img src={BrandLogo} className='logo' alt='logo' />
        <div className='logo-text-container'>
        <p className='logo-text'><span>E</span>van</p>
        <p className='logo-text'><span>L</span>ian</p>
        <p className='logo-text'><span>M</span>usic</p>
        </div>
        </div>
        <div className='brand-right'>
        <p className='tour-info'> Upcoming Shows</p>
        <p className='tour-info-labels'> Location </p>
        <p className='tour-info-labels'> Date </p>
        <p className='show-info'> No Shows Scheduled for 2016 </p>
        <p className='show-info'> Check Back Soon Or </p>
        <p className='show-info'> Subscribe For Updates! </p>
        </div>
        </div>
    )
  }
});

module.exports = Brand;