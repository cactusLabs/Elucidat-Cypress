export default class WhatHappened {  
    getBackground(){
        return cy.get('div[class="page__background"]', {timeout: 30000});
    }
    getAMurder(){ 
        return cy.get('div').contains('A murder has been committed in an alleyway outside a pub.', {timeout: 30000});
    }
    getJudgeThis(){
        return cy.get('div').contains('Press \'Judge This\' once you have watched it.', {timeout: 30000});
    }
    getJudgeThisButton(){
        return cy.get('span').contains('JUDGE THIS', {timeout: 30000});
    }
    getVideoIframe(){
        return cy.get('iframe[id="video1"]', {timeout: 1200000});
    }
    getWatchVideo(){ 
        return cy.get('div').contains('Watch the video to find out exactly what happened.', {timeout: 30000});
    }
}