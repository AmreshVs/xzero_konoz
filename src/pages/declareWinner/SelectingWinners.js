import React from 'react';
import { motion } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';

import Card from 'components/card';

const SelectingWinners = () => {
  return (
    <motion.div
      className="robot"
      animate={{ scale: [2, 1] }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <Player
          autoplay
          loop
          src={require('../../assets/lottie/robot.json')}
          style={{ height: '400px', width: '400px' }}
        />
        <div className="hud">
          <Player
            autoplay
            loop
            src={require('../../assets/lottie/hud.json')}
            style={{ height: '300px', width: '300px' }}
          />
        </div>
        <p className="caption text-center">Hi!, Please wait I am picking random winners...</p>
      </Card>
    </motion.div>
  )
}

export default SelectingWinners;