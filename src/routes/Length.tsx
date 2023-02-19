import React, { useState } from 'react'

type Props = {}

const Length = (props: Props) => {
  const [quilometro, setQuilometro] = useState<string>('')
  const [metro, setMetro] = useState<string>('')
  const [centimetro, setCentimetro] = useState<string>('')
  const [milimetro, setMilimetro] = useState<string>('')
  const [micrometro, setMicrometro] = useState<string>('')
  const [milha, setMilha] = useState<string>('')
  const [jarda, setJarda] = useState<string>('')
  const [pe, setPe] = useState<string>('')
  const [polegada, setPolegada] = useState<string>('')

  const units: { [key: string]: number } = {
    q: 100000,
    m: 100,
    c: 1,
    mm: 1 / 10,
    mc: 1 / 10000,
    mi: 160900,
    j: 91.44,
    pe: 30.48,
    po: 2.54
  }

  const convertLength = (value: string, key: string) => {
    const parserValue = parseInt(value)

    if (value.length === 0) {
      clear()
      return
    }

    if (isNaN(parserValue)) return

    const totalCentimetros = parserValue * units[key]

    setQuilometro((totalCentimetros / units['q']).toFixed(0).toString())
    setMetro((totalCentimetros / units['m']).toFixed(0).toString())
    setCentimetro((totalCentimetros / units['c']).toFixed(0).toString())
    setMilimetro((totalCentimetros / units['mm']).toFixed(0).toString())
    setMicrometro((totalCentimetros / units['mc']).toFixed(0).toString())
    setMilha((totalCentimetros / units['mi']).toFixed(0).toString())
    setJarda((totalCentimetros / units['j']).toFixed(0).toString())
    setPe((totalCentimetros / units['pe']).toFixed(0).toString())
    setPolegada((totalCentimetros / units['po']).toFixed(0).toString())
  }

  const clear = (): void => {
    setQuilometro('')
    setMetro('')
    setCentimetro('')
    setMilimetro('')
    setMicrometro('')
    setMilha('')
    setJarda('')
    setPe('')
    setPolegada('')
  }
  return (
    <div id='length'>
      <h2>Conversor de comprimento</h2>
      <form>
        <label>
          <span>Quilômetro</span>
          <input type="text" value={quilometro} onChange={(e) => convertLength(e.target.value, 'q')} />
        </label>
        <label>
          <span>Metro</span>
          <input type="text" value={metro} onChange={(e) => convertLength(e.target.value, 'm')} />
        </label>
        <label>
          <span>Centímetro</span>
          <input type="text" value={centimetro} onChange={(e) => convertLength(e.target.value, 'c')} />
        </label>
        <label>
          <span>Milímetro</span>
          <input type="text" value={milimetro} onChange={(e) => convertLength(e.target.value, 'mm')} />
        </label>
        <label>
          <span>Micrômeto</span>
          <input type="text" value={micrometro} onChange={(e) => convertLength(e.target.value, 'mc')} />
        </label>
        <label>
          <span>Milha</span>
          <input type="text" value={milha} onChange={(e) => convertLength(e.target.value, 'mi')} />
        </label>
        <label>
          <span>Jarda</span>
          <input type="text" value={jarda} onChange={(e) => convertLength(e.target.value, 'j')} />
        </label>
        <label>
          <span>Pe</span>
          <input type="text" value={pe} onChange={(e) => convertLength(e.target.value, 'pe')} />
        </label>
        <label>
          <span>Polegada</span>
          <input type="text" value={polegada} onChange={(e) => convertLength(e.target.value, 'pe')} />
        </label>
      </form>
    </div>
  )
}

export default Length