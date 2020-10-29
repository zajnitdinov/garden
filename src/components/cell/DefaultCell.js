import React from 'react';
import { connect } from 'react-redux';
import { spendMoney } from '../../actions';
import {obj} from './obj';

const DefaultCell = ({ handleClick, spendMoney }) => Object.keys(obj).map((el) => {
  const { id, cost, img } = obj[el];
  const handleDefaultClick = () => {
    handleClick(id);
    spendMoney(cost);
  };
  return (
    <div onClick={handleDefaultClick}>
      <img className="icon" src={img} alt="" />&nbsp;
      <span>
        ({cost}$)
      </span>
    </div>
  );
});

const mapDispatchToProps = (dispatch) => (
  { spendMoney: (payload) => dispatch(spendMoney(payload)) });

export default connect(null, mapDispatchToProps)(DefaultCell);
