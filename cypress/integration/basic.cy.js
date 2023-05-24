describe('Google search', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('Should return search results', () => {
    search(searchValue);
    search(searchValue);
    search(searchValue);
    search(searchValue);
    search(searchValue);
  });
  it('Should return search results(failed)', () => {
    search(searchValue);
    search(searchValue);
    search(searchValue);
    search(searchValue);
    search('Carina');
  });

  function search(searchValue) {
    cy.visit(url).contains('Google');
    cy.wait(5000);
    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');
  }
});
