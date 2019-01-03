/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Carousel from '../generic-carousel/index'


export default class Index extends React.Component {
  render() {
    let img_array = [
        {"src": "/static/images/carousel.png","array_text": []},
        {"src": "/static/images/carousel1.png","array_text": []},
        {"src": "/static/images/carousel2.png","array_text": []}
    ]
    return (
      <div className="hero is-fullheight">
          <Carousel img_array={img_array} />
      </div>
    );
  }
}
