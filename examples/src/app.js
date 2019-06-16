import React, { useState } from 'react';
import LoremIpsum from '../../src';
import './style.scss';

const App = () => {
  const initialProps = {
    pCount: 1,
    avgWordsPerSentence: 8,
    avgSentencesPerParagraph: 8,
    startWithLoremIpsum: true,
  };
  const [pCount, setPCount] = useState(initialProps.pCount);
  const [avgWordsPerSentence, setAvgWordsPerSentence] = useState(initialProps.avgWordsPerSentence);
  const [avgSentencesPerParagraph, setAvgSentencesPerParagraph] = useState(
    initialProps.avgSentencesPerParagraph,
  );
  const [startWithLoremIpsum, setStartWithLoremIpsum] = useState(initialProps.startWithLoremIpsum);
  const handlePChange = (e) => {
    setPCount(e.target.value);
  };
  const handleAvgWordInSentenceChange = (e) => {
    setAvgWordsPerSentence(e.target.value);
  };
  const handleAvgSentenceInParagraphChange = (e) => {
    setAvgSentencesPerParagraph(e.target.value);
  };
  const handleStartWithLoremIpsumChange = (e) => {
    setStartWithLoremIpsum(e.target.checked);
  };
  const resetProps = () => {
    setPCount(initialProps.pCount);
    setAvgWordsPerSentence(initialProps.avgWordsPerSentence);
    setAvgSentencesPerParagraph(initialProps.avgSentencesPerParagraph);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="repo">
            <div className="title">React Lorem Ipsum</div>
            <div className="name">react-lorem-ipsum</div>
          </div>
          <a
            href="https://github.com/fatihtelis/react-lorem-ipsum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="32"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
              fill="white"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </header>
      <main className="container">
        <div className="top">
          <section className="props">
            <h2>Props</h2>
            <div className="prop">
              <label>
                {`Paragraph Count (${pCount})`}
                <input
                  className="slider"
                  type="range"
                  min="1"
                  max="50"
                  value={pCount}
                  onChange={handlePChange}
                />
              </label>
            </div>
            <div className="prop">
              <label>
                {`Average Words Per Sentence (${avgWordsPerSentence})`}
                <input
                  className="slider"
                  type="range"
                  min="4"
                  max="20"
                  value={avgWordsPerSentence}
                  onChange={handleAvgWordInSentenceChange}
                />
              </label>
            </div>
            <div className="prop">
              <label>
                {`Average Sentences Per Paragraph (${avgSentencesPerParagraph})`}
                <input
                  className="slider"
                  type="range"
                  min="4"
                  max="20"
                  value={avgSentencesPerParagraph}
                  onChange={handleAvgSentenceInParagraphChange}
                />
              </label>
            </div>
            <div className="prop same-line">
              <label>
                Start with “Lorem ipsum odor amet, ...”
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={startWithLoremIpsum}
                  onChange={handleStartWithLoremIpsumChange}
                />
              </label>
            </div>
            <button className="reset" type="button" onClick={resetProps}>
              Reset to Defaults
            </button>
          </section>
          <section className="component">
            <h2>Component</h2>
            <div className="code">
              <div className="line">{'<LoremIpsum'}</div>
              <div className="line">{`pCount={${pCount}}`}</div>
              <div className="line">{`avgWordsPerSentence={${avgWordsPerSentence}}`}</div>
              <div className="line">{`avgSentencesPerParagraph={${avgSentencesPerParagraph}}`}</div>
              <div className="line">
                {`startWithLoremIpsum={${startWithLoremIpsum ? 'true' : 'false'}}`}
              </div>
              <div className="line">{'/>'}</div>
            </div>
          </section>
        </div>
        <section className="output">
          <h2>Output</h2>
          <LoremIpsum
            pCount={pCount}
            avgWordsPerSentence={avgWordsPerSentence}
            avgSentencesPerParagraph={avgSentencesPerParagraph}
            startWithLoremIpsum={startWithLoremIpsum}
          />
        </section>
      </main>
      <footer>
        <span>Developed by</span>
        <a href="https://fatihtelis.com" target="_blank" rel="noopener noreferrer">
          Fatih Telis
        </a>
      </footer>
    </>
  );
};

export default App;
