import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function East() {
  const [horizontal, setHorizontal] = useState(-420)
  const [vertical, setVertical] = useState(200)
  const navigate = useNavigate()

  console.log(horizontal)

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && horizontal <= 430) {
        setHorizontal(horizontal + 10)
        {
          if (horizontal === 410) {
            console.log('fuck yeah')
            // ADD IN REDIRECT HERE
            navigate('/East2')
          }
        }
      } else if (e.key === 'ArrowLeft' && horizontal >= -420) {
        setHorizontal(horizontal - 10)
        if (horizontal === 270 && vertical === 90) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Test')
        }
      } else if (e.key === 'ArrowUp' && vertical >= -20) {
        setVertical(vertical - 10)
        if (horizontal === 270 && vertical === 90) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Test')
        }
      } else if (e.key === 'ArrowDown' && vertical <= 390) {
        setVertical(vertical + 10)
        if (horizontal === 270 && vertical === 90) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Test')
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
      <div className="east-container">
        <img
          src="https://media.tenor.com/TZtbuPmwdjEAAAAi/super-saiyan-goku.gif"
          alt="character"
          className="character2"
          style={{ left: horizontal, top: vertical }}
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

export default East
