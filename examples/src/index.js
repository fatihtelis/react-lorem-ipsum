import React from 'react';
import { render } from 'react-dom';
import LoremIpsum from '../../src';
import '../../src/style.scss';

const App = () => <LoremIpsum />;
render(<App />, document.getElementById('root'));
