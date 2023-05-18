describe('Open page ', () => {
  const url = 'https://okr666.zebrunner.org/';
  const searchValue = 'Zebrunner';

  it('should perform an action in an infinite loop', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    });

    function performAction() {
      cy.visit(url);
      // Perform your desired action or assertions here
    }

    // Continuously perform the action using Cypress's retry mechanism
    Cypress.Promise.resolve().then(function loop() {
      performAction();
      return Cypress.Promise.delay(1000).then(loop);
    });
  });
});
