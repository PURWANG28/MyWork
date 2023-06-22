import logo from './logo.svg';
import './App.css';
import React from 'react';


import NavigationBarRouting from './components/NavigationBarRouting';

function App(props) {

    return (
        <div className='App'>
        {<NavigationBarRouting/>}
        </div>
    );
}

export default App;


