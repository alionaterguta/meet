import { render, waitFor } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api.js";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event summary", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders the events start time", () => {
    expect(
      EventComponent.queryByText(new Date(allEvents[0].created).toUTCString())
    ).toBeInTheDocument();
  });

  test('renders event details button with text "show details"', () => {
    expect(EventComponent.queryByText("Show details")).toBeInTheDocument();
  });

  test("by default the event details are hidden", () => {
    expect(
      EventComponent.container.querySelector(".eventDetails")
    ).not.toBeInTheDocument();
  });

  test("show the event details upon click (show details)", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("Show details");
    await user.click(button);
    const eventDetails = EventComponent.queryByText(allEvents[0].description);
    expect(eventDetails).toBeInTheDocument();
    expect(EventComponent.queryByText("Hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("Show details")).not.toBeInTheDocument();
  });

  test("hides the event details when the user clicks on the 'Hide details' button", async () => {
    const user = userEvent.setup();

    const showButton = EventComponent.queryByText("Show details");
    await user.click(showButton);

    const eventDetails = EventComponent.queryByText(allEvents[0].description);
    expect(eventDetails).toBeInTheDocument();
    expect(EventComponent.queryByText("Hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("Show details")).not.toBeInTheDocument();

    const hideButton = EventComponent.queryByText("Hide details");
    await user.click(hideButton);

    await user.click(EventComponent.queryByText("hide details"));
    expect(eventDetails).not.toBeInTheDocument();
    expect(EventComponent.queryByText("Hide details")).not.toBeInTheDocument();
    expect(EventComponent.queryByText("Show details")).toBeInTheDocument();
  });
});
