import { useState } from 'react'

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
      {/* <p onMouseEnter={handleKeyDown} style={{ color: { colour } }}> */}
      made by Jack Andrew Issac and Lou
      {/* </p> */}
    </footer>
  )
}

export default Footer
