import React from 'react';
import { useQuery } from '@apollo/client';

import { VOUCHERS } from 'graphql/queries';
import Konoz from './Konoz';
import Loader from 'components/loader';

const MyKonoz = () => {
  const { data, loading } = useQuery(VOUCHERS);

  return (
    loading ? <Loader /> : (
      data?.vouchers?.length <= 0 ?
        <p className="caption text-center">No Data Found!</p>
        :
        data?.vouchers?.map((item, index) => (
          <div key={index}>
            {index !== 0 && <div className="hdivider" />}
            <Konoz data={item} />
          </div>
        ))
    )
  )
}

export default MyKonoz;