import  { render } from'@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api.js';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {

  test('renders event location', async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]}/>)
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event summary', async() => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]}/>)
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event details button with text "show details"', async() => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]}/>)
    expect(EventComponent.queryByRole("button")).toBeInTheDocument();
  });
  test('by default the event details are hidden', async() => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]}/>)
    const eventDetails = EventComponent.queryByText(allEvents[0].description); 
    expect(eventDetails).not.toBeInTheDocument();
  });

  test('renders the event details when button "show details" is clicked', async() => {
    const user =userEvent.setup();
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]}/>)
    const eventDetails = EventComponent.queryByText(allEvents[0].description); 
    const buttonShowDetails = EventComponent.queryByRole('button');
    await user.click(buttonShowDetails);
    expect(eventDetails).toBeInTheDocument();
    
  });

})