import { render } from 'project-testing-library'
import { History } from '.'

describe('<History />', () => {
  it('should snapshot the History page', () => {
    const { container } = render(<History />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
