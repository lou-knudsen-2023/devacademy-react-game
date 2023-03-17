import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const audio = new Audio(url(./))
audio.play()

function Shop() {
  const [horizontal, setHorizontal] = useState(0)
  const [vertical, setVertical] = useState(400)
  const navigate = useNavigate()

  // console.log(horizontal)
  console.log(vertical)

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && horizontal <= 430) {
        setHorizontal(horizontal + 10)
        {
          if (horizontal === 0 && vertical === 380) {
            console.log('fuck yeah')
            // ADD IN REDIRECT HERE
            navigate('/Centre')
          }
        }
      } else if (e.key === 'ArrowLeft' && horizontal >= -420) {
        setHorizontal(horizontal - 10)
        if (horizontal === 0 && vertical === 380) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Centre')
        }
      } else if (e.key === 'ArrowUp' && vertical >= -20) {
        setVertical(vertical - 10)
        if (horizontal === 0 && vertical === 380) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Centre')
        }
      } else if (e.key === 'ArrowDown' && vertical <= 390) {
        setVertical(vertical + 10)
        if (horizontal === 0 && vertical === 380) {
          console.log('fuck yeah')
          // ADD IN REDIRECT HERE
          navigate('/Centre')
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
          className="shop-character"
          style={{ left: horizontal, top: vertical }}
        />
      </div>
      <div></div>
    </>
  )
}

export default Shop
