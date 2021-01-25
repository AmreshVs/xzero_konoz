import React from 'react';
import { useQuery } from '@apollo/client';

import { VOUCHERS } from 'graphql/queries';
import Konoz from './Konoz';
import Loader from 'components/loader';
import { motion } from 'framer-motion';

const konozAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const containerAnimate = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

const MyKonoz = () => {
  const { data, loading } = useQuery(VOUCHERS);

  return (
    loading ? <Loader /> : (
      data?.vouchers?.length <= 0 ?
        <p className="caption text-center">No Data Found!</p>
        :
        <motion.div
          variants={containerAnimate}
          initial="hidden"
          animate="visible"
        >
          {data?.vouchers?.map((item, index) => (
            <motion.div
              variants={konozAnimate}
              key={index}
            >
              {index !== 0 && <div className="hdivider" />}
              <Konoz data={item} />
            </motion.div>
          ))}
        </motion.div>
    )
  )
}

export default MyKonoz;