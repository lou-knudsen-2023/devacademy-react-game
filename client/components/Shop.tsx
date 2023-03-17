import { useState, useEffect } from 'react'

function shopMove() {
  const [horizontal, setHorizontal] = useState(-420)
  const [vertical, setVertical] = useState(200)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && horizontal <= 430) {
        setHorizontal(horizontal + 10)
        {
          if (horizontal === 270 && vertical === 90) {
            console.log('fuck yeah')
            // ADD IN REDIRECT HERE
            navigate('/Test')
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
      <div className="shop-container">
        <img
          src="https://i.imgur.com/VHQwkas.gif"
          alt="character"
          className="character"
          style={{ left: horizontal, top: vertical }}
        />
      </div>
      <div></div>
    </>
  )
}

export default shopMove
