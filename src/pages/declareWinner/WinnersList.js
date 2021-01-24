import React, { createRef, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Card from 'components/card';

const WinnersList = () => {
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
    <Card>
      <h1 className="title">Winners List</h1>
      <div className="row">
        <div className="col-md-3">
          <img className="drawGift" src="https://be.xzero.app/v2/uploads/i_Phone_12_Pro_f1dd993eee.png" alt="iphone" />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-3">
              <p className="title">1. xzero user</p>
            </div>
            <div className="col-md-3">
              <p>2. xzero user</p>
            </div>
            <div className="col-md-3">
              <p>3. xzero user</p>
            </div>
            <div className="col-md-3">
              <p>4. xzero user</p>
            </div>
            <div className="col-md-3">
              <p>5. xzero user</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hdivider" />
      <div className="row">
        <div className="col-md-3">
          <img className="drawGift" src="https://be.xzero.app/v2/uploads/i_Phone_12_Mini_a1211842ac.png" alt="iphone" />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-3">
              <p>1. xzero user</p>
            </div>
            <div className="col-md-3">
              <p>2. xzero user</p>
            </div>
            <div className="col-md-3">
              <p>3. xzero user</p>
            </div>
            <div className="col-md-3">
              <p>4. xzero user</p>
            </div>
            <div className="col-md-3">
              <p>5. xzero user</p>
            </div>
          </div>
        </div>
      </div>
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
    </Card>
  )
}

export default WinnersList;