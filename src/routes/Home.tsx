import { TbNumbers } from 'react-icons/tb'
import { FaTemperatureLow } from 'react-icons/Fa'

import Card from '../components/Card'

import './Home.css'

type Props = {}

const Home = (props: Props) => {
  return (
    <div id="home">
      <h1>Conversos e Ferramentas para Devs</h1>
      <div className="cards">
        <Card
          title="Numbers"
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
      </div>
    </div>
  )
}

export default Home