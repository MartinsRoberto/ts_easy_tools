import React, { useState } from 'react'

type Props = {}

const units: { [key: string]: number } = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400,
}

const Time = (props: Props) => {
  const [seconds, setSeconds] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')
  const [hours, setHours] = useState<string>('')
  const [days, setDays] = useState<string>('')
  
  const convertTime = (value: string, key: string) => {
    const inputRegex = /^[0-9.,]*$/

    if (!inputRegex.test(value)) return

    if (value.endsWith(',')) {
      switch (key) {
        case 's':
          setSeconds(value)
          break
        case 'm':
          setMinutes(value)
          break
        case 'h':
          setHours(value)
          break
        case 'd':
          setDays(value)
          break
      }
      return
    }

    if (value.length === 0) {
      resetValues()
      return
    }

    const defaultTime = parseFloat(value.replace(',', '.')) * units[key]
    
    setSeconds((defaultTime / units['s']).toString())
    setMinutes((defaultTime / units['m']).toString())
    setHours((defaultTime / units['h']).toString())
    setDays((defaultTime / units['d']).toString())
  }

  const resetValues = (): void => {
    setSeconds('')
    setMinutes('')
    setHours('')
    setDays('')
  }

  return (
    <div id='time'>
      <h2>Conversor de tempo</h2>
      <form>
        <label>
          <span>Segundos</span>
          <input type="text" value={seconds} onChange={(e) => convertTime(e.target.value, 's')} />
        </label>
        <label>
          <span>Minutos</span>
          <input type="text" value={minutes} onChange={(e) => convertTime(e.target.value, 'm')} />
        </label>
        <label>
          <span>Horas</span>
          <input type="text" value={hours} onChange={(e) => convertTime(e.target.value, 'h')} />
        </label>
        <label>
          <span>Dias</span>
          <input type="text" value={days} onChange={(e) => convertTime(e.target.value, 'd')} />
        </label>
      </form>
    </div>
  )
}

export default Time