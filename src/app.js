// css
import './scss/app.scss'
// layouts
import Switch from './components/Switch'
import Main from './layouts/Content'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div id="container">
      <Switch />
      <Main />
      <Footer />
    </div>
  )
}

export default App
