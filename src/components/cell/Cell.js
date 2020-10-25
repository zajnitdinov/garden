import React, {useState} from 'react';
import DefaultCell from "./DefaultCell";
import {connect} from "react-redux";
import {obj} from "./obj";

const Cell = ({addItem}) => {
    const [typeOfCell, setTypeOfCell] = useState('default')
    const [seconds, setSeconds] = useState(0)
    const startTimer = (time, type) => {
        const timer = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        },1000)
        setTimeout(() => {
            clearInterval(timer)
            setSeconds(0)
            addItem(type)
            startTimer(time, type)
        }, time)
    }
    const handleClick = (type) => {
        const time = obj[type].time;
        setTypeOfCell(type);
        startTimer(time, type);
    }
    return (
        <div className='cell'>
            {typeOfCell !== 'default' ? obj[typeOfCell].html : <DefaultCell handleClick={handleClick}/>}
            {seconds}
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: (type) => {
            switch (type) {
                case 'seed':
                    return dispatch({type: 'ADD_SEED'})
                case 'chicken':
                    return dispatch({type: 'ADD_CHICKEN'})
                case 'cow':
                    return dispatch({type: 'ADD_COW'})
                default:
                    break;
            }

        }
    }
}

export default connect(null, mapDispatchToProps)(Cell);