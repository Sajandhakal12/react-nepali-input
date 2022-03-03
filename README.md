# react-nepali-input

> React library for typing nepali

[![NPM](https://img.shields.io/npm/v/react-nepali-input.svg)](https://www.npmjs.com/package/react-nepali-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-nepali-input
```

## Usage

```jsx
import React from 'react'

import NepaliInput from 'react-nepali-input'

const App = () => {
  const [value, setValue] = React.useState('')
  return <NepaliInput value={value} setValue={(value) => setValue(value)} />
}

export default App
```

## License

MIT © [Sajandhakal12](https://github.com/Sajandhakal12)
