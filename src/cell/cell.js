import React, {useEffect, useState} from 'react';

const Cell = () => {
    const [typeOfCell, setTypeOfCell] = useState('default');
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds])
    const defaultCell = (<>
            <div onClick={() => setTypeOfCell('seed')}><b>пшеница</b> (10$)</div>
            <div onClick={() => setTypeOfCell('chicken')}><b>курица</b> (50$)</div>
            <div onClick={() => setTypeOfCell('cow')}><b>корова</b> (100$)</div>
        </>)
    const chickenCell = (<div>курица</div>)
    const cowCell = (<div>корова</div>)
    const seedCell = (<div>пшеница {seconds}</div>)
    const renderCell = () => {
        switch (typeOfCell) {
            case 'cow': return cowCell;
            case 'seed': return seedCell;
            case 'chicken': return chickenCell;
            case "default": return defaultCell;
            default: return defaultCell;
        }
    }
    return (
        <div className='cell'>
            {renderCell()}
        </div>
    );
};

export default Cell;