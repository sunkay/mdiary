import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import About from '../about';

describe('About', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<About />);
    let actualElement = renderer.getRenderOutput();

    let expectedElement =
    <div className="container">
      <h3>
        About Us
      </h3>

      <p>
        By accessing this web site, you are agreeing to be bound by these
        web site Terms and Conditions of Use, all applicable laws and regulations,
        and agree that you are responsible for compliance with any applicable local
        laws. If you do not agree with any of these terms, you are prohibited from
        using or accessing this site. The materials contained in this web site are
        protected by applicable copyright and trade mark law.
      </p>

    </div>;

    //let expectedElement = <span>Hello John</span>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
