import React from 'react';
import Scroll from '../common/Scroll';
import logo from '../../../assets/ai.png';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <span
        className="image fit"
        style={{
          marginBottom: '8rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt="" style={{ width: '300px' }} />
      </span>
      <h1>I want AI</h1>
      <p>
        We know, everyone is talking about AI, Machine Learning and Neural
        Networks but you have no idea what this fuzz is all about. You are still
        running Windows 7 and visit this site via Internet Explorer. Still, you
        want AI bragging rights? We can provide it!
      </p>
      <p>
        In todays environment AI is everything. It is the hottest buzzword
        around and gets more attention than anything else. We enable you to
        leverage <b>decentralized</b>, <b>cloud based</b>,
        <b>machine learning</b> to boost your bragging rights.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Introduction;
