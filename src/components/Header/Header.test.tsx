import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from './index.tsx'
import { BrowserRouter } from 'react-router-dom'

describe('<Header />', () => {
  it('should check if the Header component renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(container).toBeInTheDocument()
  })

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it('should check if the Timer icon goes to the right path', () => {
    const timer = screen.getByTitle('Timer')
    fireEvent.click(timer)
    expect(window.location.pathname).toBe('/')
  })

  it('should check if the Scroll icon goes to the right path', () => {
    const scroll = screen.getByTitle('Histórico')
    fireEvent.click(scroll)
    expect(window.location.pathname).toBe('/history')
  })
})
