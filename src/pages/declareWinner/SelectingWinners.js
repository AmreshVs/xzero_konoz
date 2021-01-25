import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';
import { useApolloClient } from '@apollo/client';

import Card from 'components/card';
import { DECLARE_KONOZ_WINNERS } from 'graphql/mutations';

const SelectingWinners = ({ data, setWinnersList, setWinners }) => {
  const client = useApolloClient();

  useEffect(() => {
    selectWinners();
  }, [])

  const selectWinners = async () => {
    const { data: winners } = await client.mutate({
      mutation: DECLARE_KONOZ_WINNERS,
      variables: {
        id: Number(data?.id)
      }
    });

    if (winners?.DeclareKonozWinners) {

      setTimeout(() => {
        setWinnersList(winners?.DeclareKonozWinners);
        setWinners(true);
      }, 3000);
    }
  }

  return (
    <Card>
      <motion.div
        className="robot"
        animate={{ scale: [1.5, 1] }}
        transition={{ duration: 0.2 }}
      >
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
      </motion.div>
      <p className="caption text-center">Hi!, Please wait I am picking random winners...</p>
    </Card>
  )
}

export default SelectingWinners;