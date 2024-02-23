import { render, screen } from '@testing-library/react'
import { Home } from './index.tsx'

describe('<Home />', () => {
  it('should check if the Home component renders correctly', () => {
    render(<Home />)
    const title = screen.getByText('Home')
    expect(title).toBeInTheDocument()
  })
})
