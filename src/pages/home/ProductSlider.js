/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import Slider from 'components/slider';
import Card from 'components/card';
import { APP_URL } from 'common';

const RightAction = () => {
  return (
    <button className="btn btn-outline-primary btn-sm">View All</button>
  )
}

export default function ProductSlider({ data }) {
  return (
    <div className="container-fluid pb-3">
      <div className="row">
        <div className="col-12 px-3 min-padd-10">
          <Card header="Top Products" hover>
            <Slider header="Top Moving Products" rightAction={<RightAction />}>
              {data.map((item, index) => (
                <div key={index} className="p-3 slideProducts">
                  <img className="img-fluid rounded shadow" loading="lazy" src={APP_URL + '/' + item.item_image?.image_path} alt={item.item_name} />
                  <p className="mb-0">{item.item_name}</p>
                </div>
              ))}
            </Slider>
          </Card>
        </div>
      </div>
    </div>
  )
}