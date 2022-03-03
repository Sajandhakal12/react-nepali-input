import React, { useRef } from 'react'

import NepaliInput from 'react-nepali-input'

const App = () => {
  const inputRef = useRef()
  const [value, setValue] = React.useState('')
  return (
    <NepaliInput
      value={value}
      setValue={(value) => setValue(value)}
      ref={inputRef}
    />
  )
}

export default App
