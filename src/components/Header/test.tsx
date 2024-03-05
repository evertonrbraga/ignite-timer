import { render, screen, fireEvent } from 'project-testing-library'
import { Header } from '.'

describe('<Header />', () => {
  it('should snapshot the Header component', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  beforeEach(() => {
    render(<Header />)
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
