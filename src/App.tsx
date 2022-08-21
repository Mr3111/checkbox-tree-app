import { Button } from 'antd';
import React from 'react';

import './index.css';
import logo from './logo.svg';

import './App.css';

const App: React.FC = () => {
    return (
        <main className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Nested Checkbox Demo</p>

                <Button type="primary">Ant Button</Button>
            </header>
        </main>
    );
};

export default App;
