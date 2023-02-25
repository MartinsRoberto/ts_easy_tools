import React, { useState } from "react"

type Props = {}

const units: { [key: string]: number } = {
  j: 1,
  qc: 4184,
  wh: 3600,
  g: 4184,
  pl: 1.356
}

const Energy = (props: Props) => {
  const [joule, setJoule] = useState<string>("")
  const [quiloCaloria, setQuiloCaloria] = useState<string>("")
  const [wattHora, setWattHora] = useState<string>("")
  const [gram, setGram] = useState<string>("")
  const [peLibra, setPeLibra] = useState<string>("")

  const convertEnergy = (value: string, key: string): void => {
    const inputRegex = /^[0-9,.]*$/;

    if (!inputRegex.test(value)) return

    if (value.substring(value.length - 1) == ",") {
      switch (key) {
        case 'j': setJoule(value)
          break
        case 'qc': setQuiloCaloria(value)
          break
        case 'wh': setWattHora(value)
          break
        case 'g': setGram(value)
          break
        case 'pl': setPeLibra(value)
          break
      }
      return
    }

    if (value.length == 0) {
      resetValues()
      return
    }

    const energyDefault = parseFloat(value.replace(',', '.')) * units[key]

    setJoule((energyDefault / units['j']).toString().replace('.', ','))
    setQuiloCaloria((energyDefault / units['qc']).toString().replace('.', ','))
    setWattHora((energyDefault / units['wh']).toString().replace('.', ','))
    setGram((energyDefault / units['g']).toString().replace('.', ','))
    setPeLibra((energyDefault / units['pl']).toString().replace('.', ','))

  }

  const resetValues = (): void => {
    setJoule("")
    setQuiloCaloria("")
    setWattHora("")
    setGram("")
    setPeLibra("")
  }

  return (
    <div id="energy">
      <h2>Conversor de energia</h2>
      <form>
        <label>
          <span>Joule</span>
          <input type="text" value={joule} onChange={(e) => convertEnergy(e.target.value, "j")} />
        </label>
        <label>
          <span>Quilo Caloria</span>
          <input type="text" value={quiloCaloria} onChange={(e) => convertEnergy(e.target.value, "qc")} />
        </label>
        <label>
          <span>Watt Hora</span>
          <input type="text" value={wattHora} onChange={(e) => convertEnergy(e.target.value, "wh")} />
        </label>
        <label>
          <span>Gram Calorie</span>
          <input type="text" value={gram} onChange={(e) => convertEnergy(e.target.value, "g")} />
        </label>
        <label>
          <span>Pé-libra Força</span>
          <input type="text" value={peLibra} onChange={(e) => convertEnergy(e.target.value, "pl")} />
        </label>
      </form>
    </div>
  )
}

export default Energy