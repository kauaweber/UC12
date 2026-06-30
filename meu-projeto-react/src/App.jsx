import { useState } from 'react'

import './App.css'
import Botao from './components/Botao'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className='container'>

        {/* <Botao text={"click"} fu={() => alert("click")}/>
        <Botao text={"about me"} fu={() => alert("click")}/>
        <Botao text={"gay"} fu={() => alert("click")}/> */}
        <div>
          <Card className="icon"/>
          <h1>Texto</h1>
        </div>
    
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic magnam perspiciatis autem facere non quos voluptatum optio laudantium. Deleniti illo voluptatem voluptate itaque saepe recusandae excepturi amet autem non ipsam!
        </p>
       
        <Botao text={"Click"}/>
      </div>

      
  )
}

export default App
