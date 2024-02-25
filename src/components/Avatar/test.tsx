import { render, screen } from '@testing-library/react'

import { Avatar } from '.'

describe('<Avatar />', () => {
  it('should render the heading', () => {
    const { container } = render(<Avatar />)
    expect(screen.getByRole('heading', { name: /Avatar/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})