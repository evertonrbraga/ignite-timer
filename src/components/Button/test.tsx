import { screen } from '@testing-library/react'
import { Button } from '.'
import { renderWithTheme } from 'utils/renderWithTheme'

describe('<Button />', () => {
  it('should snapshot the Button component', () => {
    const { container } = renderWithTheme(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should check if the disabled feature works properly', () => {
    const { rerender } = renderWithTheme(<Button />)
    const button = screen.getByText('Começar')
    expect(button).not.toBeDisabled()
    rerender(<Button disabled />)
    expect(button).toBeDisabled()
  })

  it('should check if Button component works properly', () => {
    renderWithTheme(<Button disabled />)
    const button = screen.getByText('Começar')
    const icon = screen.getByLabelText('ícone de play')
    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
