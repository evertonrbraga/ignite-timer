import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { Button } from '.'

describe('<Button />', () => {
  it('should snapshot the Button component', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Button />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should check if the disabled feature works properly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button disabled={true} />
      </ThemeProvider>
    )

    const button = screen.getByText('Começar')
    expect(button).toBeDisabled()
  })

  it('should check if Button component works properly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button disabled />
      </ThemeProvider>
    )

    const button = screen.getByText('Começar')
    const icon = screen.getByLabelText('ícone de play')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
