import React, { createRef, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PreloadImage from 'react-preload-image'

import Card from 'components/card';
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
      delayChildren: 0.8,
      staggerChildren: 0.5
    }
  }
};

const WinnersList = ({ title, data, declared = true }) => {
  let confetti1 = createRef(null);
  let confetti2 = createRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (confetti1?.current && confetti2?.current) {
        confetti1.current.stop();
        confetti2.current.stop();
      }
    }, 10000);
  }, [confetti1, confetti2])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={konozContainerAnimate}
      transition={{ duration: 1 }}
    >
      <Card>
        <h1 className="title text-primary">{title} - Winners List</h1>
        {data?.map((konoz, index) => {
          return (
            <>
              {index !== 0 && <div className="hdivider my-4" />}
              <div className="row">
                <motion.div
                  className="col-md-4"
                  initial="hidden"
                  animate="visible"
                  variants={imageAnimate}
                  transition={{ duration: 1 }}
                  key={index}
                >
                  <Carousel>
                    {konoz?.featured_imgs?.map((url, uindex) => (
                      <PreloadImage
                        className="drawGift"
                        src={url}
                        alt="draw-gift"
                        key={uindex}
                      />
                    ))}
                  </Carousel>
                </motion.div>
                <div className="col-md-8">
                  <motion.div
                    className="row position-relative"
                    variants={containerAnimate}
                  >
                    {konoz?.winnersName?.map((name, nindex) => (
                      <motion.div
                        className="col-md-3"
                        variants={textAnimate}
                        key={nindex}
                      >
                        <p className="title">{nindex + 1}. {name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </>
          )
        })}
        {declared && (
          <>
            <div className="confetti1">
              <Player
                ref={confetti1}
                autoplay
                loop
                src={require('../../assets/lottie/confetti1.json')}
                style={{ height: '600px', width: '1200px' }}
              />
            </div>
            <div className="confetti2">
              <Player
                ref={confetti2}
                autoplay
                loop
                src={require('../../assets/lottie/confetti2.json')}
                style={{ height: '600px', width: '1200px' }}
              />
            </div>
          </>
        )}
      </Card>
    </motion.div>
  )
}

export default WinnersList;