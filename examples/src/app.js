import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Lipsum from './lipsum';
import User from './user';
import './style.scss';

const App = () => {
  const [tab, setTab] = useState('lipsum');
  return (
    <>
      <Header />
      <main className="container">
        <div className="tab-header">
          <button
            type="button"
            className={tab === 'lipsum' ? 'active' : ''}
            onClick={() => setTab('lipsum')}
          >
            Lorem Ipsum
          </button>
          <button
            type="button"
            className={tab === 'user' ? 'active' : ''}
            onClick={() => setTab('user')}
          >
            Random User
          </button>
        </div>
        <div className={`content${tab === 'lipsum' ? ' active' : ''}`}>
          <Lipsum />
        </div>
        <div className={`content${tab === 'user' ? ' active' : ''}`}>
          <User />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
