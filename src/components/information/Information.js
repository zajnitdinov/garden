import React from 'react';
import {connect} from "react-redux";

const Information = ({coins, seed, cow, chicken}) => {
    return (
        <div className='information'>
            <span>Деньги: {coins}$</span>
            <span>Пшеница: {seed}</span>
            <span>Курица: {chicken}</span>
            <span>Корова: {cow}</span>
        </div>
    );
};

const mapStateToProps = ({coins, seed, cow, chicken}) => {
    return {coins, seed, cow, chicken}
}

export default connect(mapStateToProps)(Information);