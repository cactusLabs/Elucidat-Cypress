# This file includes a few user stories - forming part of the acceptance criteria for the provided site 'FINDING THE TRUTH' 
# https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135.  Note that this acceptance criteria is WIP and does not provide
# any where near full coverage.

@elucidat @findingTheTruth @landingPage
Scenario: Landing page displays title of lesson
Given a user navigates to the provided link https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135
	And the landing page loads
	Then the title 'FINDING THE TRUTH' is displayed
	So the user is immediately notified of the title of the lesson

@elucidat @findingTheTruth @landingPage
Scenario: Clicking the Landing page 'START' button begins the lesson 
Given a user navigates to the provided link https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135
	And the landing page loads
	And a 'START' button is displayed
	When the user clicks the 'START' button
	Then the user is navigated to the next page, beginning the lesson
	
@elucidat @findingTheTruth 
Scenario: Finding The Truth page should display user progress 
Given a user navigates to the provided link https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135
	And the landing page loads
	When the user clicks the 'START' button
	Then the user is navigated to the 'FINDING THE TRUTH' page
	Then the user progress should be displayed as a 'score' percentage (%)
	When the user makes further lesson progress 
	And the user returns to the 'FINDING THE TRUTH' page
	Then the 'FINDING THE TRUTH' page 'score' should reflect the user's current (total) progress as a percentage (%)

@elucidat @findingTheTruth @guiltyOrNot
Scenario: 'GUILTY OR NOT?' page - radio buttons may be set by clicking radio button or label
Given a user navigates to the provided link https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135	
	And the user navigates to the 'GUILTY OR NOT?' page
	Then 'Guilty' and 'Not guilty' radio buttons are available to the user
	When the user clicks the 'Guilty' label or the matching radio button
	Then the 'Guilty' radio button is set
	When the user clicks the 'Not guilty' label or the matching radio button 
	Then the 'Not guilty' radio button is set
	When the user again clicks a label or matching radio button that is set
	Then the associated radio button is unset

@elucidat @findingTheTruth @guiltyOrNot
Scenario: A selection must be made from the 'GUILTY OR NOT?' page before the user may proceed 
Given a user navigates to the provided link https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135	
	And the user navigates to the 'GUILTY OR NOT?' page
	Then a 'Guilty' radio button is available to the user
	And a 'Not guilty' radio button is available to the user
	When neither radio button is set
	And the user clicks the 'VOTE' button
	Then the user is not navigated to another page
	When the user clicks the 'Guilty' or 'Not guilty' radio buttons
	And the user clicks the 'VOTE' button
	Then a modal is rendered that includes a 'CONTINUE' link
	When the user clicks 'CONTINUE'
	Then they are navigated to the next lesson page