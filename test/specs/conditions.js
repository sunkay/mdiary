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

  it('should get back only the specified number of conditions');

});
