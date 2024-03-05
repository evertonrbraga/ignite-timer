import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render as renderRtl } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/themes/default'

interface WrapperProps {
  children: ReactNode
  theme?: typeof defaultTheme
}

function Wrapper({ children, theme = defaultTheme }: WrapperProps) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

export function render(ui: ReactNode) {
  return renderRtl(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'
