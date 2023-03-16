import { useState } from 'react'

function Level1() {
  const [count, setCount] = useState(-375)

  const handleClick = () => {
    setCount(count + 5)
  }

  return (
    <>
      <div className="level-container">
        <img
          src="https://i.imgur.com/VHQwkas.gif"
          alt="character"
          className="character"
          onMouseOver={setCount}
          style={{ left: count }}
        />
      </div>
      <div>
        <button onClick={handleClick}>press</button>
      </div>
    </>
  )
}

export default Level1
