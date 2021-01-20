import React from 'react';

import Carousel from './Carousel';
import Categories from './Categories';
import CategoryProducts from './CategoryProducts';
import ProductSlider from './ProductSlider';
import SubCategories from './SubCategories';
import MoreCategories from './MoreCategories';
import withAPICall from 'hoc/withApiCall';
import { HOME } from 'api/routes';

const apiParams = {
  url: HOME.url
}

const Home = ({ data }) => (
  <div className="home">
    <Categories data={data.header_category} />
    <Carousel data={data.banner} />
    <CategoryProducts data={data.category_with_subcategory} />
    <ProductSlider data={data.products} />
    <SubCategories data={data.category_group} />
    <MoreCategories data={data.all_category} />
  </div>
)

export default withAPICall(Home, apiParams);