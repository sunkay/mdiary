describe('Test to check for title', function() {
    it('should check for title mdiary', function() {
        return browser
            .url('http://localhost:8080')
            .getTitle().should.eventually.be.equal('mdiary');
    });
});
