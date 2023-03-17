import { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [colour, setColour] = useState('black')

  const handleKeyDown = (evt) => {
    console.log('yes')

    // function randColour() {
    //   colour +
    //     `#${Math.floor(Math.random() * 0x1000000)
    //       .toString(16)
    //       .padStart(6, '0')}`
    // }

    // handleKeyDown(
    //   setColour()
    //   randColour()
    // )
  }
  // document.addEventListener('keydown', handleKeyDown)

  return (
    <footer>
      <div>
        <br></br>
        <Link to={'/Centre'}>Play Game</Link>
        made by Jack Andrew Issac and Lou
      </div>
    </footer>
  )
}

export default Footer
