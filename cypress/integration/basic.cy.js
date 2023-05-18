describe('Constantly Open URL Test', () => {
  it('should constantly open the URL', () => {
    // Run the test indefinitely
    while (true) {
      // Visit the desired URL
      cy.visit('https://okr666.zebrunner.org/');

      // Pause for 1 second
      cy.wait(1000);
    }
  });
});
