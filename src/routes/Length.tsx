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

  const unitToSeconds: { [key: string]: number } = {
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

    if (isNaN(parserValue)) return

    const totalCentimetros = parserValue * unitToSeconds[key]

    setQuilometro((totalCentimetros / unitToSeconds['q']).toFixed(5).toString())
    setMetro((totalCentimetros / unitToSeconds['m']).toFixed(5).toString())
    setCentimetro((totalCentimetros / unitToSeconds['c']).toFixed(5).toString())
    setMilimetro((totalCentimetros / unitToSeconds['mm']).toFixed(5).toString())
    setMicrometro((totalCentimetros / unitToSeconds['mc']).toFixed(5).toString())
    setMilha((totalCentimetros / unitToSeconds['mi']).toFixed(5).toString())
    setJarda((totalCentimetros / unitToSeconds['j']).toFixed(5).toString())
    setPe((totalCentimetros / unitToSeconds['pe']).toFixed(5).toString())
    setPolegada((totalCentimetros / unitToSeconds['po']).toFixed(5).toString())
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