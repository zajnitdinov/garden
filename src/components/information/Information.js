import React from 'react';
import {connect} from "react-redux";

const Information = ({coins, ceed}) => {
    return (
        <div className='information'>
            <span>Деньги: {coins}$</span>
            <span>Пшеница: {ceed}</span>
            <span>Курица: 0</span>
            <span>Корова: 0</span>
        </div>
    );
};

const mapStateToProps = ({coins, ceed}) => {
    return {coins, ceed}
}

export default connect(mapStateToProps)(Information);