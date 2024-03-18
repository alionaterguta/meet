import  { render } from'@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api.js';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {

  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  })

  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event summary', () => {    
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders the events start time', () => {    
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('renders event details button with text "show details"', () => {
    expect(EventComponent.queryByRole("button")).toBeInTheDocument();
  });

  test('show the event description upon click (show details)', async () => {
    const user = userEvent.setup();
    const buttonShowDetails = EventComponent.queryByRole('button');
    await user.click(buttonShowDetails);
    const expandedCard = EventComponent.queryByText(allEvents[0].description)
    expect(expandedCard).toBeInTheDocument();
  });
  
  test('by default the event details are hidden', async() => {
    const user = userEvent.setup();
    const buttonHideDetails = EventComponent.queryByRole('button');
    await user.click(buttonHideDetails);
    const defaultCard = EventComponent.queryByText(allEvents[0].description); 
    expect(defaultCard).not.toBeInTheDocument;
  });

});

