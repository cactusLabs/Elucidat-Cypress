Cypress.Commands.add('getIframeBody', () => {
    // This is a handy solution I found at: https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
    // get the iframe & retry until the body is.not.empty
    return cy.get('iframe', {timeout: 30000}).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap);
  })