import React from 'react';
import {connect} from "react-redux";

const DefaultCell = ({handleClick, spendMoney}) => {

    return (
        <>
            <div onClick={() => {handleClick('seed'); spendMoney(10)}}><b>пшеница</b> (10$)</div>
            <div onClick={() => {handleClick('chicken'); spendMoney(50)}}><b>курица</b> (50$)</div>
            <div onClick={() => {handleClick('cow'); spendMoney(100)}}><b>корова</b> (100$)</div>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        spendMoney: (payload) => {
            dispatch({
                type: 'SPEND_MONEY',
                payload
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(DefaultCell);