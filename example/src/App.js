import React from 'react'

import NepaliInput from 'react-nepali-input'

const App = () => {
  const [value, setValue] = React.useState('')
  return <NepaliInput value={value} setValue={(value) => setValue(value)} />
}

export default App
