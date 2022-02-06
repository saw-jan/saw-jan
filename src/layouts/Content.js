import mascort from '../img/mascot.png'

const Main = () => {
  return (
    <div id="main">
      <div id="mascot">
        <img src={mascort} draggable="false" />
      </div>
      <div id="details">
        <span id="lname">GURUNG</span>
        <span id="fname">SAWJAN</span>
        <span id="role">Developer - QA Engineer</span>
      </div>
    </div>
  )
}

export default Main
