import './App.css'

// import HelloWorld from './components/HelloWorld'

import SayMyName from './components/SayMyName'

import Pessoa from './components/Pessoa'

function App() {
  // const name = 'leonardo'
  // const newName = name.toUpperCase()

  // function sum(a, b) {
  //   return a + b
  // }

  const nome = 'leo'

  return (
    <div className="App">
      {/* <h1>Olá React!</h1>
      <p>Meu primeiro App!</p>
      <p>Olá, {newName}</p>
      <p>soma: {sum(1, 2)}</p> */}
      {/* <HelloWorld /> */}
      <SayMyName nome="Leonardo" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="João"
        idade="30"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App
