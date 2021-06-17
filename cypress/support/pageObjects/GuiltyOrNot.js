export default class GuiltyOrNot {  
    getBackground() {
        return cy.get('div[class="page__background"]', {timeout: 30000});
    }
    getBasedOn(){
        return cy.get('div').contains('Based on what you know about the case against Kevin so far...', {timeout: 30000});
    }
    getGuilty() {
        return cy.get('strong').contains('Guilty', {timeout: 30000});
    }
    getIsKevinGuilty() {
        return cy.get('strong').contains('Is Kevin guilty?');
    }
    getNotGuilty() {
        return cy.get('strong').contains('Not guilty', {timeout: 30000});
    }
}