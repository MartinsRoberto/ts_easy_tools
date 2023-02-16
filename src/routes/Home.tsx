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
          description="Converta para os números para outra unidade" 
          example1="Binário" 
          example2="Hexadecimal"
          example3="Octadecimal"
          example4="Decimal"
        />
        <Card 
          title="Numbers" 
          pathLink="/numbers" 
          description="Converta para os números para outra unidade" 
          example1="Decimal para binário" 
          example2="Decimal para binário"
          example3="Decimal para binário"
          example4="Decimal para binário"
        />
        <Card 
          title="Numbers" 
          pathLink="/numbers" 
          description="Converta para os números para outra unidade" 
          example1="Decimal para binário" 
          example2="Decimal para binário"
          example3="Decimal para binário"
          example4="Decimal para binário"
        />
      </div>
    </div>
  )
}

export default Home