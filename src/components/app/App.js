import React from 'react';
import Cell from "../cell";
import Information from "../information";
import Message from "../message";

const App = () => {
    const mas = new Array(64).fill('');
    return (
        <div className="container">
            <Message/>
            <Information/>
            <div className='box'>
                {mas.map((_, idx) =>
                    <Cell key={idx}/>
                )}
            </div>
        </div>
    );
};

export default App;