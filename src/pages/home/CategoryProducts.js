import React from 'react';

import Card from 'components/card';
import { APP_URL } from 'common';

export default function CategoryProducts({ data }) {
  return (
    <div className="container-fluid mt-3">
      <div className="row pr-3 min-padd-3">
        {data.map((item, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 px-2 pl-xl-3 pr-xl-0 pl-md-3 pr-md-0 mb-3" key={index}>
            <Card
              header={item.category_name}
              footer={<button className="btn btn-outline-primary btn-sm">View More</button>}
              hover
            >
              <div className="row">
                {item.sub_category.map((sub_item, index) => (
                  <div className="col-md-6 col-6" key={index}>
                    <img className="img-fluid rounded shadow" src={APP_URL + sub_item.sub_category_image_path} alt={sub_item.sub_category_name} />
                    <p>{sub_item.sub_category_name}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}