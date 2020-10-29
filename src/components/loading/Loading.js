import React from 'react';

const Loading = ({time, seconds}) => {
    const style = {
        width: (((seconds * 1000) / time * 100))-1 + '%',
        transition: '1s'
    }
    console.log(style.width)
    return (
        <div className='loading'>
            <div style={style} className="progress"></div>
        </div>
    );
};

export default Loading;