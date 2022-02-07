import Github from '../img/github.svg'
import Codepen from '../img/codepen.svg'
import Linkedin from '../img/linkedin.svg'
import Dev from '../img/dev.svg'

const profiles = [
  {
    name: 'GitHub',
    link: 'https://github.com/saw-jan',
    component: <Github />,
  },
  {
    name: 'CodePen',
    link: 'https://codepen.io/sawjan',
    component: <Codepen />,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/sawjan/',
    component: <Linkedin />,
  },
  {
    name: 'Dev',
    link: 'https://dev.to/sawjan',
    component: <Dev />,
  },
]

export default function Profile() {
  return profiles.map(({ name, link, component }) => (
    <div key={name} className="links">
      <span className="tooltip">{name}</span>
      <a href={link}>{component}</a>
      <span className="active" />
    </div>
  ))
}
