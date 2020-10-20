import React from 'react';
import Cell from "../cell";



const App = () => {
    const mas = new Array(64).fill('');
    return (
        <div className='box'>
            {mas.map((_, idx) => 
                <Cell key={idx}/>
            )}
        </div>
    );
};

export default App;