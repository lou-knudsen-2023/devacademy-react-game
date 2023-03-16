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
      {/* <p onMouseEnter={colourHandler} style={{ color: { colour } }}>
        made by JAIL
      </p> */}
      <Link to={'/Level1'}>to Level1</Link>
      <Link to={'/Test'}>to Test</Link>
      {/* <p onMouseEnter={handleKeyDown} style={{ color: { colour } }}> */}
      made by Jack Andrew Issac and Lou
      {/* </p> */}
    </footer>
  )
}

export default Footer
