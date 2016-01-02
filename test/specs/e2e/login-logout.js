  describe('Authentication Test Suite', function(){
    it('should click on the login button and login form presented', function() {
      return browser
        .url('http://localhost:8080')
        .click('#login')
        .getText('#login-form-submit')
        .should.eventually.be.equal('LOGIN');
    });

  it('should click on the login button submit login info and a logout link is visible', function() {
    return browser
      .url('http://localhost:8080/#/login')
      .setValue('#email', 'sun@y.com')
      .setValue('#password', '12345')
      .click('#login-form-submit')
      .waitForVisible('#logout', 3000)
      .getText('#logout')
      .should.eventually.be.equal('Logout');
  });

  it('should logout when logout link is clicked', function() {
    return browser
      .url('http://localhost:8080/#/logout')
      .getText('#logout-text')
      .should.eventually
      .be.equal("You are now logged out. Thank you for visiting.");
  });

});
