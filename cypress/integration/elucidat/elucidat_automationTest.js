import FindingTheTruth from "../../support/pageObjects/findingTheTruth";
import GuiltyOrNot from "../../support/pageObjects/GuiltyOrNot";
import LandingPage from "../../support/pageObjects/LandingPage";
import WhatHappened from "../../support/pageObjects/WhatHappened";

// pageObjects
let findingTheTruth = new FindingTheTruth();
let guiltyOrNot = new GuiltyOrNot();
let landingPage = new LandingPage()
let whatHappened = new WhatHappened();

let url = "https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135";

describe('Automation Testing challenge for Elucidat', () => {
  it('Functionally tests a subset of the expected page content', () => {
    cy.wrap(null).then(() => {
      // LANDING PAGE: 'FINDING THE TRUTH':
      cy.visit(url, {timeout: 30000});
    }).then(() => {
      landingPage.getLoading().should('be.visible');
    }).then(() => {
      // explicit waits aren't ideal but...
      cy.wait(4000);
    }).then(() => {
      landingPage.getBackground().should('have.id', 'pa_5c9126fe3b767_pp5762b3f192564-page__background');
      landingPage.getTitle().should('exist');
      landingPage.getImage().should('be.visible');
      landingPage.getExploreThreeCases().should('be.visible');
      landingPage.getNote().should('be.visible');
      landingPage.getButton().should('contain', 'START').should('be.visible');
    }).then(() => {
      landingPage.getButton().contains('START').click({force:true});
    }).then(() => {
      cy.wait(2000);
    }).then(() => {
      // PAGE: 'FINDING THE TRUTH'
      findingTheTruth.getBackground().should('have.id', 'pa_5c9126fe3f4fb_pp5762b3f192564-page__background');
      findingTheTruth.getTitle().should('be.visible');
      findingTheTruth.getCase().should('be.visible');
      findingTheTruth.getMakeCase().should('be.visible');
      findingTheTruth.getWhoIsToBlame().should('be.visible');
      // Expected behaviour to be confirmed with Dev/Product Owner.  
      // Current behaviour of date displayed is likely unacceptable - just confirm leading string for now
      findingTheTruth.getScore().should('be.visible');
      findingTheTruth.getImage1().should('be.visible');
      findingTheTruth.getImage2().should('be.visible');
      // Would be good to test mouseover effects here .. cy.get(foo).trigger('mouseover')  ??
    }).then(() => {
      // Both links appear to lead to the same page (does not seem correct); just click one 
      findingTheTruth.getImage2().click({force: true});
    }).then(() => {
      cy.wait(4000);
    }).then(() => {
      // PAGE: 'WHAT HAPPENED?'
      whatHappened.getBackground().should('have.id', 'pa_5c9126fe434ba_pp5762b3f192564-page__background');
      whatHappened.getAMurder().should('be.visible');
      whatHappened.getWatchVideo().should('be.visible');
      whatHappened.getJudgeThis().should('be.visible'); 
    }).then(() => {
      // Iframe can take longer to load despite increased timeout, so wait longer for page content to load
      cy.wait(10000);
    }).then(() => {
      // Video is an IFrame, so perhaps confirm for now that the intended video title renders
      // Note that as is Vimeo IFrame (cross-origin) I have included '"chromeWebSecurity": false' to cypress.config 
      whatHappened.getVideoIframe().should('be.visible', {timeout: 60000}).then($iframe => {
        let body = $iframe.contents();
        cy.wait(500);
        cy.wrap(body).invoke('text').then($text => {
          expect($text).to.include('Crime Myths - Case 1, Part 1');
        });
      });
    }).then(() => {
      whatHappened.getJudgeThisButton().should('exist').scrollIntoView({force: true});
    }).then(() => {
      whatHappened.getJudgeThisButton().should('be.visible').click({force: true});
    }).then(() => {
      cy.wait(2000);
    }).then(() => {
      // PAGE: GUILTY OR NOT?                       
      guiltyOrNot.getBackground().should('have.id', 'pa_5c9126fe47260_pp5762b3f192564-page__background')
      guiltyOrNot.getBasedOn().should('be.visible');
      guiltyOrNot.getGuilty().should('be.visible');
      guiltyOrNot.getNotGuilty().should('be.visible');
    }).then(() => {
      // Test clicking behaviour of radio buttons...
      


    }).then(() => {
      // Note that this will currently fail intentionally - as the current string is 'Is Wesley guilty?' - Wesley is the victim!
      guiltyOrNot.getIsKevinGuilty().should('be.visible');
    });
  });
});
