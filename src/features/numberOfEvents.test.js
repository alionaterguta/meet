import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/numberOfEvents.feature");

defineFeature(feature, (test) => {
  test("User has displayed on the page a specific number of events;", ({
    given,
    when,
    then,
  }) => {
    given(/^user selected a city for ex. "(.*)" from the list;$/, () => {});

    when("user clicks on the city;", () => {});

    let numberOfEventsComponent;
    then(
      /^user should see a specific number of events, (\d+) at a time.$/,
      () => {
        numberOfEventsComponent = render(
          <NumberOfEvents setCurrentNOE={() => {}} />
        );
        const textBox = numberOfEventsComponent.queryByRole("textbox");
        expect(textBox.value).toBe("32");
      }
    );
  });

  test("User inputs a specific number of events;", ({ given, when, then }) => {
    let AppComponent;
    given("the main page is open;", () => {
      AppComponent = render(<App />);
    });

    when(
      /^user types a number \((\d+)\) in the events input field;$/,
      async () => {
        const user = userEvent.setup();
        const textBox =
          AppComponent.container.querySelector("#number-of-events");
        await user.type(textBox, "{backspace}{backspace}10");
      }
    );

    then(
      /^user should see only (\d+) events displayed on the page.$/,
      async () => {
        const eventList = AppComponent.container.querySelector("#event-list");
        const eventItems = within(eventList).queryAllByRole("listitem");
        await waitFor(() => {
          expect(eventItems.length).toBe(10);
        });
      }
    );
  });
});
