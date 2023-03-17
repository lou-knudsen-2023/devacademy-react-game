import { useState, useEffect } from 'react'

function shopMove() {
  const [count, setCount] = useState(-420)

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

  console.log(count)

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
      <div></div>
    </>
  )
}

export default shopMove
