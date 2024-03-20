import { render, within } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  let numberOfEvents;
  beforeEach(() => {
    numberOfEvents = render(<NumberOfEvents setCurrentNOE={() => {}} />);
  });

  test("component contains an element with role of textbox", () => {
    const textBox = numberOfEvents.queryByRole("textbox");
    expect(textBox).toBeInTheDocument();
    expect(textBox).toHaveClass("eventsNumber");
  });

  test("default value of input field is 32", () => {
    const textBox = numberOfEvents.queryByRole("textbox");
    expect(textBox.value).toBe("32");
  });

  test("default value of input field changes accordingly when a user types number (10)", async () => {
    const user = userEvent.setup();
    const textBox = numberOfEvents.queryByRole("textbox");
    await user.type(textBox, "{backspace}{backspace}10");
    expect(textBox.value).toBe("10");
  });
});

describe("<NumberOfEvents /> integration", () => {
  test("the number of events rendered matches the number of events inputted by the user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const textBox = AppComponent.container.querySelector("#number-of-events");

    await user.type(textBox, "{backspace}{backspace}10");

    const eventList = AppComponent.container.querySelector("#event-list");
    const eventItems = within(eventList).queryAllByRole("listitem");

    expect(eventItems.length).toBe(10);
  });
});
