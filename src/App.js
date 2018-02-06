import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
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
                    <Link to ="/"><h1 className="App-title">電影問答</h1></Link>
                </header>

                <Switch>
                    <Route exact path="/" render={() => { return <IndexPage questionHistory={ this.state.questionHistory } />; }} />
                    <Route path="/:type/:level/:quesType/:number/" render={() => { return <QAPage questionHistoryFunc={ this.updateQuestionHistory.bind(this) } />; }} />
                </Switch>
            </div>
        );
    }
}

export default App;
