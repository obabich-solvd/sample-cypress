describe('Open page ', () => {
  const url = 'https://okr666.zebrunner.org/';
  const searchValue = 'Zebrunner';

  it('Open constantly page', () => {
    constantlyOpenUrlWithPause(url);
  });
});

function constantlyOpenUrlWithPause(url) {
  cy.visit(url).then(() => {
    cy.wait(1000); // Pause for 1 second
    constantlyOpenUrlWithPause(url); // Call the function recursively to continuously open the URL with a pause
  });
}
