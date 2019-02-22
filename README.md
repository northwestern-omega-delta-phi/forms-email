# forms-email
This is a script to send the respondent of a google form an email from us when they submit it.

This was originally made to be used for ODPhi's [César Chávez Day of Service](https://www.nuodphi.com/ceacutesar-chaacutevez-day-of-service.html) in 2019, but it can be used for any form. There are plenty of things this could be used for. To name a few:

- Food fundraisers
- Event signups
- Alumni events (include in the email a link to save the event in their calendar)

A good example would be to send a confirmation email after someone preorders food from ODPhi. We could send them an email back including what they ordered, how much they need to venmo, where they can pick it up, and at what time.



## Usage

- Create a new form with the **email that you want to send emails from**.
- Click on the 3 dots in the upper righthand corner and then click on "script editor". This should open a new window where you can insert code.
  - If insted you get an error that says "Sorry, unable to open the file at this time," then log out of all other google accounts in chrome. Only be logged in to the account from which you want to send the email response in the form.
- Open [`Code.js`](https://github.com/northwestern-omega-delta-phi/forms-email/Code.js) in this repository and copy and paste the code from there into `Code.gs` in the new window that opened.