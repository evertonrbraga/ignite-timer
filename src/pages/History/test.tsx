import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'  
import { History } from '.'

describe('<History />', () => {
  it('should snapshot the History component', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <History />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})