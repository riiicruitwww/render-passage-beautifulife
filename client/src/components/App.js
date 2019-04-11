import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import PassageBox from './PassageBox';
import QuestionBox from './QuestionBox';

class App extends Component {
  componentDidMount() {
    const { onInit } = this.props;

    onInit();
  }

  render() {
    const { chunkMap, packType, passageBox, questions } = this.props;

    return (
      <div className="App">
        <Header />
        {packType && (
          <div className="App__body">
            <PassageBox
              chunkMap={chunkMap}
              passageBox={passageBox}
              questions={questions}
            />
            <QuestionBox
              chunkMap={chunkMap}
              passageBox={passageBox}
              questions={questions}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
