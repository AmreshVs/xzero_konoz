import React from 'react';
import { useQuery } from '@apollo/client';

import { VOUCHER_WINNERS } from 'graphql/queries';
import Konoz from './Konoz';
import Loader from 'components/loader';
import { motion } from 'framer-motion';

const KonozWinners = () => {
  const { data, loading } = useQuery(VOUCHER_WINNERS);

  const variants = {
    start: { x: -500 },
    end: { x: 0 },
  }

  return (
    loading ? <Loader /> : (
      data?.vouchers?.length <= 0 ?
        <p className="caption text-center">No Data Found!</p>
        :
        data?.vouchers?.map((item, index) => (
          <motion.div
            initial="start"
            animate="end"
            variants={variants}
            key={index}
          >
            {index !== 0 && <div className="hdivider" />}
            <Konoz data={item} winners={true} />
          </motion.div>
        ))
    )
  )
}

export default KonozWinners;