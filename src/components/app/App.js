import React from 'react';
import Cell from "../cell";
import Information from "../information";

const App = () => {
    const mas = new Array(64).fill('');
    return (
        <div className="container">
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