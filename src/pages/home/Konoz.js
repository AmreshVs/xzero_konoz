import { IMAGE_URL } from 'constants/common';
import { thumbnailUrl } from 'constants/commonFunctions';
import React from 'react';
import { Link } from 'react-router-dom';

const Konoz = ({ data }) => {
  return (
    <Link className="text-decoration-none" to={{
      pathname: `/declare-winner/${data?.id}`,
      state: { data }
    }}
    >
      <div className="konoz col-md-12">
        <div className="row">
          <div className="col-md-1 text-center">
            <img src={IMAGE_URL + thumbnailUrl(data?.featured_img?.url)} alt="draw" />
          </div>
          <div className="col-md-11">
            <div className="row h-100 align-items-center">
              <div className="col-md-3 text-center">
                <p className="caption mb-0">
                  <span className="text-dark fw-bold">Buy </span>
                - {data?.buy_title_en}
                </p>
              </div>
              <div className="col-md-5 text-center">
                <p className="caption mb-0">
                  <span className="text-dark fw-bold">Win </span>
                - {data?.win_title_en}
                </p>
              </div>
              <div className="col-md-2 text-center">
                <p className="caption mb-0">
                  <span className="text-dark fw-bold">{data?.limit} </span>
                participants
              </p>
              </div>
              <div className="col-md-2 text-center">
                <span className="badge rounded-pill bg-success px-4 py-2">Ready to declare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Konoz;