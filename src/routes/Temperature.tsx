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
    console.log(value)
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

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>, key: string) {
    console.log('key', key)
    if (event.key === '-') {
      console.log('menos clicado')
      if (sign) {
        setSign(false)
        if (key == 'c' && sign) {
          const a = celsius.replace('-', '')
          setCelsius(a)
        }
      }
      else {
        setSign(true)

        switch (key) {
          case 'c':
            convertAll((+("-" + celsius)))
            return
          case 'f':
            convertAll((+("-" + fahrenheit)))
            return
          case 'k':
            convertAll((+("-" + kelvin)))
            return
          case 're':
            convertAll((+("-" + reaumur)))
            return
          case 'ra':
            convertAll((+("-" + rankine)))
            return
        }
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