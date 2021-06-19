import { assert } from "console";
import { get } from "http";
import FindingTheTruth from "../support/pageObjects/findingTheTruth";
import GuiltyOrNot from "../support/pageObjects/GuiltyOrNot";
import LandingPage from "../support/pageObjects/LandingPage";
import WhatHappened from "../support/pageObjects/WhatHappened";

// pageObjects
let findingTheTruth = new FindingTheTruth();
let guiltyOrNot = new GuiltyOrNot();
let landingPage = new LandingPage()
let whatHappened = new WhatHappened();

let url = "https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135";

describe('Automation Testing challenge for Elucidat.', () => {
  it('Functionally tests a subset of the specified page content.', () => {
    cy.wrap(null).then(() => {
      cy.visit(url, {timeout: 30000});
    }).then(() => {
      // LANDING PAGE: 'FINDING THE TRUTH':
      landingPage.getLoading().should('be.visible');
    }).then(() => {
      // explicit waits aren't ideal... but let's wait a moment when a page first loads
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
      cy.wait(4000);
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
      // Video is an IFrame:  
      // Note that as is Vimeo IFrame (cross-origin) I have included '"chromeWebSecurity": false' to cypress.config 

      // Call custom support/commands.js command - wait for IFrame to become available
      cy.getIframeBody();
    }).then(() => {
      // Confirm that the intended video renders by confirming the expected title
      whatHappened.getVideoIframe().should('be.visible', {timeout: 60000}).then($iframe => {
        let body = $iframe.contents();
        cy.wrap(body).invoke('text').then($text => {
          expect($text).to.include('Crime Myths - Case 1, Part 1');
        });
      });
    }).then(() => {
      whatHappened.getJudgeThisButton().should('exist').scrollIntoView({force: true});
    }).then(() => {
      whatHappened.getJudgeThisButton().should('be.visible').click({force: true});
    }).then(() => {
      cy.wait(4000);
    }).then(() => {
      // PAGE: GUILTY OR NOT?                       
      guiltyOrNot.getBackground().should('have.id', 'pa_5c9126fe47260_pp5762b3f192564-page__background')
      guiltyOrNot.getBasedOn().should('be.visible');
      guiltyOrNot.getGuilty().should('be.visible');
      guiltyOrNot.getNotGuilty().should('be.visible');
      // Vote button
      guiltyOrNot.getVote().should('be.visible');
      guiltyOrNot.getVoteState().invoke('attr','aria-disabled').then($disabled => {
        expect($disabled).to.equal('true');
      });
    }).then(() => {
      /* RADIO BUTTON 1 --- When either radio button 1 or 'Guilty' is clicked, selection should toggle */
      // Set
      guiltyOrNot.getRadio1().should('be.visible').click({force: true});
      guiltyOrNot.getAnswer1().invoke('attr','class').then($class => {
        cy.wrap($class).should('contain', 'selected');
      });
      // Vote button
      guiltyOrNot.getVote().should('be.visible');
      guiltyOrNot.getVoteState().invoke('attr','aria-disabled').then($disabled => {
        expect($disabled).to.equal('false');
      });
      // Unset
      guiltyOrNot.getGuilty().click({force: true});
      cy.wait(500);
      guiltyOrNot.getAnswer1().invoke('attr','class').then($class => {
        cy.wrap($class).should('not.contain', 'selected');
      });
      // Vote button
      guiltyOrNot.getVote().should('be.visible');
      guiltyOrNot.getVoteState().invoke('attr','class').then($class => {
        cy.wrap($class).should('contain', 'save_button--disabled');
      });
    }).then(() => {   
      /* RADIO BUTTON 2 --- When either radio button 1 or 'Guilty' is clicked, selection should toggle */   
      // Set
      guiltyOrNot.getRadio2().should('be.visible').click({force: true});
      cy.wait(500);
      guiltyOrNot.getAnswer2().invoke('attr','class').then($class => {
        cy.wrap($class).should('contain', 'selected');
      });
      // Vote button
      guiltyOrNot.getVote().should('be.visible');
      guiltyOrNot.getVoteState().invoke('attr','aria-disabled').then($disabled => {
        expect($disabled).to.equal('false');
      });
      // Unset
      guiltyOrNot.getNotGuilty().click({force: true});
      cy.wait(500);
      guiltyOrNot.getAnswer2().invoke('attr','class').then($class => {
        cy.wrap($class).should('not.contain', 'selected');
      });
      // Vote button
      guiltyOrNot.getVote().should('be.visible');
      guiltyOrNot.getVoteState().invoke('attr','class').then($class => {
        cy.wrap($class).should('contain', 'save_button--disabled');
      });
    }).then(() => {
      // Note that this will currently fail - as the current string is 'Is Wesley guilty?' - Wesley is the victim!
      // guiltyOrNot.getIsKevinGuilty().should('be.visible');
    }).then(() => {
      // Make a selection and 'Vote'
      guiltyOrNot.getRadio1().click({force: true});
      cy.wait(500);
      guiltyOrNot.getVote().should('be.visible').click({force: true});
    }).then(() => {
      // Example of getting an element (the modal) and confirming that it contains child strings
      guiltyOrNot.getModal().should('be.visible').find('strong').contains('GUILTY!');
      guiltyOrNot.getModal().should('contain', 'You think Kevin is guilty.');
      guiltyOrNot.getModal().should('contain', 'Move on to find out more about the evidence. Will you be able to use it to prove his guilt?');
      cy.wait(500); 
      guiltyOrNot.getContinueButton().should('be.exist').parent().click({force: true});
    }).then(() => {
      // to be continued, a.k.a
      // the road goes ever on...
    });
  });
});
