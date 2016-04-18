import React, { Component } from 'react';
import Button from '../components/Button/Button';

import './App.less';

class App extends Component {
    render(){
        return (
                <div className="app">
                    <Button />
                    <div className="tip"></div>
                </div>
        );
    }
}

export default App;