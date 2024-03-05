import { render, screen } from 'project-testing-library'
import { Button } from '.'

describe('<Button />', () => {
  it('should snapshot the Button component', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should check if the disabled feature works properly', () => {
    const { rerender } = render(<Button />)
    const button = screen.getByText('Começar')
    expect(button).not.toBeDisabled()
    rerender(<Button disabled />)
    expect(button).toBeDisabled()
  })

  it('should check if Button component works properly', () => {
    render(<Button disabled />)
    const button = screen.getByText('Começar')
    const icon = screen.getByLabelText('ícone de play')
    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
