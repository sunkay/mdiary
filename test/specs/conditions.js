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
    var id='';
    return browser
    .url('http://localhost:8080/#/1')
    .waitForVisible('#card', 1000)
    .click('.condition-update')
    .waitForVisible('.header2')
    .getValue('#title').then(function(res, err){
      title += res;
      console.log("F1-title", title);
      return browser
      .getAttribute('.condition-submit', 'id').then(function(res){
        id += res;
        console.log("F1-id", id);
        return browser
        .setValue('#title', title+id)
        .click('.condition-submit');
      })
    })
    .waitForVisible('#card', 1000)
    // change the updated condition to its original state
    .click('.condition-update')
    .waitForVisible('.header2')
    .getValue('#title').then(function(res,err){
      console.log("F2", title,id, res);
      // validate that the updated value is displayed
      // TODO: this will fail when list is ordered. Need to have a fail proof
      // way to retrieve particular ID's and check against them.
      res.should.equal(title+id);
      return browser
      .setValue('#title', title)
      .click('.condition-submit');
    });
  });


  it('should add and delete a condition', function(){
    return browser
    .url('http://localhost:8080/#/condition-add')
    .waitForVisible('.header2')
    .setValue('#title','1-NEWTESTTITLE')
    .setValue('#description', 'NEWTESTDESC')
    .click('.condition-submit')
    .waitForVisible('#card')
    .getText('.card-title=1-NEWTESTTITLE',
    function(err,res){
      console.log('new title', res);
      res.should.equal('1-NEWTESTTITLE');

      // delete the added element and validate it got deleted
      // by checking for 'NoSuchElement'
      return browser
        .click('#1-NEWTESTTITLE', function(res){
            console.log("Deleted added card");
            return browser
              .getText('.card-title=1-NEWTESTTITLE', function(err, res){
                err.type.should.equal('NoSuchElement');
              });
        });
    });
  });
});
