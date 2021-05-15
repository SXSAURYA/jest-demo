import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App Item List', () => {
  test('should ', () => {
    render(<App />)
    const listItemInput = screen.getByLabelText(/Create List Item/i)
    const addItemButton = screen.getByTestId("add-item")

    expect(listItemInput).toBeInTheDocument()
    expect(addItemButton).toBeInTheDocument()

  });

  test('User can add item to page', () => {
    render(<App />)
    const listItemInput = screen.getByLabelText(/Create List Item/i)
    const addItemButton = screen.getByTestId("add-item")

    expect(listItemInput).toHaveValue("")
    userEvent.type(listItemInput, "hello")
    expect(listItemInput).toHaveValue("hello")

    userEvent.click(addItemButton)
    expect(screen.getByText("hello")).toBeInTheDocument()
    expect(listItemInput).toHaveValue("")
  })

  test('User can remove item from page', () => {
    render(<App />)
    const listItemInput = screen.getByLabelText(/Create List Item/i)
    const addItemButton = screen.getByTestId("add-item")

    userEvent.type(listItemInput, "hello")
    userEvent.click(addItemButton)
    const newItem = screen.getByText("hello")
    expect(newItem).toBeInTheDocument()

    const removeButton = screen.getByTestId('remove-item0')
    userEvent.click(removeButton)
    expect(newItem).not.toBeInTheDocument()
  })
})
