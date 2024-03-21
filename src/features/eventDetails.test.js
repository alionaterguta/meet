import { loadFeature, defineFeature } from "jest-cucumber";
import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api.js";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/eventDetails.feature");

defineFeature(feature, (test) => {
  test("User has clicked to expand show more details of the event", ({
    given,
    when,
    then,
    and,
  }) => {
    let EventComponent;
    let allEvents;
    given(
      "user has decided to click on an event to see more details;",
      async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
      }
    );
    const user = userEvent.setup();
    when("user clicks on a button or card;", async () => {
      const button = EventComponent.queryByText("Show details");
      await user.click(button);
    });

    then("the user should see more details of the event;", async () => {
      const eventDetails = EventComponent.queryByText(allEvents[0].description);
      expect(eventDetails).toBeInTheDocument();
      expect(EventComponent.queryByText("Hide details")).toBeInTheDocument();
      expect(
        EventComponent.queryByText("Show details")
      ).not.toBeInTheDocument();
    });
    and("clicking upon hide button or card to hide details.", async () => {
      const hideDetails = EventComponent.queryByText("Hide details");
      await user.click(hideDetails);
    });
  });
});
