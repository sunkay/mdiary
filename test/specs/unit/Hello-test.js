import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Hello from './Hello.js';

describe('Hello World', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<Hello name="World" />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <span>Hello World</span>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
