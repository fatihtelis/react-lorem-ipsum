import React, { useState } from 'react';
import { LoremHeading } from '../../src';

const defaultComponentProps = {
  p: 1,
  avgWordsPerHeading: 3,
  includeEndPunctuation: false,
};

const Heading = () => {
  const [componentProps, setComponentProps] = useState(defaultComponentProps);

  const handleComponentPropsChange = e => {
    const { type, name, value, checked } = e.target;
    const { [name]: v, ...others } = componentProps;
    setComponentProps({ [name]: type === 'checkbox' ? checked : parseInt(value, 10), ...others });
  };

  const resetComponentProps = () => {
    setComponentProps(defaultComponentProps);
  };

  const areAllComponentPropsDefault = Object.keys(defaultComponentProps).every(
    prop => componentProps[prop] === defaultComponentProps[prop]
  );

  return (
    <div className="lorem-ipsum-wrapper">
      <div className="top">
        <section className="props">
          <h2>Props</h2>
          <div className="prop">
            <label>
              {`Average Words Per Heading (${componentProps.avgWordsPerHeading})`}
              <input
                className="slider"
                type="range"
                name="avgWordsPerHeading"
                min="4"
                max="20"
                value={componentProps.avgWordsPerHeading}
                onChange={handleComponentPropsChange}
              />
            </label>
          </div>
          <div className="prop same-line">
            <label>
              Include end punctuation
              <input
                className="checkbox"
                type="checkbox"
                name="includeEndPunctuation"
                checked={componentProps.includeEndPunctuation}
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
            <div className="line">{'import { LoremHeading } from "react-lorem-ipsum";'}</div>
          </div>
          <div className="code">
            <div className="line">{`<LoremHeading${areAllComponentPropsDefault ? ' />' : ''}`}</div>
            {componentProps.p !== defaultComponentProps.p && (
              <div className="line">{`p={${componentProps.p}}`}</div>
            )}
            {componentProps.avgWordsPerHeading !== defaultComponentProps.avgWordsPerHeading && (
              <div className="line">{`avgWordsPerHeading={${componentProps.avgWordsPerHeading}}`}</div>
            )}
            {componentProps.includeEndPunctuation !==
              defaultComponentProps.includeEndPunctuation && (
              <div className="line">{`includeEndPunctuation${
                componentProps.includeEndPunctuation && '="true"'
              }`}</div>
            )}
            {!areAllComponentPropsDefault && <div className="line">{'/>'}</div>}
          </div>
        </section>
      </div>
      <h2>Output</h2>
      <section className="output">
        <LoremHeading
          p={componentProps.p}
          avgWordsPerHeading={componentProps.avgWordsPerHeading}
          includeEndPunctuation={componentProps.includeEndPunctuation}
        />
      </section>
    </div>
  );
};

export default Heading;
