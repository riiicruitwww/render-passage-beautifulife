import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './Header';
import ContentsBox from './ContentsBox';
import { renderPropertyByName } from './renderPropertyByName';

class App extends Component {
  componentDidMount() {
    const { onInit } = this.props;

    onInit();
  }

  renderPassgeBox() {
    const { passageBox } = this.props;

    const renderedPassageBox = renderPropertyByName(passageBox.view_tree);
    const renderedPassages = passageBox.passages.map((passage, index) => {
      return renderPropertyByName(passage.view_tree, index);
    });

    return (
      <Fragment>
        {renderedPassageBox}
        {renderedPassages}
      </Fragment>
    );
  }

  renderQuestions() {
    const { questions } = this.props;

    return questions.map((question, index) => {
      return (
        <div key={index} className="question-wrapper">
          <span className="order">{question.order + 1}.</span>
          {renderPropertyByName(question.view_tree, index)}
        </div>
      );
    });
  }

  render() {
    const { packType } = this.props;

    return (
      <div className="App">
        <Header />
        {packType && (
          <div className="App__body">
            <ContentsBox>{this.renderPassgeBox()}</ContentsBox>
            <ContentsBox>{this.renderQuestions()}</ContentsBox>
          </div>
        )}
      </div>
    );
  }
}

export default App;
