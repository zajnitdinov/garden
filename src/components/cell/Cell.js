import React, {useState} from 'react';
import {chickenCell, cowCell, seedCell} from "./cellState";
import DefaultCell from "./DefaultCell";
import {connect} from "react-redux";

const Cell = ({addSeed}) => {
    const [typeOfCell, setTypeOfCell] = useState('default');
    const [seconds, setSeconds] = useState(0);
    const renderCell = () => {
        switch (typeOfCell) {
            case 'cow': return cowCell;
            case 'seed': return seedCell;
            case 'chicken': return chickenCell;
            default: return <DefaultCell handleClick={handleClick}/>;
        }
    }
    const startTimer = () => {
        const timer = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        },1000)
        setTimeout(() => {
            clearInterval(timer)
            setSeconds(0)
            startTimer()
            addSeed()
        }, 3000)
    }
    const handleClick = (type) => {
        setTypeOfCell(type);
        startTimer();
    }
    return (
        <div className='cell'>
            {renderCell()}
            {seconds}
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addSeed: () => dispatch({type: 'ADD_SEED'})
    }
}

export default connect(null, mapDispatchToProps)(Cell);