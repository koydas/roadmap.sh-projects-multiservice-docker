import ReactDOM from 'react-dom';
import React from 'react';
import Users from './components/users/ui'

const App = () => {
    return <>
        <h1>This is my React app!</h1>
        <Users />
    </>
}

ReactDOM.render(<App />, document.getElementById('app'));