import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

const Capabilities = () => (
  <section id="one" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>What we offer</h2>
      <p>
        We offer an expert approved <b>AI certificate</b> widget. Our customers
        use it on flyers, on their website and in many other ways. Additionally
        we add you to our customer segment, so you can bragg about working with
        an agile tech company. Lastly we offer SOE for AI connected terms so
        your company can also profit from the AI-Hypetrain.
      </p>
      <h3>Legal Concerns?</h3>
      <p>
        We know you might feel uncomfortable making untrue claims just to boost
        your marketing? Don't worry AI is a very fuzzy term, it is very unlikely
        that someone will ask you about detail. Still, we offer a redundant
        implementation of a random neural network.
      </p>

      <div className="features">
        <CapabilityList />
      </div>
      {/* <ul className="actions">
        <li>
          <Link className="button" to="/generic">
            Learn more
          </Link>
        </li>
      </ul> */}
    </div>
  </section>
);

export default Capabilities;
