export default class LandingPage {
    getBackground() {
        return cy.get('div[class="page__background"]', {timeout: 30000});
    }
    getButton() { 
        return cy.get('a[class*="button"]', {timeout: 30000}); 
    }
    getExploreThreeCases() { 
        return cy.get('p').contains('Explore three cases to explore different aspects of the criminal justice system. Are you more likely to side with the establishment, or to sit on the side of the individual?', {timeout: 3000}); 
    }
    getLoading() { 
        return cy.get('div[id="elucidat_loading"]>div>img', {timeout: 30000}); 
    }
    getImage() { 
        return cy.get('div[id*="image"]', {timeout: 30000}); 
    }
    getNote() { 
        return cy.get('p>em').contains('Note - you will need audio in order to get the most out of this game.', {timeout: 30000}); 
    }
    getTitle() { 
        return cy.get('title', {timeout: 30000}).contains('Finding the Truth'); 
    }
}