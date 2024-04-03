## Project Description

The Meet app is a progressive web application with a serverless backend,
offering offline access to upcoming events in specific cities. Its responsive design
ensures seamless display across devices, delivering a superior user experience.
Powered by Test-Driven Development, it prioritizes code quality and test coverage for optimal performance.

### User Stories

1. As a user,
   I should be able to filter events by city
   So that I can see a list of events taking place in that city.

2. As a user,
   I should be able to show and hide events details
   can have control over the amount of information displayed.

3. As a user,
   I should be able to see a specific number of events,
   so can I can quickly find and browse through a list of events without being
   overwhelmed by too much information.

4. As a user,
   I should be able to use the App when offline,
   so that I have the Events list and info related to them at all times.

5. As a user,
   I should be able to add a shortcut to the home screen,
   so that I have easy access to the app.

6. As a user,
   I should be able to see charts visualizing event details,
   so that I would better understand the data associated with events and make a choise.

### Scenarios

- _SCENARIO 1_

When user hasn’t searched for a specific city, show upcoming events from all cities.

**Given** user hasn’t searched for any city;

**When** the user opens the app;

**Then** the user should see a list of upcoming events.

- _SCENARIO 2_

User should see a list of suggestions when they search for a city.

**Given** the main page is open;

**When** user starts typing in the city textbox;

**Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

- _SCENARIO 3_

User can select a city from the suggested list.

**Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;

**When** the user selects a city (e.g., “Berlin, Germany”) from the list;

**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

- _SCENARIO 4_

User has clicked to expand show more details of the event

**Given** user has decided to click on an event to see more details;

**When** user clicks on a button or card;

**Then** the user should see more details of the event.

- _SCENARIO 5_

User has displayed on the page a specific number of events;

**Given** user selected a city for ex. "Berlin" from the list.

**When** user clicks on the city;

**Then** the user should see a specific number of events, 32 at a time.

- _SCENARIO 6_

User has the app installed or shortcut on home screen but no internet connection.

**Given** user clicked on the shortcut;

**When** user clicks on the shortcut;

**Then** user should be able to use the app offline and see the events of a chosen city (e.g., “Berlin, Germany”).

- _SCENARIO 7_

User has the app oppen and decides to create a shortcut for home creen.

**Given** user clicked on the button "Create home shortcut";

**When** user clicks on the button "Create home shortcut";

**Then**user should be able to find the shortcut on the home screen.

- _SCENARIO 8_

User is planing a weekend and browses through a list of upcoming events from (e.g., “Berlin, Germany”).

**Given** user chooses an event of interest but unsure about the details and attendance trends.
Navigates to the event page and notice a chart visualization option available;

**When** user taps on chart visualisation icon;

**Then** user should see a graphical representation of attendance trends, ticket prices, or event popularity over time is displayed.

### The use of Serverless Functions

Serverless functions are utilized in the Meet app to handle backend operations without the need for maintaining server infrastructure. For example, when users request information about upcoming events or perform actions like filtering events by city, serverless functions respond to these requests by retrieving and processing data from the database. By leveraging serverless architecture, the app ensures scalability, cost-effectiveness, and efficient resource utilization, allowing seamless access to event information regardless of the user's location or network connectivity.

### Run this project locally

- Clone this repository

      cd project folder

- Install dependencies

      npm install

- Run on localhost:3000

      npm run start
