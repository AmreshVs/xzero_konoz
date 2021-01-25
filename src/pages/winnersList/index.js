import { useQuery } from '@apollo/client';
import Loader from 'components/loader';
import { VOUCHER_WINNERS_LIST } from 'graphql/queries';
import React from 'react';
import { useLocation } from 'react-router-dom';

import WinnersList from '../declareWinner/WinnersList';

const VoucherWinnersList = () => {
  const location = useLocation();

  let params = location?.state?.data;

  const { data, loading } = useQuery(VOUCHER_WINNERS_LIST, {
    variables: {
      id: Number(params?.id)
    }
  })

  return (
    loading ? <Loader />
      :
      <WinnersList title={params?.win_title_en} data={data?.KonozWinners} declared={false} />
  )
}

export default VoucherWinnersList;