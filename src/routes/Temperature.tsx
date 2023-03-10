import React, { useState } from 'react'

type Props = {}

const Temperature = (props: Props) => {
  const [celsius, setCelsius] = useState<string>('')
  const [fahrenheit, setFahrenheit] = useState<string>('')
  const [kelvin, setKelvin] = useState<string>('')
  const [reaumur, setReaumur] = useState<string>('')
  const [rankine, setRankine] = useState<string>('')
  const [sign, setSign] = useState<boolean>(false)

  const convertTemperature = (value: string, key: string): void => {
    let convert: number = 0

    if (value.length === 0) {
      clear()
      return
    }

    if (isNaN(+value)) {
      return
    }

    switch (key) {
      case 'c':
        convert = +value
        break
      case 'f':
        convert = (+value - 32) / 1.8
        break
      case 'k':
        convert = +value - 273
        break
      case 're':
        convert = +value * 1.25
        break
      case 'ra':
        convert = (+value - 491.67) / 1.8
        break
      default:
        return
    }
    updateTemperature(convert)
  }

  const updateTemperature = (value: number): void => {
    const c: number = Math.round(value)
    const f: number = Math.round(value * 1.8 + 32)
    const k: number = Math.round(value + 273)
    const re: number = Math.round(value / 1.25)
    const ra: number = Math.round(value * 1.8 + 491.67)

    setCelsius(c.toString())
    setFahrenheit(f.toString())
    setKelvin(k.toString())
    setReaumur(re.toString())
    setRankine(ra.toString())
  }

  const clear = (): void => {
    setCelsius('')
    setFahrenheit('')
    setKelvin('')
    setReaumur('')
    setRankine('')
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, key: string) => {
    if (event.key !== '-') {
      return
    }

    const keysMap: { [key: string]: string } = {
      c: celsius,
      f: fahrenheit,
      k: kelvin,
      re: reaumur,
      ra: rankine
    }

    const currentValue = keysMap[key]

    if (sign) {
      setSign(false)
      convertTemperature(currentValue.replace('-', ''), key)
    } else {
      setSign(true)
      convertTemperature(`-${currentValue}`, key)
    }
  }

  return (
    <div id='temperature'>
      <h2>Conversor de temperatura</h2>
      <form action="">
        <label>
          <span>Celsius</span>
          <input type="text" value={celsius} onChange={(e) => convertTemperature(e.target.value, 'c')} onKeyUp={(e) => handleKeyPress(e, 'c')} />
        </label>
        <label>
          <span>Fahrenheit</span>
          <input type="text" value={fahrenheit} onChange={(e) => convertTemperature(e.target.value, 'f')} onKeyUp={(e) => handleKeyPress(e, 'f')} />
        </label>
        <label>
          <span>Kelvin</span>
          <input type="text" value={kelvin} onChange={(e) => convertTemperature(e.target.value, 'k')} onKeyUp={(e) => handleKeyPress(e, 'k')} />
        </label>
        <label>
          <span>Reaumur</span>
          <input type="text" value={reaumur} onChange={(e) => convertTemperature(e.target.value, 're')} onKeyUp={(e) => handleKeyPress(e, 're')} />
        </label>
        <label>
          <span>Rankine</span>
          <input type="text" value={rankine} onChange={(e) => convertTemperature(e.target.value, 'ra')} onKeyUp={(e) => handleKeyPress(e, 'ra')} />
        </label>
      </form>
    </div>
  )
}

export default Temperature