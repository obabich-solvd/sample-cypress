require('@zebrunner/javascript-agent-cypress/lib/commands/commands');
require('cypress-xpath');

import 'cypress-wait-until';

Cypress.Commands.add('findElement', (searchContext, locator) => {
  return cy.wrap(searchContext).find(locator);
});

Cypress.Commands.add('getText', (locator) => {
  return cy.get(locator).invoke('text');
});

Cypress.Commands.add('clearField', (locator) => {
  return cy.getElement(locator).clear();
});

Cypress.Commands.add('getElement', (locator) => {
  cy.waitUntil(() =>
    cy
      .get(locator)
      .should('be.visible')
      .then((element) => {
        return element;
      })
  );
});
