import React from 'react';
import { motion } from "framer-motion";
import { IMAGE_URL } from 'constants/common';

const KonozInfo = ({ data, start, handleStart }) => {
  return (
    <motion.div className="full-card vhcenter declareWinner" animate={{ opacity: !start ? 1 : 0 }}>
      <img className="shadow-nw mb-4" src={IMAGE_URL + data?.featured_img?.url} alt="" />
      <h1 className="title">{data?.win_title_en}</h1>
      <p className="caption">
        {data?.limit} participants
      </p>
      <button className="btn btn-primary px-5" onClick={() => handleStart()}>
        <svg viewBox="0 0 512 512" className="icon-btn"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
        Start
      </button>
    </motion.div>
  )
}

export default KonozInfo;