import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  render(
        <App />
  );

  const addEntryLink = screen.getByText(/Add a diary entry/i);
  const diaryListLink = screen.getByText(/View my diary entries/i);

  expect(addEntryLink).toBeInTheDocument();
  expect(diaryListLink).toBeInTheDocument();
});

test('navigates to AddEntryPage when "Add a diary entry" link is clicked', async () => {
    render(<App />);

    const addEntryLink = screen.getByText(/Add a diary entry/i);
    fireEvent.click(addEntryLink);

    // Use waitFor to wait for the asynchronous rendering
    await waitFor(() => {
        const addEntryPageHeader = screen.getByText(/Add Entry/i);
        expect(addEntryPageHeader).toBeInTheDocument();
    });
});

test('navigates to DiaryListPage when "View my diary entries" link is clicked', () => {
  render(
        <App />
  );

  const diaryListLink = screen.getByText(/View my diary entries/i);
  fireEvent.click(diaryListLink);

  const diaryListPageHeader = screen.getByText(/My Diary List/i);
  expect(diaryListPageHeader).toBeInTheDocument();
});

