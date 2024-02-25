import React from 'react'
import { themes } from '@storybook/theming'
import { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global'
import { defaultTheme } from '../src/styles/themes/default'

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    )
  ],
  parameters: {
    background: {
      default: 'dark'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      theme: themes.dark
    }
  }
}

export default preview
