import React, { useState } from 'react'

type Props = {}

const Time = (props: Props) => {
  const [seconds, setSeconds] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')
  const [hours, setHours] = useState<string>('')
  const [days, setDays] = useState<string>('')

  const unitToSeconds: { [key: string]: number } = {
    s: 1,
    m: 60,
    h: 3600,
    d: 86400,
  }

  const convertTime = (value: string, key: string) => {
    const parsedValue = parseInt(value)

    if (isNaN(parsedValue)) return
  
    const totalSeconds = parsedValue * unitToSeconds[key]
    
    setSeconds(totalSeconds.toString())
    setMinutes((totalSeconds / unitToSeconds['m']).toFixed(3).toString())
    setHours((totalSeconds / unitToSeconds['h']).toFixed(3).toString())
    setDays((totalSeconds / unitToSeconds['d']).toFixed(3).toString())
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