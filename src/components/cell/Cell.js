import React, { useState } from 'react';
import { connect } from 'react-redux';
import DefaultCell from './DefaultCell';

import { obj } from './obj';
import { addItem } from '../../actions';
import Loading from "../loading";

const Cell = ({ addItem }) => {
  const [typeOfCell, setTypeOfCell] = useState('default');
  const [seconds, setSeconds] = useState(0);
  const startTimer = (time, type) => {
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      setSeconds(0);
      addItem(type);
      startTimer(time, type);
    }, time);
  };
  const handleClick = (type) => {
    const { time } = obj[type];
    setTypeOfCell(type);
    startTimer(time, type);
  };
  const renderContent = () => {
    if (typeOfCell !== 'default'){
      return (<>
        {obj[typeOfCell].html}
        <Loading time={obj[typeOfCell].time} seconds={seconds}/>
      </>)
    } else {
      return <DefaultCell handleClick={handleClick} />
    }
  }
  return (
    <div className="cell">
      {renderContent()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({ addItem: (type) => dispatch(addItem(type)) });

export default connect(null, mapDispatchToProps)(Cell);
