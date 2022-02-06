// css
import './scss/app.scss'
// layouts
import Header from './layouts/Header'
import Main from './layouts/Content'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div id="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
