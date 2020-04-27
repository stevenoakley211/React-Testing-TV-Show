import React from"react";
import {render, fireEvent, waitFor} from '@testing-library/react';
import App from "./App";
import {fetchShow as mockFetchShow} from "./api/fetchShow";

jest.mock("./api/fetchShow");
test("receives Data from the api", async () => {
  const mockData = {
  id: '123',
  image: { original: 'medium_image'},
  name: 'Stranger Things',
  season: 3,
  number: 2,
  summary: '<p>Summary</p>',
  runtime: 20
  
}  
  mockFetchShow.mockResolvedValueOnce(mockData);

  const {queryAllByText} = render(<App />);
  
  await waitFor(() =>expect(queryAllByText(/Stranger Things/i)).toHaveLength(1));
})