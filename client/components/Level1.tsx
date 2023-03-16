import { useState, useEffect } from 'react'

function Level1() {
  const [count, setCount] = useState(-375)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        setCount(count + 5)
      } else if (e.key === 'ArrowLeft' && count >= -375) {
        setCount(count - 5)
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

  return (
    <>
      <div className="level-container">
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
