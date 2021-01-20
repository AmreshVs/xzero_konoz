import axios from 'axios';

const baseURL = 'http://tradeadmin.worldtradehub.in/api/v1';

export default async function api({ url, method = 'GET', data = {} }) {
  return await axios({
    url: baseURL + url,
    method: method,
    data: data
  })
    .then((response) => {
      if (response.status === 200) {
        return { ok: true, ...response.data };
      }
      else {
        return { ok: false, ...response.data };
      }
    })
    .catch((error) => {
      console.log(error);
    })
}