import React from 'react';

import KonozWinners from './KonozWinners';
import MyKonoz from './MyKonoz';

const Tabs = () => {
  return (
    <div className="side-tab shadow-nw">
      <div className="nav nav-pills me-3 tab-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a className="nav-link active" id="my-konoz" data-bs-toggle="pill" href="#my-konoz-tab" role="tab" aria-selected="true">My Konoz</a>
        <a className="nav-link" id="konoz-winners" data-bs-toggle="pill" href="#konoz-winners-tab" role="tab" aria-selected="false">Konoz Winners</a>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="my-konoz-tab" role="tabpanel">
          <MyKonoz />
        </div>
        <div className="tab-pane fade" id="konoz-winners-tab" role="tabpanel">
          <KonozWinners />
        </div>
      </div>
    </div>
  )
}

export default Tabs;