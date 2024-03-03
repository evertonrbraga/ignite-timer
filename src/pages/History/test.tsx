import { History } from '.'
import { renderWithTheme } from 'utils/renderWithTheme'

describe('<History />', () => {
  it('should snapshot the History component', () => {
    const { container } = renderWithTheme(<History />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
