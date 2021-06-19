# Elucidat testing examples for URL: https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135

This repo provides examples of software testing including:
* Cypress UI Automated Testing project 
* Examples of user stories/acceptance criteria in Cucumber/Gherkin format 
* Examples of bug reporting in spreadsheet format
* Example of a spelling error identified in website help

**Cypress UI Automation notes:**

* Cypress will require Node.js installed
* Cypress may be installed from bash via 'npm install cypress --save-dev'
* Cypress runner may be started from the 'Elucidat-Cypress' dir with 'npx cypress open' (headed) or 'npx cypress run' (headless electron)
* This example is for demostration purposes only.  It by no means achieves 100% coverage, but provides a good introduction to some of the techniques and considerations made when writing automated UI tests.
* I have used the Page Object Model/Pattern which should reduce maintenance costs.
* Note also that I have tried to enforce sequential execution by chaining together 'then()' methods.  I have found this approach useful when working with web apps - however is probably overkill in this context.  I have tried to comment where appropriate to provide commentary as to my approach. 

**User Stories/Acceptance Criteria**

* './requested_examples/UserStories_example.feature' contains a brief overview of User Stories/Acceptance Criteria - it does not provide anywhere near complete coverage
* I have used the Cucumber/Gherkin syntax to provide some examples of user stories/acceptance criteria
* I have used this syntax professionally to document intended workflows and to report bugs

**Bug Reporting in Spreadsheet**

* './requested_examples/bugReporting_example.xls' contains feedback of three bugs as if I were to report them to a developer.  I have also included a fourth sheet outlining additional observations made.
* Note that this report does not cover the entire site - it is just the initial observations made of a few of the pages
* I have included screenshots within the spreadsheet, however I have also attached the files.

**Error observed on website**

* In './requested_examples/' I have also attached 'spelling_1.PNG' and 'spelling_2.PNG' that outline a very minor spelling error observed on the Elucidat website (one error that appears twice).  At the time of writing, it may be observed at https://help.elucidat.com/en/collections/31432-releases
* This is but one example of me being a very fastidious creature. My apologies to the author! ;oP 
