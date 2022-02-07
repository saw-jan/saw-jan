import Profile from '../components/Profile'
import badge from '../img/badge.png'

const Footer = () => {
  return (
    <div id="footer">
      <div id="links">
        <Profile />
      </div>
      <div id="contributor">
        <a href="https://owncloud.com/">
          <img src={badge} draggable="false" width="200" />
        </a>
      </div>
    </div>
  )
}

export default Footer
