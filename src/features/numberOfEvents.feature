Feature: Specify Number of Events

 Scenario: User has displayed on the page a specific number of events; 
  Given user selected a city for ex. "Berlin" from the list;
  When user clicks on the city;
  Then user should see a specific number of events, 32 at a time.

 Scenario: User inputs a specific number of events;
  Given the main page is open;
  When user types a number (10) in the events input field;
  Then user should see only 10 events displayed on the page.