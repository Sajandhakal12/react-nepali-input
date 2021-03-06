import React from 'react'
import { setUnicode } from './nepali'

const NepaliInput = React.forwardRef(
  (
    {
      getInputData,
      fontType = 'traditional',
      language = 'nepali',
      onChange,
      onKeyPress,
      setValue,
      ...rest
    },
    ref
  ) => {
    return (
      <input
        {...rest}
        onChange={(e) => {
          onChange && onChange(e)
          setValue && setValue(e.target.value)
        }}
        onKeyPress={(e) => {
          if (language === 'nepali') {
            if (fontType === 'traditional' || fontType === 'romanized') {
              const { value, newEndPos } = setUnicode(e, fontType)
              e.target.value = value
              e.target.setSelectionRange(newEndPos, newEndPos)
            }
            onKeyPress && onKeyPress(e)
            setValue && setValue(e.target.value)
          }
        }}
        ref={ref}
      />
    )
  }
)

export default NepaliInput
