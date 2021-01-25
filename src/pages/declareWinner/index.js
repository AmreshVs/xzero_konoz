import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import KonozInfo from './KonozInfo';
import SelectingWinners from './SelectingWinners';
import WinnersList from './WinnersList';

const DeclareWinner = () => {
  const [start, setStart] = useState(false);
  const [winners, setWinners] = useState(false);
  const [winnersList, setWinnersList] = useState([]);
  const location = useLocation();

  let data = location?.state?.data;

  const handleStart = () => {
    setStart(!start);
  }

  return (
    <>
      {!start ?
        <KonozInfo data={data} start={start} handleStart={handleStart} />
        :
        !winners ?
          <SelectingWinners data={data} setWinners={setWinners} setWinnersList={setWinnersList} />
          :
          <WinnersList title={data?.win_title_en} data={winnersList} />
      }
    </>
  )
}

export default DeclareWinner;