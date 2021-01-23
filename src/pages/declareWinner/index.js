import React, { useState } from 'react';

import KonozInfo from './KonozInfo';
import SelectingWinners from './SelectingWinners';
import WinnersList from './WinnersList';

const DeclareWinner = () => {
  const [start, setStart] = useState(false);
  const [winners, setWinners] = useState(false);

  const handleStart = () => {
    setStart(!start);

    setTimeout(() => {
      setWinners(!winners);
    }, 2000);
  }

  return (
    <>
      {!start ?
        <KonozInfo start={start} handleStart={handleStart} />
        :
        !winners ?
          <SelectingWinners />
          :
          <WinnersList />
      }
    </>
  )
}

export default DeclareWinner;