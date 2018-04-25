const Enzyme = require('enzyme')
const React = require('react')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

class App extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    console.log('getDerivedStateFromProps', nextProps)
    return null
  }
  render() {
    return <section>{this.props.name}</section>
  }
}

describe('Enzyme Test', () => {
  it('should call getDerivedStateFromProps', () => {
    const wrapper = Enzyme.shallow(<App name="foo" />)
    wrapper.setProps({ name: 'bar' })
    // getDerivedStateFromProps { name: 'foo' }
    // getDerivedStateFromProps { name: 'bar' }
  })
})
