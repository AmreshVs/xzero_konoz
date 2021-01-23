import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Card from 'components/card';

const WinnersList = () => {
  return (
    <Card>
      <h1>Winners List</h1>
      <Player
        autoplay
        src={require('../../assets/lottie/confetti1.json')}
        style={{ height: '400px', width: '400px' }}
      />
      <Player
        autoplay
        src={require('../../assets/lottie/confetti2.json')}
        style={{ height: '400px', width: '400px' }}
      />
    </Card>
  )
}

export default WinnersList;