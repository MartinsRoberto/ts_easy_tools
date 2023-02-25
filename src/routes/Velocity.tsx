import React, { useState } from 'react'

type Props = {}

const units: { [key: string]: number } = {
  ms: 1,
  kmh: 1 / 3.6,
  feet: 1 / 3.281,
  miles: 1 / 2.237,
  knots: 1 / 1.944,
}

const Velocity = (props: Props) => {
  const [ms, setMs] = useState<string>('')
  const [kmh, setKmh] = useState<string>('')
  const [feet, setFeet] = useState<string>('')
  const [miles, setMiles] = useState<string>('')
  const [knots, setKnots] = useState<string>('')


  const convertVelocity = (value: string, key: string): void => {
    const inputRegex = /^[0-9.,]*$/

    if (!inputRegex.test(value)) return

    if (value.endsWith(',')) {
      switch (key) {
        case 'ms':
          setMs(value)
          break
        case 'kmh':
          setKmh(value)
          break
        case 'feet':
          setFeet(value)
          break
        case 'miles':
          setMiles(value)
          break
        case 'knots':
          setKnots(value)
          break
      }
      return
    }

    if (value.length === 0) {
      resetValues()
      return
    }

    const defaultVelocity = parseFloat(value.replace(',', '.')) * units[key]

    setMs((defaultVelocity / units['ms']).toString().replace('.', ','))
    setKmh((defaultVelocity / units['kmh']).toString().replace('.', ','))
    setFeet((defaultVelocity / units['feet']).toString().replace('.', ','))
    setMiles((defaultVelocity / units['miles']).toString().replace('.', ','))
    setKnots((defaultVelocity / units['knots']).toString().replace('.', ','))
  }

  const resetValues = (): void => {
    setMs('')
    setKmh('')
    setFeet('')
    setMiles('')
    setKnots('')
  }

  return (
    <div id='velocity'>
      <h2>Conversor de velocidades</h2>
      <form>
        <label>
          <span>m/s</span>
          <input type='text' value={ms} onChange={(e) => convertVelocity(e.target.value, 'ms')} />
        </label>
        <label>
          <span>km/h</span>
          <input type='text' value={kmh} onChange={(e) => convertVelocity(e.target.value, 'kmh')} />
        </label>
        <label>
          <span>pés/s</span>
          <input type='text' value={feet} onChange={(e) => convertVelocity(e.target.value, 'feet')} />
        </label>
        <label>
          <span>milhas/h</span>
          <input type='text' value={miles} onChange={(e) => convertVelocity(e.target.value, 'miles')} />
        </label>
        <label>
          <span>Nó</span>
          <input type='text' value={knots} onChange={(e) => convertVelocity(e.target.value, 'knots')} />
        </label>
      </form>
    </div>
  )
}

export default Velocity