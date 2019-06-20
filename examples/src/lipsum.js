import React, { useState } from 'react';
import { LoremIpsum } from '../../src';

const defaultComponentProps = {
  p: 1,
  avgWordsPerSentence: 8,
  avgSentencesPerParagraph: 8,
  startWithLoremIpsum: true,
};

const Lipsum = () => {
  const [componentProps, setComponentProps] = useState(defaultComponentProps);

  const handleComponentPropsChange = (e) => {
    const {
      type, name, value, checked,
    } = e.target;
    const { [name]: v, ...others } = componentProps;
    setComponentProps({ [name]: type === 'checkbox' ? checked : parseInt(value, 10), ...others });
  };

  const resetComponentProps = () => {
    setComponentProps(defaultComponentProps);
  };

  const areAllComponentPropsDefault = Object.keys(defaultComponentProps).every(
    prop => componentProps[prop] === defaultComponentProps[prop],
  );

  return (
    <div className="lipsum-wrapper">
      <div className="top">
        <section className="props">
          <h2>Props</h2>
          <div className="prop">
            <label>
              {`Paragraph Count (${componentProps.p})`}
              <input
                className="slider"
                type="range"
                name="p"
                min="1"
                max="50"
                value={componentProps.p}
                onChange={handleComponentPropsChange}
              />
            </label>
          </div>
          <div className="prop">
            <label>
              {`Average Words Per Sentence (${componentProps.avgWordsPerSentence})`}
              <input
                className="slider"
                type="range"
                name="avgWordsPerSentence"
                min="4"
                max="20"
                value={componentProps.avgWordsPerSentence}
                onChange={handleComponentPropsChange}
              />
            </label>
          </div>
          <div className="prop">
            <label>
              {`Average Sentences Per Paragraph (${componentProps.avgSentencesPerParagraph})`}
              <input
                className="slider"
                type="range"
                name="avgSentencesPerParagraph"
                min="4"
                max="20"
                value={componentProps.avgSentencesPerParagraph}
                onChange={handleComponentPropsChange}
              />
            </label>
          </div>
          <div className="prop same-line">
            <label>
              Start with “Lorem ipsum odor amet, ...”
              <input
                className="checkbox"
                type="checkbox"
                name="startWithLoremIpsum"
                checked={componentProps.startWithLoremIpsum}
                onChange={handleComponentPropsChange}
              />
            </label>
          </div>
          <button
            className="reset"
            type="button"
            onClick={resetComponentProps}
            disabled={areAllComponentPropsDefault}
          >
            Reset to Default Props
          </button>
        </section>
        <section className="component">
          <h2>Component</h2>
          <div className="code">
            <div className="line">{`<LoremIpsum${areAllComponentPropsDefault ? ' />' : ''}`}</div>
            {componentProps.p !== defaultComponentProps.p && (
              <div className="line">{`p={${componentProps.p}}`}</div>
            )}
            {componentProps.avgWordsPerSentence !== defaultComponentProps.avgWordsPerSentence && (
              <div className="line">{`avgWordsPerSentence={${componentProps.avgWordsPerSentence}}`}</div>
            )}
            {componentProps.avgSentencesPerParagraph
              !== defaultComponentProps.avgSentencesPerParagraph && (
              <div className="line">{`avgSentencesPerParagraph={${componentProps.avgSentencesPerParagraph}}`}</div>
            )}
            {componentProps.startWithLoremIpsum !== defaultComponentProps.startWithLoremIpsum && (
              <div className="line">
                {`startWithLoremIpsum${!componentProps.startWithLoremIpsum && '="false"'}`}
              </div>
            )}
            {!areAllComponentPropsDefault && <div className="line">{'/>'}</div>}
          </div>
        </section>
      </div>
      <h2>Output</h2>
      <section className="output">
        <LoremIpsum
          p={componentProps.p}
          avgWordsPerSentence={componentProps.avgWordsPerSentence}
          avgSentencesPerParagraph={componentProps.avgSentencesPerParagraph}
          startWithLoremIpsum={componentProps.startWithLoremIpsum}
        />
      </section>
    </div>
  );
};

export default Lipsum;
