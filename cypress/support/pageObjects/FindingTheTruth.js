export default class FindingTheTruth {
    getBackground() {
        return cy.get('div[class="page__background"]', {timeout: 30000});
    }
    getButton() { 
        return cy.get('a[class*="button"]', {timeout: 30000}); 
    }
    getCase() {
        return cy.get('div').contains('Press on a case to get started.', {timeout: 30000});
    }
    getMakeCase() {
        return cy.get('div').contains('Making a case against Kevin', {timeout: 30000});
    }
    getImage1() { 
        return cy.get('div[id="pa_5c9126fe3f4fb_p179d7b273e1-card__image-1"]', {timeout: 30000});
    }
    getImage2() { 
        return cy.get('div[id="pa_5c9126fe3f4fb_p179d7b273e1-card__image-2"]', {timeout: 30000});
    }
    getScore() {
        return cy.get('div').contains('Your score so far\:', {timeout: 30000});
    }
    getTitle() {
        return cy.get('strong').contains('FINDING THE TRUTH', {timeout: 30000}); 
    }
    getWhoIsToBlame() {
        return cy.get('div').contains('Who is to blame?', {timeout: 30000});
    }
}