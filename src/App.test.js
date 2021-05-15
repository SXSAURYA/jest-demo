import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe( 'App Counter', () => {
  test('Counter Elements should be present', () => {
    render(<App />)
    const incrementButton = screen.getByText(/Increment/i)
    const decrementButton = screen.getByText(/Decrement/i)
    const counterLabel = screen.getByText(/Counter:/i)
    const counterText = screen.getByTestId("counter-value")

    expect(incrementButton).toBeInTheDocument()
    expect(incrementButton).toBeEnabled()
    expect(decrementButton).toBeInTheDocument()
    expect(decrementButton).toBeDisabled()
    expect(counterLabel).toBeInTheDocument()
    expect(counterText).toHaveTextContent(0)
  })

  // Within the describe block from test #1
  test('Increment increases value by 1 and enables decrement button present', () => {
    render(<App />)
    const incrementButton = screen.getByText(/Increment/i)
    const decrementButton = screen.getByText(/Decrement/i)
    const counterText = screen.getByTestId("counter-value")

    expect(counterText).toHaveTextContent(0)
    userEvent.click(incrementButton)
    expect(counterText).toHaveTextContent(1)
    expect(decrementButton).not.toBeDisabled()
  })

  // Within the describe block from test #1

  test('Decrement decreases value by 1 and disables decrement button at 0', () => {
    render(<App />)
    const incrementButton = screen.getByText(/Increment/i)
    const decrementButton = screen.getByText(/Decrement/i)
    const counterText = screen.getByTestId("counter-value")

    expect(counterText).toHaveTextContent(0)
    userEvent.click(incrementButton)
    expect(counterText).toHaveTextContent(1)
    expect(decrementButton).not.toBeDisabled()
    userEvent.click(decrementButton)
    expect(counterText).toHaveTextContent(0)
    expect(decrementButton).toBeDisabled()
  })
})
