import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/renderWithTheme'
import { Header } from '.'

describe('<Header />', () => {
  it('should check if the Header component renders correctly', () => {
    const { container } = renderWithTheme(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  beforeEach(() => {
    renderWithTheme(<Header />)
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
