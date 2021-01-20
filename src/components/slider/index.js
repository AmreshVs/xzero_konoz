/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';

export default function Slider({ children }) {

  let slider = createRef(null);
  let sliderParent = createRef(null);
  let [scrollLeft, setScrollLeft] = useState(0);
  let [next, setNext] = useState(1);
  let scrollWidth = 0;
  let parentWidth = 0;
  let difference = 0;
  let scrollBy = 0;

  const init = () => {
    scrollWidth = slider.current.scrollWidth;
    parentWidth = sliderParent.current.clientWidth;
    setScrollLeft(slider.current.scrollLeft);
    difference = (scrollWidth - parentWidth) + 17;
    scrollBy = difference > parentWidth ? (parentWidth - 120) : difference;

    slider.current.onwheel = function (e) {
      if (e.shiftKey === true) {
        e.preventDefault();
      }
    }
  }

  useEffect(() => {
    init();
  }, []);

  const handlePrev = () => {
    init();

    if (next === 0) {
      setNext(1);
    }

    if (scrollLeft > 0) {
      slider.current.scrollBy(-scrollBy, 0);
    }
  }

  const handleNext = () => {
    init();
    if (scrollLeft + 17 > difference) {
      setNext(0);
    }


    if (scrollLeft < difference) {
      slider.current.scrollBy(scrollBy, 0);
    }

    if (scrollLeft === 0) {
      setScrollLeft(s => s + 1);
    }
  }

  return (
    <div className="container-fluid pb-3" ref={sliderParent}>
      <div className="row">
        <div className="col-12 pr-4 pl-4 min-padd-10">
          <div className="slider" ref={slider}>
            <div className="control-left">
              {scrollLeft > 0 &&
                <button className="btn btn-light" onClick={handlePrev}>
                  <ChevronLeft size={23} />
                </button>
              }
            </div>
            <div className="control-right">
              {next === 1 &&
                <button className="btn btn-light" onClick={handleNext}>
                  <ChevronRight size={23} />
                </button>
              }
            </div>
            <div className="d-flex">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}