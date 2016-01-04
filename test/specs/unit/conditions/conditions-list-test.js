import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

var Firebase = require('firebase');

import ConditionsList from '../../../../app/components/conditions/conditions-list';
import {conditionsAddContainer as ConditionsAddContainer} from '../../../../app/containers/conditions-add-container';
import ConditionsAdd from '../../../../app/components/conditions/conditions-add';

import Card from '../../../../app/components/common/card';


describe('Conditions', () => {
  var conditionsMock = [];
  before(function(){
    conditionsMock = [
      {
        id: 1,
        title: '1- Headache',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      },
      {
        id: 2,
        title: '2 - Headache',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      }
    ]
  });


  it('should list the conditions. testing conditions-list', () => {
    let renderer = createRenderer();
    renderer.render(<ConditionsList conditions={conditionsMock} />);
    let actualElement = renderer.getRenderOutput();

    expect(actualElement.props.children.length).toBe(2);

    let onDelete;
    let expectedElement = <div className="row">
      <Card
        key={1}
        id={1}
        title={conditionsMock[0].title}
        description={conditionsMock[0].description}
        onDelete={onDelete} />

      <Card
        key={2}
        id={2}
        title={conditionsMock[1].title}
        description={conditionsMock[1].description}
        onDelete={onDelete} />
    </div>;

    expect(actualElement).toEqualJSX(expectedElement);
  });


  it('should add a condition. testing conditions-add', () => {
    let renderer = createRenderer();
    renderer.render(<ConditionsAddContainer />);
    let actualElement = renderer.getRenderOutput();

    let onSubmitFunc = function(title){};
    let expectedElement =
        <ConditionsAdd
          onSubmit={onSubmitFunc}
        />

    console.log(actualElement, expectedElement);

    expect(actualElement).toEqualJSX(expectedElement);
  });

});
