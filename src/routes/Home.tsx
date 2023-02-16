import { TbNumbers } from 'react-icons/tb'
import { FaTemperatureLow } from 'react-icons/Fa'
import { BiTimeFive } from 'react-icons/Bi'
import { CiRuler } from 'react-icons/Ci'

import Card from '../components/Card'

import './Home.css'

type Props = {}

const Home = (props: Props) => {
  return (
    <div id="home">
      <h1>Conversor Online</h1>
      <div className="cards">
        <Card
          title="Numeros"
          pathLink="/numbers"
          description="Converta os números para outra unidade"
          examples={["Binário", "Hexadecimal", "Octadecimal", "Decimal", "Romanos"]}
          icon={<TbNumbers />}
        />
        <Card
          title="Temperatura"
          pathLink="/temperature"
          description="Converta as temperaturas para outra unidade"
          examples={["Celsius", "Fahrenheit", "Kelvin", "Reaumur", "Rankine"]}
          icon={<FaTemperatureLow />}
        />
        <Card
          title="Tempo"
          pathLink="/time"
          description="Converta as unidades de tempo para outra unidade"
          examples={["Segundos", "Minutos", "Horas", "Dias"]}
          icon={<BiTimeFive />}
        />
        <Card
          title="Comprimento"
          pathLink="/length"
          description="Converta as unidades de tempo para outra unidade"
          examples={["Centímetro", "Metros", "Quilômetro", "Milha"]}
          icon={<CiRuler />}
        />
      </div>
    </div>
  )
}

export default Home