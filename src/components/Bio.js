const React = require('react');
const Header = require('./Header');

const Bio = () => (
  <div className='landing-div'>
    <Header title='Bio Page' />
    <p className='block-text'>Hailing from Novi, Michigan, Evan Lian is a 23 year old singer/songwriter that carries the quiet reflectiveness of the suburbs with him in his music. The son of an engineer and violin teacher, Evan grew up surrounded by music.</p>
    <p className='block-text'>Starting with the violin at four, he picked up guitar along the way and hasn’t put it down since. It wasn’t long before he began writing songs as his own sort of diary, starting in high school and through his years at Grand Valley State University. Stories of growing pains, of first loves, of heartbreaks, and all the ups and downs in between.</p>
    <p className='block-text'>Evan decided to collect some of these stories for his debut album with the support of friends and family. Told in lullabies and soft harmonies, his music is honest in a way that only acoustic music can be. With a steady baritone voice, Evan reminds us of the most human moments we all experience.</p>
    <p className='block-text'>Many long nights and generously provided rides later, we are proud to share this collection of stories with you and hope that you will join us for the stories to come.</p>
  </div>
 );

module.exports = Bio;
