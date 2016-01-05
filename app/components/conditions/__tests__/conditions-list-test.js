import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import ConditionsList from '../conditions-list';
import Card from '../../common/card';


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

});
