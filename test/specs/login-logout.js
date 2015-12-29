describe('Test to check for login successfully', function() {
    it('should click on the login button and check for successfully login', function() {
        return browser
            .url('http://localhost:8080')
            .
            .getTitle().should.eventually.be.equal('mdiary');
    });
});
