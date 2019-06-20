import React, { useState } from 'react';
import { Avatar, fullname, username } from '../../src';
import { getRandomGender } from '../../src/utils';

const User = () => {
  const [key, setKey] = useState(1);
  const [activeGender, setActiveGender] = useState(getRandomGender());
  const onShuffle = () => {
    setKey(key + 1);
    setActiveGender(getRandomGender());
  };
  return (
    <div className="user-wrapper">
      <section className="user" key={key}>
        <Avatar gender={activeGender} />
        <div className="fullname">{fullname(activeGender)}</div>
        <div className="username">{`@${username()}`}</div>
        <button className="shuffle-user" type="button" onClick={onShuffle}>
          SHUFFLE USER
        </button>
      </section>
      <section className="user-code">
        <h2>Code</h2>
        <div className="code">
          <div className="line">{'<div className="user">'}</div>
          <div className="line">{`<Avatar gender="${activeGender}">`}</div>
          <div className="line">{`<div className="fullname">{fullname('${activeGender}')}</div>`}</div>
          <div className="line">{'<div className="username">{`@${username()`}</div>'}</div>
          <div className="line">{'</div>'}</div>
        </div>
      </section>
    </div>
  );
};

export default User;
