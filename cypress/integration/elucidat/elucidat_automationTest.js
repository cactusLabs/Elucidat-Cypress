describe('Automation Testing challenge for Elucidat', () => {
  it('Tests a subset of the content of the provided link!', () => {
    let url;
    // From my experience testing web apps, I've found that stringing 
    // together then() methods helps enforce sequential execution of 
    // commands.  This has proved very useful for web apps, but is 
    // perhaps overkill in this context
    cy.wrap(null).then(() => {
      url = Cypress.env("test_url");
    }).then(() => {
      cy.visit(url);
    }).then(() => {
      // Confirm user has landed on expected page
      cy.get('title', {timeout: 3000}).contains('Finding the Truth').should('exist');
    }).then(() => {
      // Confirm that the START button is displayed
      cy.get('a[class*="button"]').should('be.visible').should('contain', 'START');
    }).then(() => {

    });

    
  })
})