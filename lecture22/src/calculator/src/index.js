import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';

function App(){
    return (
        <>
            <h1>React App</h1>
            <Button>Custom button</Button>
        </>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);