describe('Conditions CRUD Test Suite', function(){

  it('should get back only the specified number of conditions', function(){
    return browser
    .url('http://localhost:8080/#/3')
    .waitForVisible('#card', 2000)
    .elements('#card')
    .then(function(res, err){
      res.value.should.have.length(3);
    });

  });

  it('should edit a condition', function(){
    var title='';
    return browser
      .url('http://localhost:8080/#/1')
      .waitForVisible('#card', 1000)
      .click('.condition-update')
      .waitForVisible('.header2')
      .getValue('#title').then(function(res, err){
        title += res;
        console.log("F1", title);
        return browser
          .setValue('#title', title+'MODIFIED')
          .click('#condition-submit');
      })
      .waitForVisible('#card', 1000)
      // change the updated condition to its original state
      .click('.condition-update')
      .waitForVisible('.header2')
      .getValue('#title').then(function(res,err){
        console.log("F2", title, res);
        return browser
          .setValue('#title', title)
          .click('#condition-submit');
      });
  });

  

});
