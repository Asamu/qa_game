import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import './App.css';

class QAPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: false,
            questionType: true,
            mouseOn: false,
            questionText: ''
        };
    }

    componentDidMount () {
        if (this.props.match.params.quesType === 'text') {
            fetch(`/qafile/q${this.props.match.params.number}.txt`, {
                method: 'GET'
            })
                .then(response => (
                    response.text()
                )
                    .then(text => {
                        // console.log(text)
                        this.setState({ questionText: text });
                    }));
        }
    }

    showAnswer (number) {
        this.props.questionHistoryFunc(number);
        if (this.props.match.params.quesType === 'audio') {
            this.audio.paused ? this.audio.play() : this.audio.pause();
        }
        // this.audio.pause();
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
                <img className={ this.state.answer ? 'question getAnswer' : 'question'} src={`/qafile/q${number}.jpg`} alt={`/qafile/q${number}.jpg`} draggable="false"/>
            );
        case 'audio':
            return (
                <audio controls autoplay="autoplay"
                    className={ this.state.answer ? 'question getAnswer' : 'question'}
                    ref={(audio) => { this.audio = audio }}>
                    <source src={`/qafile/q${number}.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            );
        case 'text':
            return (
                <div className={ this.state.answer ? 'question center questionText getAnswer' : 'question center questionText'}>{this.state.questionText}</div>
            );
        }
    }

    render () {
        const type = this.props.match.params.type;
        const level = this.props.match.params.level;
        const questionType = this.props.match.params.quesType;
        const number = this.props.match.params.number;

        const typeCh =
            type === 'classical' ? '經典'
                : type === 'native' ? '國片'
                    : type === 'cartoon' ? '動畫'
                        : '';
        const levelCh =
            level === 'easy' ? '熱身'
                : level === 'normal' ? '一般'
                    : level === 'hard' ? '困難'
                        : '';

        let questionBlock = null;
        questionBlock = this.switchType(number, questionType);
        // 0205 把問題跟答案分開
        return (
            <div className="questionContainer">
                <Link to="/"><div className="backBtn">《 回主頁</div></Link>
                <div className="questionTitle">{`${number}. ${typeCh} - ${levelCh}`}</div>
                { this.state.questionType &&
                <img className="questionType"
                    src={`/qa_game/quesType_${this.state.mouseOn ? 'mouseOn' : questionType }.jpg`}
                    alt={`/qa_game/quesType_${this.state.mouseOn ? 'mouseOn' : questionType }.jpg`}
                    draggable="false"
                    onClick={ this.closeQuestionType.bind(this) }
                    onMouseOver={ this.mouseOnTypeImg.bind(this) }
                    onMouseOut={ this.mouseOnTypeImg.bind(this) } /> }
                {/* <img className={ this.state.answer ? 'question getAnswer' : 'question'} src={`/qafile/q${number}`} draggable="false"/> */}
                { !this.state.questionType && questionBlock }
                { !this.state.questionType && <img className={ this.state.answer ? 'answer getAnswer' : 'answer'} src={`/qafile/a${number}.jpg`} alt={`/qafile/a${number}.jpg`} draggable="false"/> }
                {/* <audio controls autoplay="autoplay">
                    <source src="/qafile/q2" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio> */}
                { !this.state.questionType && <div className="ansBtn" onClick={this.showAnswer.bind(this, number)}>{ this.state.answer ? '重看題目' : '顯示答案'}</div> }
            </div>
        );
    }
}

export default withRouter(QAPage);
