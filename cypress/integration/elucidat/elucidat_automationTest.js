const { assert } = require("console");

describe('Automation Testing challenge for Elucidat', () => {
  it('Tests a subset of the content of the provided link!', () => {
    // This file is for demostration purposes only.  It by no means
    // achieves 100% coverage, but provides a good introduction to 
    // some of the techniques that may be used with Cypress to automate
    // UI testing.
    // From my experience testing web apps, I've found that stringing 
    // together then() methods helps enforce sequential execution of 
    // commands.  This has proven very useful for web apps, but is 
    // perhaps overkill in this context
    // Note that I would ordinarily apply Page Object Model to 
    // reduce hardcoding of targets - reducing maintenance costs
    let url;
    // LANDING PAGE: 'FINDING THE TRUTH':
    cy.wrap(null).then(() => {
      url = "https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135";
    }).then(() => {
      cy.visit(url, {timeout: 10000});
    }).then(() => {
      cy.get('div[id="elucidat_loading"]>div>img').should('be.visible', {timeout: 10000});
    }).then(() => {
      cy.get('title', {timeout: 3000}).contains('Finding the Truth').should('exist');
      // Image
      cy.get('div[id="pa_5c9126fe3b767_p1553447461d-image__inner"]', {timeout: 3000}).should('be.visible');
      // Strings
      cy.get('p').contains('Explore three cases to explore different aspects of the criminal justice system. Are you more likely to side with the establishment, or to sit on the side of the individual?').should('be.visible', {timeout: 3000});
      cy.get('p>em').contains('Note - you will need audio in order to get the most out of this game.').should('be.visible', {timeout: 3000});
      // Button
      cy.get('a[class*="button"]').should('be.visible', {timeout: 3000}).should('contain', 'START');
    }).then(() => {
      // this isn't ideal but let's wait a moment
      cy.wait(1000);
    }).then(() => {
      cy.get('span').contains('START').click({force: true, timeout: 30000});
    }).then(() => {
      // PAGE: 'FINDING THE TRUTH'
      cy.get('strong').contains('FINDING THE TRUTH').should('be.visible', {timeout: 3000});
      // Strings
      cy.get('div').contains('Press on a case to get started.', {timeout: 3000}).should('be.visible');
      cy.get('div').contains('Making a case against Kevin', {timeout: 3000}).should('be.visible');
      cy.get('div').contains('Who is to blame?', {timeout: 3000}).should('be.visible');
      // Expected behaviour to be confirmed with Dev/Product Owner.  Current behaviour of date displayed is likely unacceptable
      cy.get('div').contains('Your score so far:', {timeout: 3000}).should('be.visible');
      // Images
      cy.get('div[id="pa_5c9126fe3f4fb_p179d7b273e1-card__image-1"]', {timeout: 3000}).should('be.visible');
      cy.get('div[id="pa_5c9126fe3f4fb_p179d7b273e1-card__image-2"]', {timeout: 3000}).should('be.visible');
      // Ideally would test mouseover effects here .. foo.trigger('mouseover')  ??
    }).then(() => {
      // Both links appear to lead to the same page (does not seem correct), so just click one 
      cy.get('div[id="pa_5c9126fe3f4fb_p179d7b273e1-card__image-2"]', {timeout: 3000}).click({force: true});
    }).then(() => {
      cy.wait(1000);
    }).then(() => {
      // PAGE: 'WHAT HAPPENED?'
      // Strings
      cy.get('div').contains('A murder has been committed in an alleyway outside a pub.', {timeout: 3000}).should('be.visible');
      cy.get('div').contains('Watch the video to find out exactly what happened.', {timeout: 3000}).should('be.visible');
      cy.get('div').contains('Press \'Judge This\' once you have watched it.', {timeout: 3000}).should('be.visible');
    }).then(() => {
      cy.wait(1000);
    }).then(() => {
      // Video is an iframe, so perhaps confirm for now that the intended video title renders
      // Note that as is Vimeo iframe (cross-origin) I have included '"chromeWebSecurity": false' to cypress.config 
      cy.get('iframe[id="video1"]', {timeout: 600000}).should('be.visible').then($iframe => {
        let title = $iframe.contents().find('a');
        cy.wrap(title).invoke('text').then($text => {
          expect($text).to.include('Crime Myths - Case 1, Part 1');
        });
      });
    }).then(() => {
      // Button
      cy.get('span').contains('JUDGE THIS').should('be.visible').click({force: true});
    }).then(() => {
      // PAGE: GUILTY OR NOT?
      cy.get('div').contains('Based on what you know about the case against Kevin so far...').should('be.visible');
      cy.get('div').contains('Based on what you know about the case against Kevin so far...').should('be.visible');
      cy.get('strong').contains('Guilty').should('be.visible');
      cy.get('strong').contains('Not guilty').should('be.visible');
    }).then(() => {
      // Test clicking behaviour of radio buttons...
      


    }).then(() => {
      // Note that this will currently fail intentionally - as the current string is 'Is Wesley guilty?' - Wesley is the victim!
      cy.get('strong').contains('Is Kevin guilty?').should('be.visible');
    });
  });
});
