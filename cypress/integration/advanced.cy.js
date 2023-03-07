describe('Advanced reporting test', () => {
  it('Tracking test maintainer', { owner: 'testUser' }, () => {
    cy.visit(
      'https://zebrunner.com/documentation/reporting/cypress/#tracking-test-maintainer'
    );
    console.log('Example shows how to attach a maintainer for a specific test');
    console.log(
      'NOTE: The maintainer username should be a valid Zebrunner username, otherwise it will be set to anonymous'
    );
  });
});
