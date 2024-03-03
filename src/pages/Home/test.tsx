import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Home } from '.'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/themes/default'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  beforeEach(() => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    )
  })

  it('should check if static texts are displayed', () => {
    const label01 = screen.getByText('Vou trabalhar em')
    const label02 = screen.getByText('durante')
    const label03 = screen.getByText('minutos.')

    expect(label01).toBeInTheDocument()
    expect(label02).toBeInTheDocument()
    expect(label03).toBeInTheDocument()
  })

  it("should check if the project name's input is working properly", () => {
    const input = screen.getByPlaceholderText('Dê um nome para o seu projeto')
    const dataList = screen.getByLabelText('lista de sugestões de projeto')

    expect(dataList).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'task')
    expect(input).toHaveAttribute('list', 'task-suggestions')

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: 'Some text' } })
    expect(input).toHaveValue('Some text')
  })

  it("should check if the time's input is working properly", () => {
    const input = screen.getByPlaceholderText('00')

    expect(input).toHaveAttribute('type', 'number')
    expect(input).toHaveAttribute('step', '5')
    expect(input).toHaveAttribute('min', '5')
    expect(input).toHaveAttribute('max', '60')

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: '22' } })
    fireEvent.keyDown(input, { key: 'ArrowUp' })
    waitFor(() => expect(input).toHaveValue('25'))
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    waitFor(() => expect(input).toHaveValue('20'))
  })

  it('should check if the countdown has the right styles', () => {
    const countdownContainer = screen.getByLabelText('container do contador')
    const number = screen.getByLabelText('número do contador')
    const separator = screen.getByLabelText('separador')

    expect(countdownContainer).toHaveStyle(`
      font-family: 'Roboto Mono',monospace;
      font-size: 10rem;
      line-height: 8rem;
      color: #E1E1E6;
      display: flex;
      gap: 1rem;
    `)

    expect(number).toHaveStyle(`
      background: #29292E;
      padding: 2rem 1rem;
      border-radius: 8px;
    `)

    expect(separator).toHaveStyle(`
      padding: 2rem 0;
      color: #00875F;
      width: 4rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
    `)
  })

  it('should check if the disable feature works properly', () => {
    const taskInput = screen.getByPlaceholderText(
      'Dê um nome para o seu projeto'
    )
    const minutesAmountInput = screen.getByPlaceholderText('00')
    const button = screen.getByText('Começar')

    expect(button).toBeDisabled()

    fireEvent.change(taskInput, { target: { value: 'First project' } })
    fireEvent.change(minutesAmountInput, { target: { value: 25 } })

    expect(button).not.toBeDisabled()
  })

  it('should check if the form fields are resetted on submit', () => {
    const taskInput = screen.getByPlaceholderText(
      'Dê um nome para o seu projeto'
    )
    const minutesAmountInput = screen.getByPlaceholderText('00')
    const button = screen.getByText('Começar')

    fireEvent.change(taskInput, { target: { value: 'First project' } })
    fireEvent.change(minutesAmountInput, { target: { value: 25 } })

    fireEvent.click(button)

    waitFor(() => expect(taskInput).toHaveValue(''))
    waitFor(() => expect(minutesAmountInput).toHaveValue(0))
  })
})
