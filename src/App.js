import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import QAPage from './QAPage';
import IndexPage from './IndexPage';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {questionHistory: []};
    }

    getInitialState () {
        return { questionHistory: [] };
    }

    updateQuestionHistory (number) {
        let temp = this.state.questionHistory;
        temp.push(parseInt(number));
        this.setState({
            questionHistory: temp
        });
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">電影問答</h1>
                </header>
                {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
                </p> */}

                <Switch>
                    <Route exact path="/" render={() => { return <IndexPage questionHistory={ this.state.questionHistory } />; }} />
                    <Route path="/:quesType/:number/" render={() => { return <QAPage questionHistoryFunc={ this.updateQuestionHistory.bind(this) } />; }} />
                </Switch>
            </div>
        );
    }
}

export default App;
