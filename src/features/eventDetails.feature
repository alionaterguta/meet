Feature: Show and hide event details

 Scenario: User has clicked to expand show more details of the event 
  Given user has decided to click on an event to see more details;
  When user clicks on a button or card;
  Then the user should see more details of the event;
  And clicking upon hide button or card to hide details.