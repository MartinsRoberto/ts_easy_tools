import React, { useState } from 'react'

type Props = {}

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

  const convertLength = (value: string, key: string) => {
    const inputRegex = /^[0-9,.]*$/;

    if (!inputRegex.test(value)) return

    if (value.substring(value.length - 1) == ",") {
      switch (key) {
        case 'q': setQuilometro(value)
          break
        case 'm': setMetro(value)
          break
        case 'c': setCentimetro(value)
          break
        case 'mm': setMilimetro(value)
          break
        case 'mc': setMicrometro(value)
          break
        case 'mi': setMilha(value)
          break
        case 'j': setJarda(value)
          break
        case 'pe': setPe(value)
          break
        case 'po': setPolegada(value)
          break
      }
      return
    }

    if (value.length == 0) {
      resetValues()
      return
    }

    const defaultLength = parseFloat(value.replace(',', '.')) * units[key]

    setQuilometro((defaultLength / units['q']).toString().replace('.', ','))
    setMetro((defaultLength / units['m']).toString().replace('.', ','))
    setCentimetro((defaultLength / units['c']).toString().replace('.', ','))
    setMilimetro((defaultLength / units['mm']).toString().replace('.', ','))
    setMicrometro((defaultLength / units['mc']).toString().replace('.', ','))
    setMilha((defaultLength / units['mi']).toString().replace('.', ','))
    setJarda((defaultLength / units['j']).toString().replace('.', ','))
    setPe((defaultLength / units['pe']).toString().replace('.', ','))
    setPolegada((defaultLength / units['po']).toString().replace('.', ','))
  }

  const resetValues = (): void => {
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
          <input type="text" value={polegada} onChange={(e) => convertLength(e.target.value, 'po')} />
        </label>
      </form>
    </div>
  )
}

export default Length