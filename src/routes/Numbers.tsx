import { useState } from 'react'

type Props = {}

const Numbers = (props: Props) => {
  const [binario, setBinario] = useState<string>('')
  const [hexa, setHexa] = useState<string>('')
  const [octa, setOcta] = useState<string>('')
  const [decimal, setDecimal] = useState<string>('')

  const convertBinario = (value: string): void => {
    const convert: number = parseInt(value.replace(/[^01]/g, ""), 2)
    convertAll(convert)
  }

  const convertHexa = (value: string): void => {
    const convert: number = parseInt(value.replace(/[^0-9A-Fa-f]/g, ""), 16)
    convertAll(convert)
  }

  const convertOcta = (value: string): void => {
    const convert: number = parseInt(value.replace(/[^0-7]/g, ""), 8)
    convertAll(convert)
  }

  const convertDecimal = (value: string): void => {
    const convert: number = parseInt(value.replace(/[^0-9]/g, ""))
    convertAll(convert)
  }

  const convertAll = (value: number): void => {
    if (isNaN(value)) return
    setBinario(value.toString(2))
    setHexa(value.toString(16))
    setOcta(value.toString(8))
    setDecimal(value.toString(10))
  }

  return (
    <div id='numbers'>
      <h2>Conversor de números</h2>
      <form action="">
        <label>
          <span>Binário</span>
          <input type="text" value={binario} onChange={(e) => convertBinario(e.target.value)} />
        </label>
        <label>
          <span>Hexadecimal</span>
          <input type="text" value={hexa} onChange={(e) => convertHexa(e.target.value)} />
        </label>
        <label>
          <span>Octadecimal</span>
          <input type="text" value={octa} onChange={(e) => convertOcta(e.target.value)} />
        </label>
        <label>
          <span>Decimal</span>
          <input type="text" value={decimal} onChange={(e) => convertDecimal(e.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default Numbers
