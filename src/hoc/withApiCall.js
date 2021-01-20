/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import api from 'api';
import Loader from 'components/loader';

export default function withAPICall(Component, params) {

  if (!params) {
    throw new Error('You must provide params for API Request!');
  }

  return () => {
    const [state, setState] = useState({
      loading: true,
      data: {}
    });

    useEffect(() => {
      getData();
    }, [params]);

    const getData = async () => {
      const response = await api(params);
      if (response?.ok) {
        setState({ ...state, data: response?.data, loading: false });
      }
      else {
        setState({ ...state, data: [], loading: false });
      }
    }

    return state.loading === true ? <Loader /> : <Component data={state.data} />
  }
}