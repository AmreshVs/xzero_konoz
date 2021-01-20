import React from 'react';
import { APP_URL } from 'common';

export default function Carousel({ data }) {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {data.map((item, index) => (
          <li data-target="#carousel" data-slide-to={index} className={index === 0 ? 'active' : ''} key={index}></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {data.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src={APP_URL + item.banner_image_path} alt={item.banner_name} />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}