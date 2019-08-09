/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Carousel from '../generic-carousel/index'


export default class Index extends React.Component {
  render() {
    let img_array = [
        {
          "src": "/static/images/carousel.png",
          "img_text_h1": "GRAIN DE CAUSE",
          "img_text_h2": "La serre intelligente et collective !"
        },
        {
          "src": "/static/images/carousel1.png",
          "img_text_h1": "RISE OF DOOM",
          "img_text_h2": "Catalyzed"
          
        },
        {
          "src": "/static/images/carousel2.png",
          "img_text_h1": "Maya",
          "img_text_h2": "Les taxis autonomes"
        }
    ]
    return (
      <div className="hero is-fullheight">
          <Carousel img_array={img_array} />
      </div>
    );
  }
}
