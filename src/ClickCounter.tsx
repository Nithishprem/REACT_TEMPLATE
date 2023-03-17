import React, { useState } from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount((c) => c + 1)}>Click {count}</button>
}

export default ClickCounter
