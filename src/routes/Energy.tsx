import React, { useState } from "react"

type Props = {}

const Energy = (props: Props) => {
  const [joule, setJoule] = useState<number>(0)
  const [quiloCaloria, setQuiloCaloria] = useState<number>(0)
  const [wattHora, setWattHora] = useState<number>(0)
  const [gram, setGram] = useState<number>(0)
  const [peLibra, setPeLibra] = useState<number>(0)

  const units: { [key: string]: number } = {
    j: 1,
    qc: 4184,
    wh: 3600,
    g: 4184,
    pl: 1.356
  }

  const convertEnergy = (value: string, key: string): void => {
    const parserValue = parseInt(value)

    console.log('aaaaa')
    if (value.length === 0) {
      clear()
      return
    }

    console.log('bbbbbb')
    if(parserValue < 0) return

    const energyDefault = parserValue * units[key]

    setJoule(+(energyDefault / units.j).toFixed(2))
    setQuiloCaloria(+(energyDefault / units.qc).toFixed(2))
    setWattHora(+(energyDefault / units.wh).toFixed(2))
    setGram(+(energyDefault / units.g).toFixed(2))
    setPeLibra(+(energyDefault / units.pl).toFixed(2))

  }

  const clear = (): void => {
    setJoule(0)
    setQuiloCaloria(0)
    setWattHora(0)
    setGram(0)
    setPeLibra(0)
  }
  return (
    <div id="energy">
      <h2>Conversor de energia</h2>
      <form>
        <label>
          <span>Joule</span>
          <input type="number" value={joule} onChange={(e) => convertEnergy(e.target.value, "j")} />
        </label>
        <label>
          <span>Quilo Caloria</span>
          <input type="number" value={quiloCaloria} onChange={(e) => convertEnergy(e.target.value, "qc")} />
        </label>
        <label>
          <span>Watt Hora</span>
          <input type="number" value={wattHora} onChange={(e) => convertEnergy(e.target.value, "wh")} />
        </label>
        <label>
          <span>Gram Calorie</span>
          <input type="number" value={gram} onChange={(e) => convertEnergy(e.target.value, "g")} />
        </label>
        <label>
          <span>Pé-libra Força</span>
          <input type="number" value={peLibra} onChange={(e) => convertEnergy(e.target.value, "pl")} />
        </label>
      </form>
    </div>
  )
}

export default Energy