Cypress.Commands.add('getIframeBody', () => {
    // This is a handy solution I found at: https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
    // get the iframe > document > body
    // and retry until the body element is not empty!
    return cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap);
  })