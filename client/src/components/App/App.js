import React, { Component, Fragment } from 'react';
import './App.scss';
import { Divider, Loader } from 'Base';
import {
  Paragraph,
  Passage,
  Vocabulary
} from 'Contents'
import {ContentsBox, Header } from 'Template';
import QuestionContainer from 'containers/QuestionContainer';

class App extends Component {
  componentDidMount() {
    const { location, onInit } = this.props;

    onInit(location.pathname);
  }

  renderPassageBox() {
    const { passageBox: { passages, view_tree } } = this.props;

    const renderPassageBoxParagraph = () => {
      return view_tree.children.map((item, index) => (
        <Paragraph key={index} paragraph={item} />
      ));
    };

    const renderPassages = () => {
      return passages.map((passage, index) => (
        <Passage key={index} passage={passage} />
      ));
    };

    return (
      <Fragment>
        {renderPassageBoxParagraph()}
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
    const { questions } = this.props;

    return questions.map((question, index) => (
      <QuestionContainer key={index} question={question} />
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
              <ContentsBox>{this.renderPassageBox()}</ContentsBox>
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
