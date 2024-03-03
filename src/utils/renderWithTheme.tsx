import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/themes/default'

interface WrapperProps {
  children: ReactNode
}

function Wrapper({ children }: WrapperProps) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

export function renderWithTheme(ui: ReactNode) {
  return render(ui, { wrapper: Wrapper })
}
