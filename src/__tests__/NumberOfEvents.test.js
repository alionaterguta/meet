import  { render } from'@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  let numberOfEvents;
  beforeEach(() => {
    numberOfEvents = render(<NumberOfEvents />);
  })

  test('component contains an element with role of textbox', () => {
    const textBox = numberOfEvents.queryByRole('textbox'); 
    expect(textBox).toBeInTheDocument();
    expect(textBox).toHaveClass('eventsNumber');
  });

  test('default value of input field is 32', () => {
    const textBox = numberOfEvents.queryByRole('textbox');
    expect(textBox.value).toBe("32");
  });

  test('default value of input field changes accordingly when a user types number (10)', async () => {
    const user = userEvent.setup();
    const textBox = numberOfEvents.queryByRole('textbox');
    await user.type(textBox, '{backspace}{backspace}10');
    expect(textBox.value).toBe('10');
  })
})