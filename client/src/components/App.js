import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './Header';
import ContentsBox from './ContentsBox';
import Question from './Question';
import Passage from './Passage';
import Paragraph from './Paragraph';

class App extends Component {
  componentDidMount() {
    const { onInit } = this.props;

    onInit();
  }

  renderPassgeBox() {
    const { passageBox } = this.props;

    const renderedPassageBox = passageBox.view_tree.children.map(
      (item, index) => <Paragraph key={index} paragraph={item} />
    );
    const renderedPassages = passageBox.passages.map((passage, index) => (
      <Passage key={index} passage={passage} />
    ));

    return (
      <Fragment>
        {renderedPassageBox}
        {renderedPassages}
      </Fragment>
    );
  }

  renderQuestions() {
    const { questions } = this.props;

    return questions.map((question, index) => (
      <Question key={index} question={question} />
    ));
  }

  render() {
    const { packType } = this.props;

    return (
      <div className="App">
        <Header packType={packType} />
        {packType && (
          <div className="App__body">
            <ContentsBox>{this.renderPassgeBox()}</ContentsBox>
            <ContentsBox>
              <p>Questions</p>
              {this.renderQuestions()}
            </ContentsBox>
          </div>
        )}
      </div>
    );
  }
}

export default App;
