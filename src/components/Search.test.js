import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Search from './Search';
import { Fetch } from 'react-request';


test('renders the search field ', () => {
  render(<Search />);
  const searchField = screen.getByTestId('search-field');

  expect(searchField).toBeInTheDocument();
});

test('can perform a search', () => {
  render(<Search />);
  // const mockedFetch = jest.fn();
  const locationData = [{id: 6289837, name: 'N H S Hospitals'}]
  // const resp = {data: locationData};
  // mockedFetch.get.mockResolvedValue(resp);
  const searchField = screen.getByTestId('search-field');
  userEvent.type(searchField, 'N H S Hospitals')
  expect(searchField).toHaveValue(locationData[0].name);
});
