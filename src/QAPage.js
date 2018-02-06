import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './App.css';

class QAPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: false,
            questionType: true,
            mouseOn: false
        };
    }

    update (number) {
        this.props.questionHistoryFunc(number);
        this.setState({
            answer: !this.state.answer
        });
    }

    closeQuestionType (event) {
        event.preventDefault();
        this.setState({
            questionType: false
        });
    }

    mouseOnTypeImg (event) {
        event.preventDefault();
        this.setState({
            mouseOn: !this.state.mouseOn
        });
    }

    switchType (number, type) {
        switch (type) {
            case 'img':
                return (
                    <img className={ this.state.answer ? 'answer getAnswer' : 'question'} src={`/qafile/${this.state.answer ? 'a' : 'q'}${number}`} draggable="false"/>
                );
            case 'audio':
                return (
                    <audio controls autoplay="autoplay">
                        <source src="/qafile/q2" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                );
        }
    }

    render () {
        const number = this.props.match.params.number;
        const questionType = this.props.match.params.quesType;

        let outputBlock = null;
        outputBlock = this.switchType(number, questionType);
        // 0205 把問題跟答案分開
        return (
            <div className="questionContainer">
                <Link to="/"><div className="backBtn bg-info">《 回主頁</div></Link>
                { this.state.questionType &&
                <img className="questionType"
                    src={`/quesType_${this.state.mouseOn ? 'mouseOn' : questionType }.jpg`}
                    draggable="false"
                    onClick={ this.closeQuestionType.bind(this) }
                    onMouseOver={ this.mouseOnTypeImg.bind(this) }
                    onMouseOut={ this.mouseOnTypeImg.bind(this) } /> }
                {/* <img className={ this.state.answer ? 'question getAnswer' : 'question'} src={`/qafile/q${number}`} draggable="false"/>
                <img className={ this.state.answer ? 'answer getAnswer' : 'answer'} src={`/qafile/a${number}`} draggable="false"/> */}
                { !this.state.questionType && outputBlock }
                {/* <audio controls autoplay="autoplay">
                    <source src="/qafile/q2" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio> */}
                { !this.state.questionType && <div className="ansBtn bg-warning" onClick={this.update.bind(this, number)}>{ this.state.answer ? '重看題目' : '顯示答案'}</div> }
            </div>
        );
    }
}

export default withRouter(QAPage);
