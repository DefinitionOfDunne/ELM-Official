import React from 'react';
import AlbumCover from '../images/album-cover.png';

const AlbumInfo = () => (
  <div id='album-info'>
  	<h1>Evan Lian's Debut Album</h1>
    <img src={AlbumCover} className='album-cover' alt='album cover' />
    <h1>Coming in 2017!</h1>
  </div>
)

export default AlbumInfo;