import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import {conditionsAddContainer as ConditionsAddContainer} from '../conditions-add-container';
import ConditionsAdd from '../../components/conditions/conditions-add';

describe('Conditions container suite', () => {

  it('should add a condition. testing conditions-add-container', () => {
    let renderer = createRenderer();
    renderer.render(<ConditionsAddContainer />);
    let actualElement = renderer.getRenderOutput();

    let onSubmitFunc = function(title){};
    let expectedElement =
        <ConditionsAdd
          onSubmit={onSubmitFunc}
        />

      //console.log(actualElement, expectedElement);

    expect(actualElement).toEqualJSX(expectedElement);
  });

});
