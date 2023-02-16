import React, { useState } from 'react'

type Props = {}

const Temperature = (props: Props) => {
  const [celsius, setCelsius] = useState<string>('')
  const [fahrenheit, setFahrenheit] = useState<string>('')
  const [kelvin, setKelvin] = useState<string>('')
  const [reaumur, setReaumur] = useState<string>('')
  const [rankine, setRankine] = useState<string>('')
  const [sign, setSign] = useState<boolean>(false)

  const convertBase = (value: string, key: string): void => {
    console.log(value)
    let convert: number = 0

    if (value.length === 0) {
      clear()
    }
    else if (!isNaN(+value)) {
      if (key === 'c') {
        convert = +value
      } else if (key === 'f') {
        convert = (+value - 32) / 1.8
      } else if (key === 'k') {
        convert = +value - 273
      } else if (key === 're') {
        convert = +value * 1.25
      } else if (key === 'ra') {
        convert = (+value - 491.67) / 1.8
      }
      convertAll(convert)
    }
  }

  const convertAll = (value: number): void => {
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
    if (event.key !== '-') return

    if (sign) {
      setSign(false)

      switch (key) {
        case 'c':
          convertBase(celsius.replace('-', ''), 'c')
          return
        case 'f':
          convertBase(fahrenheit.replace('-', ''), 'f')
          return
        case 'k':
          convertBase(kelvin.replace('-', ''), 'k')
          return
        case 're':
          convertBase(reaumur.replace('-', ''), 're')
          return
        case 'ra':
          convertBase(rankine.replace('-', ''), 'ra')
          return
      }
    }
    else {
      setSign(true)

      switch (key) {
        case 'c':
          convertBase(("-" + celsius), 'c')
          return
        case 'f':
          convertBase(("-" + fahrenheit), 'f')
          return
        case 'k':
          convertBase(("-" + kelvin), 'k')
          return
        case 're':
          convertBase(("-" + reaumur), 're')
          return
        case 'ra':
          convertBase(("-" + rankine), 'ra')
          return
      }
    }
  }

  return (
    <div id='temperature'>
      <h2>Conversor de temperatura</h2>
      <form action="">
        <label>
          <span>Celsius</span>
          <input type="text" value={celsius} onChange={(e) => convertBase(e.target.value, 'c')} onKeyUp={(e) => handleKeyPress(e, 'c')} />
        </label>
        <label>
          <span>Fahrenheit</span>
          <input type="text" value={fahrenheit} onChange={(e) => convertBase(e.target.value, 'f')} onKeyUp={(e) => handleKeyPress(e, 'f')} />
        </label>
        <label>
          <span>Kelvin</span>
          <input type="text" value={kelvin} onChange={(e) => convertBase(e.target.value, 'k')} onKeyUp={(e) => handleKeyPress(e, 'k')} />
        </label>
        <label>
          <span>Reaumur</span>
          <input type="text" value={reaumur} onChange={(e) => convertBase(e.target.value, 're')} onKeyUp={(e) => handleKeyPress(e, 're')} />
        </label>
        <label>
          <span>Rankine</span>
          <input type="text" value={rankine} onChange={(e) => convertBase(e.target.value, 'ra')} onKeyUp={(e) => handleKeyPress(e, 'ra')} />
        </label>
      </form>
    </div>
  )
}

export default Temperature