import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import KonozInfo from './KonozInfo';
import SelectingWinners from './SelectingWinners';
import WinnersList from './WinnersList';

const DeclareWinner = () => {
  const [start, setStart] = useState(false);
  const [winners, setWinners] = useState(false);
  const location = useLocation();

  let data = location?.state?.data;

  const handleStart = () => {
    setStart(!start);

    setTimeout(() => {
      setWinners(!winners);
    }, 2000);
  }

  return (
    <>
      {!start ?
        <KonozInfo data={data} start={start} handleStart={handleStart} />
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