export default class GuiltyOrNot {  
    getAnswer1(){
        return cy.get('div[id="pa_5c9126fe47260_p15515116385-answer-1"]', {timeout: 30000});
    }
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
    getRadio1() {
        return cy.get('#field_1', {timeout: 30000});
    }
}