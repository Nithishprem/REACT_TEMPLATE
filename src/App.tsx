import './styles.css'
import Image from './session.jpg'
import Logo from './logo.svg'
import ClickCounter from './ClickCounter'

export const App = () => {
  const name = 'Nithish'

  return (
    <>
      <h1>
        Edited Welcome to react typescript course - {process.env.NODE_ENV}{' '}
        {name}
        {/* {process.env.name} */}
      </h1>
      <img src={Image} alt="" width={'500px'} />
      <img src={Logo} alt="" width={'50px'} />
      <ClickCounter />
    </>
  )
}
