import { useState, useEffect } from 'react'

function Level1() {
  const [count, setCount] = useState(-420)
  // const [direction, setDirection] = useState(1)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && count <= 415) {
        setCount(count + 10)
      } else if (e.key === 'ArrowLeft' && count >= -420) {
        setCount(count - 10)
        // setDirection(direction * -1)
      }
    }
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [count])
  // const handleClick = () => {
  //   setCount(count + 5)
  // }
  // const directionStr = 'scaleX(`${direction}`)'
  return (
    <>
      <div className="level1-container">
        <img
          src="https://i.imgur.com/VHQwkas.gif"
          alt="character"
          className="character"
          style={{ left: count }}
        />
      </div>
      <div>
        {/* <button onKeyDown={(e) => console.log(e)} onClick={handleClick}> */}
        {/* press */}
        {/* </button> */}
        {/* <input type="text" onKeyDown={handleKeyPress} /> */}
      </div>
    </>
  )
}

export default Level1
