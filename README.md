Example UI Automation project using Cypress. 

Repo is under active development.  

* Cypress will require Node.js installed
* Cypress may be install from bash via 'npm install cypress --save-dev'
* Cypress runner may be started from the 'Elucidat-Cypress' dir with 'npx cypress open'

This example is for demostration purposes only.  It by no means achieves 100% coverage, but provides a good introduction to 
some of the techniques that may be used with Cypress to automate UI testing.

From my experience testing web apps, I've found that stringing together then() methods helps enforce sequential execution of commands.  This has proven very useful for web apps, but is perhaps overkill in this context.
