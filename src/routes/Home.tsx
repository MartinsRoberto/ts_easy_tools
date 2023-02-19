import { TbNumbers } from 'react-icons/tb'
import { FaTemperatureLow } from 'react-icons/Fa'
import { BiTimeFive } from 'react-icons/Bi'
import { CiRuler } from 'react-icons/Ci'
import { SlSpeedometer } from 'react-icons/Sl'
import { AiOutlineThunderbolt } from 'react-icons/ai'

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
          examples={["Binário", "Hexadecimal", "Octadecimal", "Decimal"]}
          icon={<TbNumbers />}
        />
        <Card
          title="Temperatura"
          pathLink="/temperature"
          description="Converta as temperaturas para outra unidade"
          examples={["Celsius", "Fahrenheit", "Kelvin", "Reaumur"]}
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
          description="Converta as medidas para outra unidades"
          examples={["Centímetro", "Metros", "Quilômetro", "Milha"]}
          icon={<CiRuler />}
        />
        <Card
          title="Velocidade"
          pathLink="/velocity"
          description="Converta as medidas para outra unidades"
          examples={["Metro/segundo", "km/hora", "Milhas/hora", "Pés/seg", "Nó"]}
          icon={<SlSpeedometer />}
        />
        <Card
          title="Energia"
          pathLink="/energy"
          description="Converta as medidas para outra unidades"
          examples={["Joule", "Quilocaloria", "Watt-hora", "Gram-calorie", "Pé-libra"]}
          icon={<AiOutlineThunderbolt />}
        />
      </div>
    </div>
  )
}

export default Home