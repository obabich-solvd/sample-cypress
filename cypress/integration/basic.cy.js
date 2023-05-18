describe('Open page ', () => {
  const url = 'https://okr666.zebrunner.org/';
  const searchValue = 'Zebrunner';

  it('should perform an action in an infinite loop', () => {
    Cypress.Promise.try(function loop() {
      // Perform your desired action or assertions here
      cy.visit(url);

      // Delay for a specific duration
      cy.wait(1000); // Wait for 1 second

      // Call the loop function recursively
      return loop();
    });
  });
});
