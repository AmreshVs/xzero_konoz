import React from 'react';

import Card from 'components/card';
import SubCategory from 'components/subCategory';
import { APP_URL } from 'common';

const RightAction = () => {
  return (
    <button className="btn btn-outline-primary btn-sm">View All</button>
  )
}

export default function SubCategories({ data }) {
  return (
    data.map((item, index) => (
      <div className="container-fluid pb-3 sub-categories" key={index}>
        <div className="row">
          <div className="col-12 px-3 min-padd-10">
            <Card header={item.main_category_name} rightAction={<RightAction />} hover>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-12 border-right">
                  <img src={APP_URL + item.main_category_image_path} alt="building" className="img-fluid shadow" />
                </div>
                <div className="col-xl-9 col-lg-8 col-md-12 mt-md-4">
                  <div className="row">
                    <SubCategory data={item.category} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    ))
  )
}