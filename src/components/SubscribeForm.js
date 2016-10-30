import React from 'react';

const SubscribeForm = () => (
  <div id='fanclub'>
    <header>
      <h1>Subscribe For Email Updates Regarding Shows & News!</h1>
    </header>

    <form
      name='fanclub-form'
      target='_blank'
    >
      <div>
      	<input type='email' name='EMAIL' placeholder='Your email address' className='input-form' />
      </div>

      <div>
        <input type='submit' value='Subscribe' name='subscribe' className='input-button'/>
      </div>
    </form>
  </div>
)

export default SubscribeForm;