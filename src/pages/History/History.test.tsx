import { render, screen } from '@testing-library/react'
import { History } from './index.tsx'

describe('<History />', () => {
  it('should check if the History component renders correctly', () => {
    render(<History />)
    const title = screen.getByText('History')
    expect(title).toBeInTheDocument()
  })
})
