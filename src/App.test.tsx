import React from 'react'
import { describe, test, it, expect } from 'vitest' //imports are not required
import { logRoles, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { App } from './App'

describe('App component', () => {
  //   let user: UserEvent;
  //   beforeEach(() => {
  //     user = userEvent.setup();
  //     render(<App />);
  //   });

  test('Screen Debug', () => {
    const { container } = render(<App />)
    screen.debug()
    logRoles(container)
  })

  it('renders correctly', async () => {
    const incrementButton = screen.getByRole('button', { name: /count is 0/i })
    const headerTitleVite = screen.getByRole('heading', {
      name: /Vite/i,
      level: 1,
    })
    const headerTitleReact = screen.getByRole('heading', {
      name: /React/i,
      level: 1,
    })

    expect(incrementButton).toBeInTheDocument()
    expect(headerTitleVite).toBeInTheDocument()
    expect(headerTitleReact).toBeInTheDocument()
  })

  test('Counter increment', async () => {
    const user = userEvent.setup()
    const incrementButton = screen.getByRole('button', { name: /count is 0/i })

    expect(incrementButton).toBeInTheDocument()
    await user.click(incrementButton)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
    await user.click(incrementButton)
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument()
  })
})
