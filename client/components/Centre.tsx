import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Centre() {
  const [horizontal, setHorizontal] = useState(10)
  const [vertical, setVertical] = useState(200)
  const [direction, setDirection] = useState('scaleX(1)')
  const navigate = useNavigate()

  console.log(horizontal, vertical)

  function isLeft(x : string):boolean {
    return (x == 'scaleX(1)')
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && horizontal <= 430) {
        setHorizontal(horizontal + 10)
        setDirection(isLeft(direction) ? 'scaleX(1)' : 'scaleX(1)')
        {
          if (horizontal === 270 && vertical === 90) {
            console.log('fuck yeah')
            // ADD IN REDIRECT HERE
            navigate('/Shop')
          } else if (horizontal >= 410) {
            navigate('/East')
          }
        }
      } else if (e.key === 'ArrowLeft' && horizontal >= -420) {
        setHorizontal(horizontal - 10)
        setDirection(isLeft(direction) ? 'scaleX(-1)' : 'scaleX(-)')
        if (horizontal === 270 && vertical === 90) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Shop')
        } else if (horizontal <= -410) {
          navigate('/West')
        }
      } else if (e.key === 'ArrowUp' && vertical >= -20) {
        setVertical(vertical - 10)
        if (horizontal === 270 && vertical === 90) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Shop')
        } else if (vertical <= -10) {
          navigate('/North')
        }
      } else if (e.key === 'ArrowDown' && vertical <= 390) {
        setVertical(vertical + 10)
        if (horizontal === 270 && vertical === 90) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Shop')
        } else if (vertical >= 380) {
          navigate('/South')
        }
      }
    }
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [horizontal, vertical])

  return (
    <>
      <div className="centre-container">
        <img
          src="https://imgur.com/2xb6z08.gif"
          alt="character"
          className="character"
          style={{ 
            left: horizontal,
            top: vertical,
            transform: direction
           }}
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

export default Centre
