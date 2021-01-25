import React from 'react';
import { motion } from "framer-motion";

import { IMAGE_URL } from 'constants/common';

const konozContainerAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const imageAnimate = {
  hidden: {
    scale: 0.5,
    borderRadius: 0
  },
  visible: {
    scale: 1,
    borderRadius: 30
  },
}

const textAnimate = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  },
}

const KonozInfo = ({ data, start, handleStart }) => {
  return (
    <motion.div
      className="full-card vhcenter declareWinner"
      initial="hidden"
      animate="visible"
      variants={konozContainerAnimate}
      transition={{ duration: 1 }}
    >
      <motion.img
        className="shadow-nw mb-4"
        src={IMAGE_URL + data?.featured_img?.url}
        alt=""
        variants={imageAnimate}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="title"
        variants={textAnimate}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        {data?.win_title_en}
      </motion.h1>
      <motion.p
        className="caption"
        variants={textAnimate}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {data?.limit} participants
      </motion.p>
      <motion.button
        className="btn btn-primary px-5"
        onClick={() => handleStart()}
        variants={textAnimate}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <svg viewBox="0 0 512 512" className="icon-btn"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
        Start
      </motion.button>
    </motion.div>
  )
}

export default KonozInfo;