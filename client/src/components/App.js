import React, { Component, Fragment } from 'react';
import './App.scss';
import ContentsBox from './ContentsBox';
import Divider from './Divider';
import Header from './Header';
import Loader from './Loader';
import Paragraph from './Paragraph';
import Passage from './Passage';
import Question from './Question';
import Vocabulary from './Vocabulary';

class App extends Component {
  componentDidMount() {
    const { location, onInit } = this.props;

    onInit(location.pathname);
  }

  renderPassgeBox() {
    const { passageBox } = this.props;

    const renderPassageBox = () => {
      return passageBox.view_tree.children.map((item, index) => (
        <Paragraph key={index} paragraph={item} />
      ));
    };
    const renderPassages = () => {
      return passageBox.passages.map((passage, index) => (
        <Passage key={index} passage={passage} />
      ));
    };

    return (
      <Fragment>
        {renderPassageBox()}
        {renderPassages()}
      </Fragment>
    );
  }

  renderPassageTranslations() {
    const { passageBox } = this.props;

    return passageBox.passage_translations.map((passage, index) => (
      <Passage key={index} passage={passage} />
    ));
  }

  renderVocabularies() {
    const { passageBox } = this.props;

    return passageBox.vocabularies.map((vocabulary, index) => (
      <Vocabulary key={index} vocabulary={vocabulary} />
    ));
  }

  renderQuestions() {
    const { checkResult, isCheckComplete, questions } = this.props;

    return questions.map((question, index) => (
      <Question
        key={index}
        checkResult={checkResult}
        isCheckComplete={isCheckComplete}
        question={question}
      />
    ));
  }

  render() {
    const {
      isAnswerComplete,
      isCheckComplete,
      isLoading,
      packType,
      onCheckClick,
      onNextClick,
      onHomeClick
    } = this.props;

    return (
      <div className="App">
        <Header
          isAnswerComplete={isAnswerComplete}
          isCheckComplete={isCheckComplete}
          packType={packType}
          onCheckClick={onCheckClick}
          onNextClick={onNextClick}
          onHomeClick={onHomeClick}
        />
        <div className="App__body">
          {packType && (
            <Fragment>
              <ContentsBox>{this.renderPassgeBox()}</ContentsBox>
              <ContentsBox>
                <p>&#8226;&nbsp;&nbsp;Questions</p>
                {this.renderQuestions()}
                {isCheckComplete && (
                  <Fragment>
                    <Divider />
                    <p>&#8226;&nbsp;&nbsp;해석</p>
                    {this.renderPassageTranslations()}
                    <Divider />
                    <p>&#8226;&nbsp;&nbsp;단어</p>
                    {this.renderVocabularies()}
                  </Fragment>
                )}
              </ContentsBox>
            </Fragment>
          )}
        </div>
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
