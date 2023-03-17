import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function West() {
  const [horizontal, setHorizontal] = useState(420)
  const [vertical, setVertical] = useState(250)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyPress = (e) => {
      console.log(horizontal, vertical)
      if (e.key === 'ArrowRight' && horizontal <= 430) {
        setHorizontal(horizontal + 10)
        if (horizontal >= 380) {
          navigate('/centre')
        }
      } else if (e.key === 'ArrowLeft' && horizontal >= -420) {
        setHorizontal(horizontal - 10)
      } else if (e.key === 'ArrowUp' && vertical >= -20) {
        setVertical(vertical - 10)
      } else if (e.key === 'ArrowDown' && vertical <= 390) {
        setVertical(vertical + 10)
      }
    }
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [horizontal, vertical])

  return (
    <>
      <div className="west-container">
        <img
          src="https://i.imgur.com/VHQwkas.gif"
          alt="character"
          className="character"
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

export default West
