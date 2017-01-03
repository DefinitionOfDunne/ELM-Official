import React from 'react';
import ImageGallery from 'react-image-gallery';
import Header from './Header';

class Gallery extends React.Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13770354_10207395843115207_3552083306283032025_n.jpg?oh=9aaf724d2c4d155662f854c571efccea&oe=58722957',
        originalClass: 'featured-slide',
        description: 'Grand Rapids Poetry Slam, 2013'
      },
      {
        original: 'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/10154261_10101819258747905_8387034424993681149_n.jpg?oh=78f2919935aab219e05ef85d4f2135dc&oe=58D2AAFD',
        originalClass: 'featured-slide',
        description: 'Oklahoma Photo Shoot, 2013'
      },
      {
        original: 'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/17871_270732127940_6541800_n.jpg?oh=f5e06ab9f6c9852de4835f30ccbaa088&oe=5899228C',
        originalClass: 'featured-slide',
        description: 'Novi Open Mic, 2010'
      }
    ]

    return (
      <div className='landing-div'>
      <Header title='Gallery' />
      <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
      </div>
    );
  }

};

module.exports = Gallery
