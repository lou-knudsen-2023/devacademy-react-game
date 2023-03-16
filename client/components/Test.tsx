import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Test() {
  const [count, setCount] = useState(-420)
  const navigate = useNavigate()
  // const [direction, setDirection] = useState(1)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (count === 420) {
        // console.log('next')
        navigate('/Level1')
      } else if (e.key === 'ArrowRight' && count <= 415) {
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
  // const handleClick = () => {
  //   setCount(count + 5)
  // }
  // const directionStr = 'scaleX(`${direction}`)'
  return (
    <>
      <div className="test-container">
        <img
          src="https://www.pikpng.com/pngl/b/496-4965357_random-image-from-user-8-bit-character-png.png"
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

export default Test
